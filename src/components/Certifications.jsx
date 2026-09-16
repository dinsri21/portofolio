import React, { useState } from 'react'
import { Maximize2, X, ShieldCheck } from 'lucide-react'

// Placeholder certificate graphics when PNGs aren't yet replaced by user
const CERTIFICATES = [
  {
    id: 1,
    title: 'AI Productivity and AI API Integration for Developers',
    issuer: 'Hacktiv8 Indonesia — Maju Bareng AI Program · 2026',
    imgSrc: '/cert-ai-productivity.jpg',
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560"><rect width="800" height="560" fill="%230f111a" rx="16"/><rect x="20" y="20" width="760" height="520" fill="none" stroke="%236366f1" stroke-width="2" stroke-dasharray="8 8" rx="12"/><text x="400" y="240" font-family="sans-serif" font-size="28" font-weight="bold" fill="%23f8fafc" text-anchor="middle">Sertifikat 1 (PNG)</text><text x="400" y="285" font-family="sans-serif" font-size="18" fill="%23a5b4fc" text-anchor="middle">AI Productivity %26 AI API Integration</text></svg>`
  },
  {
    id: 2,
    title: 'Green Jobs Training — Solar Power Installation',
    issuer: 'Balai Besar Pelatihan Vokasi dan Produktivitas Bandung · 2026',
    imgSrc: '/cert-solar-power.jpg',
    fallbackSvg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560"><rect width="800" height="560" fill="%230f111a" rx="16"/><rect x="20" y="20" width="760" height="520" fill="none" stroke="%2310b981" stroke-width="2" stroke-dasharray="8 8" rx="12"/><text x="400" y="240" font-family="sans-serif" font-size="28" font-weight="bold" fill="%23f8fafc" text-anchor="middle">Sertifikat 2 (PNG)</text><text x="400" y="285" font-family="sans-serif" font-size="18" fill="%236ee7b7" text-anchor="middle">Green Jobs Training — Solar Power Installation</text></svg>`
  }
]

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div id="certifications" className="w-full">

      {/* Certificate PNG Grid (Pure Vanilla CSS Layout) */}
      <div className="cert-grid">
        {CERTIFICATES.map((cert) => (
          <div key={cert.id} className="cert-card">
            {/* Image Preview Container (Fixed Compact Box) */}
            <div
              className="cert-img-box"
              onClick={() => setSelectedImg(cert)}
            >
              <img
                src={cert.imgSrc}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = cert.fallbackSvg
                }}
                alt={cert.title}
                className="cert-img"
              />

              {/* Hover Overlay */}
              <div className="cert-overlay">
                <Maximize2 className="w-6 h-6 text-emerald-400 mb-1" />
                <span className="cert-overlay-text">Klik untuk Perbesar</span>
              </div>
            </div>

            {/* Title & Issuer Info below image */}
            <div className="cert-info">
              <div>
                <h3 className="cert-title">
                  {cert.title}
                </h3>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Certificate Zoom Modal */}
      {selectedImg && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] p-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="modal-close-btn"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImg.imgSrc}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = selectedImg.fallbackSvg
              }}
              alt={selectedImg.title}
              className="w-full h-full object-contain max-h-[85vh] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
