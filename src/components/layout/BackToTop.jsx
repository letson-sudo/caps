"use client"
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showBackToTop) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
