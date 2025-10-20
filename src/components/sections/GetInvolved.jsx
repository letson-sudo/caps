import { Users, MessageCircle, Heart } from 'lucide-react'

export default function GetInvolved() {
  return (
    <div id="involved" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-6 text-slate-800">Get Involved</h2>
        <p className="text-slate-700 text-xl">Join our mission to create a poverty-free Malawi!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Volunteer */}
        <div className="group bg-white rounded-3xl p-10 shadow-xl border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:scale-105">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-slate-800">Volunteer with Us</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Become part of our passionate volunteer team. Contribute to health campaigns, education programs, and community projects that make a real difference.
          </p>
          <button className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            Join Now
          </button>
        </div>

        {/* Partner */}
        <div className="group bg-white rounded-3xl p-10 shadow-xl border border-purple-200 hover:border-purple-400 transition-all duration-500 hover:scale-105">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform">
            <MessageCircle className="w-10 h-10 text-purple-600" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-slate-800">Partner with Us</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            We collaborate with government, NGOs, donors, and communities to amplify impact. Current partners include ILGA, CHRR, and CISEC.
          </p>
          <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            Partner Up
          </button>
        </div>

        {/* Donate */}
        <div className="group bg-white rounded-3xl p-10 shadow-xl border border-green-200 hover:border-green-400 transition-all duration-500 hover:scale-105">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform">
            <Heart className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-slate-800">Donate</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Your contributions fuel our work in education, health, and sustainability. We rely on member donations averaging MK2 million annually.
          </p>
          <button className="w-full px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  )
}
