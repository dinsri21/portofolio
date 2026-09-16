import React, { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { projects } from '../data.js'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['Semua', 'Web App', 'Dashboard', 'Company Profile']

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))

    if (activeTab === 'Semua') return matchesSearch
    if (activeTab === 'Web App') return matchesSearch && (p.title.includes('PKKMB') || p.title.includes('Flow') || p.title.includes('Monetra'))
    if (activeTab === 'Dashboard') return matchesSearch && (p.features.some(f => f.toLowerCase().includes('dashboard')) || p.desc.toLowerCase().includes('dashboard'))
    if (activeTab === 'Company Profile') return matchesSearch && p.desc.toLowerCase().includes('company profile')
    return matchesSearch
  })

  return (
    <div id="projects" className="projects-section">
      {/* Filter Bar & Search */}
      <div className="projects-filter-bar">
        <div className="projects-cat-group">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`projects-cat-btn ${activeTab === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-search-box">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Cari proyek atau stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <div key={p.title} className="glass-card project-card">
              <div className="project-card-header">
                <h3 className="project-title">{p.title}</h3>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="tags-row">
                {p.stack.map((s) => (
                  <span key={s} className="tag-pill">
                    {s}
                  </span>
                ))}
              </div>

              <div className="card-action-bar">
                <button
                  onClick={() => setSelectedProject(p)}
                  className="view-detail-btn"
                >
                  <span>Detail fiturs & spesifikasi</span>
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card-static text-center py-12">
          <p className="text-slate-400">Tidak ada proyek yang sesuai dengan kata kunci pencarian.</p>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
