import React, { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import PortfolioShowcase from './components/PortfolioShowcase.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { CheckCircle2 } from 'lucide-react'

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [toastMsg, setToastMsg] = useState('')

  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => {
      setToastMsg('')
    }, 3000)
  }

  return (
    <>
      {showWelcome && (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      )}

      <Background />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <PortfolioShowcase />
        <Contact showToast={showToast} />
      </main>
      <Footer />

      {/* Floating Toast Notification */}
      {toastMsg && (
        <div className="toast-notification">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toastMsg}</span>
        </div>
      )}
    </>
  )
}
