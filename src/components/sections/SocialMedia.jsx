import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function SocialMedia() {
  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'blue' },
    { icon: Twitter, name: 'Twitter', color: 'sky' },
    { icon: Instagram, name: 'Instagram', color: 'pink' },
    { icon: Linkedin, name: 'LinkedIn', color: 'indigo' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
        <h2 className="text-4xl font-black mb-8 text-center text-slate-800">Follow Us</h2>
        <p className="text-slate-700 text-lg mb-10 text-center">Connect with us on social media for real-time updates</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social, idx) => (
            <a key={idx} href="#" className={`group flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-${social.color}-50 to-${social.color}-100 rounded-2xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl border border-${social.color}-200`}>
              <social.icon className={`w-10 h-10 text-${social.color}-600 group-hover:scale-125 transition-transform`} />
              <span className="font-bold text-slate-800">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
