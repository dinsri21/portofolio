import React from 'react'
import { Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react'
import { softSkills } from '../data.js'

const TECH_CARDS = [
  {
    name: 'HTML5',
    color: '#E34F26',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.432 7.228H6.58l.245 2.76h9.873l-.683 7.643-3.992 1.085-3.98-1.087-.253-2.836h-2.73l.48 5.411 6.482 1.77 6.49-1.77 1.2-13.016z" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.432 7.228H6.58l.245 2.76h9.873l-.683 7.643-3.992 1.085-3.98-1.087-.253-2.836h-2.73l.48 5.411 6.482 1.77 6.49-1.77 1.2-13.016z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.465.735-.63 1.29-.45.404.135.795.48.96.9.51-.345.81-.54 1.35-.9-.315-.555-.66-1.02-1.155-1.32-.735-.45-1.74-.57-2.61-.27-1.35.465-2.055 1.545-1.89 2.91.135 1.11.75 1.83 2.505 2.535.885.345 1.485.645 1.68 1.155.225.585-.015 1.275-.855 1.455-.78.18-1.56-.225-2.07-.945-.48.33-.84.585-1.38.96.39.69 1.02 1.29 1.875 1.575 1.485.495 3.12.165 3.675-1.2.27-.675.255-1.425-.09-2.055z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'ReactJS',
    color: '#61DAFB',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-7c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    color: '#646CFF',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.5 4.5L12 22.5 1.5 4.5l10.5 3z" />
      </svg>
    ),
  },
  {
    name: 'Node.JS',
    color: '#339933',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z" />
      </svg>
    ),
  },
  {
    name: 'Bootstrap',
    color: '#7952B3',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm4.5 4v12h4.8c2.4 0 3.7-1.1 3.7-2.8 0-1.2-.7-2.1-1.8-2.5v-.1c.9-.4 1.5-1.2 1.5-2.2 0-1.6-1.3-2.4-3.4-2.4H8.5zm2.4 2.1h1.9c.9 0 1.5.4 1.5 1.1 0 .8-.6 1.2-1.6 1.2h-1.8V8.1zm0 4.3h2.1c1 0 1.7.4 1.7 1.3 0 .9-.7 1.3-1.8 1.3h-2v-2.6z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    color: '#3ECF8E',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.8 2.5L2.8 14.5h8.4L10.2 21.5l11-12h-8.4l1.2-7z" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    color: '#4479A1',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14 7 7 0 010-14z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.5 11.5l-9-9a1.5 1.5 0 00-2.1 0l-9 9a1.5 1.5 0 000 2.1l9 9a1.5 1.5 0 002.1 0l9-9a1.5 1.5 0 000-2.1zM13 16.2V13a2.5 2.5 0 00-2-2.4V8.8a1.5 1.5 0 10-2 0v5.4a2.5 2.5 0 104 2z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    color: '#FFFFFF',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-standalone-section">
      <div className="container">
        {/* Section Header */}
        <div className="showcase-header-center mb-8">
          <h2 className="section-title">TECH STACK & SKILLS</h2>
        </div>

        {/* Infinite Horizontal Marquee Ticker Banner */}
        <div className="tech-marquee-wrapper mb-10">
          <div className="tech-marquee-track">
            {[...TECH_CARDS, ...TECH_CARDS, ...TECH_CARDS].map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="tech-marquee-item">
                <div className="tech-chip-icon" style={{ color: tech.color }}>
                  {tech.svg}
                </div>
                <span className="tech-chip-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


