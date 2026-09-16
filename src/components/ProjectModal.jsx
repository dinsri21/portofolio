import React, { useEffect } from 'react'
import { X, CheckCircle2, ExternalLink, Layers } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Project Spotlight</span>
        </div>

        <h3 className="modal-title text-white">{project.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.desc}</p>

        {/* Stack Tags */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack & Tools</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Checklist */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Fitur & Kapabilitas Utama</h4>
          <ul className="modal-features-list">
            {project.features.map((feat, i) => (
              <li key={i} className="modal-feature-item">
                <CheckCircle2 className="feature-check-icon w-4 h-4" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => alert(`Membuka pratinjau detail untuk ${project.title}`)}
            className="btn-primary py-2.5 px-5 text-sm"
          >
            <span>Preview Live</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <button onClick={onClose} className="btn-secondary py-2.5 px-5 text-sm">
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
