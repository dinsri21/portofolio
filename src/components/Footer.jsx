import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Dini Sriastuti. All rights reserved.
        </p>
      </div>

      <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
