#!/usr/bin/env node
// USAGE : node scripts/import-article.mjs <url-article>
// Prerequis : npm install --save-dev puppeteer

import { writeFileSync, mkdirSync } from 'fs'
import { createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import path from 'path'
import https from 'https'
import http from 'http'
import puppeteer from 'puppeteer'

const url = process.argv[2]
if (!url) { console.error('Usage: node scripts/import-article.mjs <url>'); process.exit(1) }

async function scrapePage(url) {
  console.log('  Lancement navigateur headless...')
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

  const data = await page.evaluate(() => {
    const getText = (el) => el ? el.innerText.trim() : ''
    const getAttr = (sel, attr) => { const el = document.querySelector(sel); return el ? (el.getAttribute(attr) || '') : '' }

    const title = getText(document.querySelector('h1'))
    const excerpt = getAttr('meta[name="description"]', 'content')
    const heroImg = getAttr('meta[property="og:image"]', 'content')
    const date = getAttr('meta[property="article:published_time"]', 'content') || getAttr('time[datetime]', 'datetime')
    const author = getText(document.querySelector('.author-name, [rel="author"], .post-author-name'))
    const categories = [...document.querySelectorAll('.cat-links a, .post-categories a, .category a')].map(el => el.innerText.trim()).filter(Boolean)

    const contentEl = document.querySelector('.swm-post-single-content, .entry-content, .post-content, article .content, article')
    if (!contentEl) return { title, excerpt, heroImg, date, author, categories, sections: [] }

    const sections = []
    const h2s = contentEl.querySelectorAll('h2')

    h2s.forEach((h2, idx) => {
      const sectionTitle = h2.innerText.trim()
      const blocks = []
      let node = h2.nextElementSibling
      const nextH2 = h2s[idx + 1]

      while (node && node !== nextH2) {
        const tag = node.tagName?.toLowerCase()
        if (tag === 'p') {
          const text = node.innerText.trim()
          if (text.length > 20) blocks.push({ type: 'paragraph', text })
        } else if (tag === 'ul' || tag === 'ol') {
          const items = [...node.querySelectorAll('li')].map(li => li.innerText.trim()).filter(t => t.length > 3)
          if (items.length) blocks.push({ type: 'list', items })
        } else if (tag === 'blockquote') {
          const text = node.innerText.trim()
          if (text.length > 20) blocks.push({ type: 'callout', text })
        } else if (tag === 'h3') {
          blocks.push({ type: 'subtitle', text: node.innerText.trim() })
        } else if (tag === 'div') {
          const isCallout = /callout|encadre|highlight|notice|tip|warning|info/i.test(node.className || '')
          const text = node.innerText.trim()
          if (isCallout && text.length > 20) {
            blocks.push({ type: 'callout', text })
          } else {
            node.querySelectorAll('p').forEach(p => { const t = p.innerText.trim(); if (t.length > 20) blocks.push({ type: 'paragraph', text: t }) })
            node.querySelectorAll('ul, ol').forEach(ul => { const items = [...ul.querySelectorAll('li')].map(li => li.innerText.trim()).filter(t => t.length > 3); if (items.length) blocks.push({ type: 'list', items }) })
          }
        }
        node = node.nextElementSibling
      }

      if (sectionTitle.length > 3) sections.push({ title: sectionTitle, blocks })
    })

    if (sections.length === 0) {
      const blocks = []
      contentEl.querySelectorAll('p').forEach(p => { const text = p.innerText.trim(); if (text.length > 30) blocks.push({ type: 'paragraph', text }) })
      if (blocks.length) sections.push({ title: 'Introduction', blocks })
    }

    return { title, excerpt, heroImg, date, author, categories, sections }
  })

  await browser.close()
  return data
}

async function downloadImage(imageUrl, destPath) {
  if (!imageUrl) return null
  mkdirSync(path.dirname(destPath), { recursive: true })
  const doDownload = (u) => new Promise((resolve, reject) => {
    const client = u.startsWith('https') ? https : http
    client.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, async (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return doDownload(res.headers.location).then(resolve).catch(reject)
      try { await pipeline(res, createWriteStream(destPath)); resolve(destPath) } catch (e) { reject(e) }
    }).on('error', reject)
  })
  return doDownload(imageUrl)
}

