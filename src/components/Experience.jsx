import React, { useState } from 'react'
import { Briefcase, Award } from 'lucide-react'
import { orgExperience, workExperience } from '../data.js'

export default function Experience() {
  const [expType, setExpType] = useState('org')

  const currentList = expType === 'org' ? orgExperience : workExperience

  return (
    <div id="experience" className="experience-section">

      {/* Tab Switcher */}
      <div className="exp-tab-wrapper">
        <div className="exp-tab-group">
          <button
            onClick={() => setExpType('org')}
            className={`exp-tab-btn ${expType === 'org' ? 'active' : ''}`}
          >
            <Award className="w-4 h-4" />
            <span>Organisasi ({orgExperience.length})</span>
          </button>
          <button
            onClick={() => setExpType('work')}
            className={`exp-tab-btn ${expType === 'work' ? 'active' : ''}`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Pengalaman Kerja ({workExperience.length})</span>
          </button>
        </div>
      </div>

      {/* Timeline List */}
      <div className="timeline-container">
        {currentList.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card glass-card">
              <div className="timeline-card-header">
                <h3 className="timeline-role">{item.title}</h3>
                <span className="exp-badge">
                  {item.org}
                </span>
              </div>

              {item.desc && (
                <p className="timeline-desc">
                  {item.desc}
                </p>
              )}

              <ul className="timeline-bullet-list">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="timeline-bullet">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
