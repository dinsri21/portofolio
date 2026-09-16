import React, { useEffect, useRef } from 'react'

export default function Background() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e
        spotlightRef.current.style.background = `radial-gradient(650px circle at ${clientX}px ${clientY}px, rgba(99, 102, 241, 0.12), transparent 80%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      {/* Liquid Organic Gradient Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />

      {/* Interactive Mouse Spotlight Halo */}
      <div ref={spotlightRef} className="spotlight-overlay" />

      {/* Subtle Noise / Soft Blur Layer */}
      <div className="ambient-blur-overlay" />
    </div>
  )
}