function escapeTS(str) { return (str || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$') }

function slugify(str) {
  return (str || '').toLowerCase()
    .replace(/[àáâã]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function normalizeDate(raw) { const m = (raw || '').match(/(\d{4}-\d{2}-\d{2})/); return m ? m[1] : new Date().toISOString().split('T')[0] }

function generateTSEntry(data, localImgPath, urlSlug) {
  const slug = slugify(data.title) || urlSlug
  const imgPublicPath = localImgPath ? `/images/blog/${path.basename(localImgPath)}` : (data.heroImg || '')

  const blocksToTS = (blocks) => (blocks || []).map(block => {
    if (block.type === 'paragraph') return `          { type: 'paragraph', text: \`${escapeTS(block.text)}\` },`
    if (block.type === 'subtitle') return `          { type: 'subtitle', text: \`${escapeTS(block.text)}\` },`
    if (block.type === 'list') { const items = block.items.map(it => `            \`${escapeTS(it)}\`,`).join('\n'); return `          { type: 'list', items: [\n${items}\n          ] },` }
    if (block.type === 'callout') { const t = block.title ? `title: \`${escapeTS(block.title)}\`, ` : ''; return `          { type: 'callout', ${t}text: \`${escapeTS(block.text)}\` },` }
    return ''
  }).join('\n')

  const sectionsTS = (data.sections || []).map((s, i) => `
      {
        number: '${String(i + 1).padStart(2, '0')}',
        title: \`${escapeTS(s.title)}\`,
        blocks: [
${blocksToTS(s.blocks)}
        ],
      },`).join('')

  const cats = (data.categories || []).length ? data.categories.map(c => `'${c}'`).join(', ') : "'Blog'"
  const readTime = Math.max(3, Math.ceil((data.sections || []).length * 1.5 + 2))

  return `
  // ────────────────────────────────────────────────────────
  {
    slug: '${slug}',
    title: \`${escapeTS(data.title)}\`,
    excerpt: \`${escapeTS(data.excerpt)}\`,
    categories: [${cats}],
    tags: [],
    author: {
      name: '${escapeTS(data.author) || 'Darwin Agency'}',
      role: '',
      photo: '/images/logo-darwin.png',
    },
    date: '${normalizeDate(data.date)}',
    readTime: ${readTime},
    heroImg: '${imgPublicPath}',
    sections: [${sectionsTS}
    ],
    relatedSlugs: [],
  },
`
}

async function main() {
  console.log('\n📥  Scraping : ' + url)
  const data = await scrapePage(url)
  console.log('\n🔍  Extraction terminee :')
  console.log('    Titre    : ' + (data.title || '').slice(0, 70))
  console.log('    Date     : ' + data.date)
  console.log('    Auteur   : ' + data.author)
  console.log('    Cats     : ' + (data.categories || []).join(', '))
  console.log('    Image    : ' + (data.heroImg || '').slice(0, 70))
  console.log('    Sections : ' + (data.sections || []).length)

  let localImgPath = null
  if (data.heroImg) {
    const ext = path.extname(data.heroImg.split('?')[0]) || '.jpg'
    const imgSlug = slugify(data.title || 'article')
    const dest = path.join(process.cwd(), 'public/images/blog', imgSlug + ext)
    try { await downloadImage(data.heroImg, dest); localImgPath = dest; console.log('    Image sauvegardee : public/images/blog/' + imgSlug + ext) }
    catch (e) { console.warn('    Echec image : ' + e.message) }
  }

  const urlSlug = url.replace(/\/$/, '').split('/').pop()
  const tsEntry = generateTSEntry(data, localImgPath, urlSlug)

  console.log('\n────────────────────────────────────────────')
  console.log('📋  Code a ajouter dans app/data/blog.ts :')
  console.log('────────────────────────────────────────────\n')
  console.log(tsEntry)

  const outPath = path.join(process.cwd(), 'scripts', '_last-import.ts')
  writeFileSync(outPath, tsEntry)
  console.log('\n💾  Sauvegarde dans scripts/_last-import.ts')
  console.log('────────────────────────────────────────────\n')
}

main().catch(e => { console.error('Erreur :', e.message); process.exit(1) })
