"use client"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollToDonate = () => {
  const donateSection = document.getElementById('donate')
  if (donateSection) {
    donateSection.scrollIntoView({ behavior: 'smooth' })
  }
}

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/caps logo.png" alt="CAPS Logo" width={40} height={40} />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">CAPS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">What We Do</a>
            <a href="#involved" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Get Involved</a>
            <a href="#contact" className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Contact</a>
           <button
  onClick={scrollToDonate}
  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
>
  Donate
</button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#about" className="block py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium">About</a>
            <a href="#services" className="block py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium">What We Do</a>
            <a href="#involved" className="block py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium">Get Involved</a>
            <a href="#contact" className="block py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
