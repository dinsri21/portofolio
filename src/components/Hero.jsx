import React, { useState, useEffect } from 'react'
import { Download, Send, GraduationCap, Code2, Sparkles } from 'lucide-react'

const WORDS = [
  'Frontend Web Specialist',
  'Informatics Student',
  'AI & Tech Enthusiast'
]

export default function Hero() {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = WORDS[wordIdx]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIdx + 1))
        setCharIdx(prev => prev + 1)
        if (charIdx + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentWord.substring(0, charIdx - 1))
        setCharIdx(prev => prev - 1)
        if (charIdx - 1 === 0) {
          setIsDeleting(false)
          setWordIdx(prev => (prev + 1) % WORDS.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, wordIdx])

  const fallbackAvatarSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%230b0f19" rx="200"/><circle cx="200" cy="150" r="60" fill="%2310b981" opacity="0.3"/><circle cx="200" cy="150" r="45" fill="%232dd4bf"/><path d="M100 340 c0 -60 45 -100 100 -100 s100 40 100 100" fill="%2310b981" opacity="0.4"/><text x="200" y="375" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Upload foto ke public/profile.png</text></svg>`

  return (
    <section id="top" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero & About Me Introduction */}
          <div className="hero-left">

            <h1 className="hero-headline">
              Hai, Saya <span className="text-gradient">Dini Sriastuti</span>
            </h1>

            <div className="hero-sub-typewriter">
              <span>{text}</span>
              <span className="typing-cursor" />
            </div>

            <p className="hero-bio">
              Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi web modern, responsif, dan ramah pengguna.
            </p>

            {/* Quick About Highlights */}
            <div className="hero-about-chips">
              <div className="about-chip">
                <GraduationCap className="about-chip-icon" />
                <span>Teknik Informatika</span>
              </div>
              <div className="about-chip">
                <Code2 className="about-chip-icon" />
                <span>Frontend Specialist</span>
              </div>
              <div className="about-chip">
                <Sparkles className="about-chip-icon" />
                <span>AI Enthusiast</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="./cv.pdf" download="CV-Dini-Sriastuti.pdf" className="btn-primary">
                <Download className="btn-icon" />
                <span>Download CV</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <Send className="btn-icon" />
                <span>Kontak Saya</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Alvalen-style Avatar */}
          <div className="hero-right">
            <div className="profile-circle-container">
              <img
                src="./profile.png"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = fallbackAvatarSvg
                }}
                alt="Dini Sriastuti"
                className="profile-circle-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
