import React, { useState, useEffect } from 'react'

export default function WelcomeScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  // Smooth loading counter 0% to 100%
  useEffect(() => {
    const duration = 2400
    const intervalTime = 30
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + increment
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  // Auto exit after loading reaches 100%
  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => {
          if (onComplete) onComplete()
        }, 700)
      }, 500)
      return () => clearTimeout(exitTimer)
    }
  }, [progress, onComplete])

  const handleSkip = () => {
    setIsExiting(true)
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 400)
  }

  return (
    <div
      className={`welcome-screen-overlay ${isExiting ? 'welcome-exit-anim' : ''}`}
      onClick={handleSkip}
    >
      {/* Background Ambient Glow */}
      <div className="welcome-emerald-glow" />

      <div className="welcome-inner-card">
        {/* Central Monogram Badge */}
        <div className="monogram-badge-ring">
          <span className="monogram-initials">DS</span>
        </div>

        {/* Name Reveal */}
        <h1 className="welcome-hero-name">DINI SRIASTUTI</h1>
        <p className="welcome-hero-tag">INFORMATICS & FRONTEND DEVELOPMENT</p>

        {/* Loading Beam */}
        <div className="loading-beam-wrap">
          <div className="loading-beam-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="loading-percent-text">
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  )
}
