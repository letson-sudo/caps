"use client"
import { useState } from 'react'
import { MapPin, Mail, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-4xl font-black mb-10 text-slate-800">Contact Us</h2>

          <div className="group flex items-start gap-6 p-8 rounded-3xl bg-white shadow-xl border border-slate-200 hover:border-blue-300 hover:scale-105 transition-all duration-300">
            <div className="p-3 bg-blue-100 rounded-2xl group-hover:scale-125 transition-transform flex-shrink-0">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="text-slate-800 text-lg font-bold mb-2">Registered Office</p>
              <p className="text-slate-700 mb-1">MCP premises, next to Mzuzu ADD</p>
              <p className="text-slate-700 mb-1">Mzuzu, Malawi</p>
              <p className="text-slate-600">P.O. Box 211, Mzuzu, Malawi</p>
            </div>
          </div>

          <div className="group flex items-start gap-6 p-8 rounded-3xl bg-white shadow-xl border border-slate-200 hover:border-purple-300 hover:scale-105 transition-all duration-300">
            <div className="p-3 bg-purple-100 rounded-2xl group-hover:scale-125 transition-transform flex-shrink-0">
              <Mail className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <p className="text-slate-800 text-lg font-bold mb-2">Email Address</p>
              <a href="mailto:info@caps-malawi.org" className="text-purple-600 hover:text-purple-700 font-medium text-lg">
                info@caps-malawi.org
              </a>
            </div>
          </div>

          <div className="group flex items-start gap-6 p-8 rounded-3xl bg-white shadow-xl border border-slate-200 hover:border-green-300 hover:scale-105 transition-all duration-300">
            <div className="p-3 bg-green-100 rounded-2xl group-hover:scale-125 transition-transform flex-shrink-0">
              <Phone className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="text-slate-800 text-lg font-bold mb-2">Phone</p>
              <a href="tel:+265123456789" className="text-green-600 hover:text-green-700 font-medium text-lg">
                +265 123 456 789
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
          <h3 className="text-3xl font-black mb-8 text-slate-800">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none transition-colors bg-slate-50 text-slate-900"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none transition-colors bg-slate-50 text-slate-900"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none transition-colors bg-slate-50 text-slate-900 resize-none"
                placeholder="How can we help you?"
               />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
