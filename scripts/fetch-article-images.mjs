#!/usr/bin/env node
// USAGE : node scripts/fetch-article-images.mjs <url-article> <dossier-destination>
// Télécharge toutes les images inline du contenu d'un article Darwin

import { mkdirSync } from 'fs'
import { createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import path from 'path'
import https from 'https'
import http from 'http'
import puppeteer from 'puppeteer'

const url = process.argv[2]
const destFolder = process.argv[3] || 'public/images/blog'

if (!url) { console.error('Usage: node scripts/fetch-article-images.mjs <url>'); process.exit(1) }

async function getImageUrls(url) {
  console.log('  Lancement navigateur headless...')
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

  const images = await page.evaluate(() => {
    const content = document.querySelector('.swm-post-single-content, .entry-content, article')
    if (!content) return []
    return [...content.querySelectorAll('img')]
      .map(img => img.src || img.dataset.src || img.dataset.lazySrc || '')
      .filter(src => src && src.startsWith('http'))
  })

  await browser.close()
  return [...new Set(images)]
}

async function downloadImage(imageUrl, destPath) {
  mkdirSync(path.dirname(destPath), { recursive: true })
  const doDownload = (u) => new Promise((resolve, reject) => {
    const client = u.startsWith('https') ? https : http
    client.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, async (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return doDownload(res.headers.location).then(resolve).catch(reject)
      }
      try { await pipeline(res, createWriteStream(destPath)); resolve(destPath) }
      catch (e) { reject(e) }
    }).on('error', reject)
  })
  return doDownload(imageUrl)
}

async function main() {
  console.log('\n🔍  Scraping images : ' + url)
  const images = await getImageUrls(url)

  if (images.length === 0) {
    console.log('  Aucune image trouvée dans le contenu.')
    return
  }

  console.log(`  ${images.length} image(s) trouvée(s)\n`)

  for (const imgUrl of images) {
    const rawName = imgUrl.split('/').pop().split('?')[0]
    const ext = path.extname(rawName) || '.jpg'
    const basename = rawName.replace(/[^a-z0-9._-]/gi, '-').toLowerCase()
    const dest = path.join(process.cwd(), destFolder, basename)

    try {
      await downloadImage(imgUrl, dest)
      console.log(`  ✅  ${basename}`)
    } catch (e) {
      console.warn(`  ❌  ${rawName} — ${e.message}`)
    }
  }

  console.log(`\n✅  Images sauvegardées dans ${destFolder}/`)
}

main().catch(e => { console.error('Erreur :', e.message); process.exit(1) })
