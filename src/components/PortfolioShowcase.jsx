import React, { useState } from 'react'
import { FolderGit2, Award, Briefcase, Sparkles } from 'lucide-react'
import Projects from './Projects.jsx'
import Certifications from './Certifications.jsx'
import Experience from './Experience.jsx'

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('projects')

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
  ]

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Modern Showcase Header */}
        <div className="showcase-header-center">
          <h2 className="section-title">Portfolio Highlights</h2>
        </div>

        {/* Floating Capsule Segmented Switcher */}
        <div className="showcase-capsule-wrapper">
          <div className="showcase-capsule-bar">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`showcase-capsule-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComponent className="capsule-icon" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Rendering */}
        <div className="showcase-tab-content">
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'certificates' && <Certifications />}
          {activeTab === 'experience' && <Experience />}
        </div>
      </div>
    </section>
  )
}


