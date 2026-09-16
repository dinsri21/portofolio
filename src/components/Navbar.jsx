import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('top')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPercent = (winScroll / height) * 100
      setProgress(scrolledPercent)
      setScrolled(winScroll > 20)

      const sections = ['top', 'skills', 'portfolio', 'contact']
      const scrollPos = winScroll + 150

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'top', label: 'Home' },
    { id: 'skills', label: 'Skill' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="top-progress-bar" style={{ width: `${progress}%` }} />
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#top" className="brand-logo">
            <span className="status-dot" />
            <span>Dini Sriastuti</span>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
    </>
  )
}
