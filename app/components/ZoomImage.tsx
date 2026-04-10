'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{ margin: '32px 0', cursor: 'zoom-in', position: 'relative' }}
      >
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={683}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {/* Hint */}
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          background: 'rgba(0,0,0,0.6)', color: '#fff',
          padding: '6px 12px', borderRadius: 4,
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
          display: 'flex', alignItems: 'center', gap: 6,
          pointerEvents: 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
          </svg>
          AGRANDIR
        </div>
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
            padding: 24,
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute', top: 24, right: 24,
              background: 'none', border: 'none', color: '#fff',
              cursor: 'pointer', padding: 8,
            }}
            aria-label="Fermer"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <Image
            src={src}
            alt={alt}
            width={2064}
            height={1152}
            style={{
              maxWidth: '95vw', maxHeight: '90vh',
              width: 'auto', height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  )
}
