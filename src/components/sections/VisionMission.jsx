import { Eye, Target } from 'lucide-react'

export default function VisionMission() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="group relative bg-white rounded-3xl p-10 shadow-xl border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:scale-105">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-2xl group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-800">Our Vision</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            A vibrant Malawi where every individual and community flourishes, free from the grips of poverty, inequality, and social injustice, achieving sustainable prosperity for all.
          </p>
        </div>

        <div className="group relative bg-white rounded-3xl p-10 shadow-xl border border-purple-200 hover:border-purple-400 transition-all duration-500 hover:scale-105">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-2xl group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-800">Our Mission</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            To empower marginalized Malawians by advancing access to education, health services, sustainable livelihoods, and human rights through collaborative projects and community-led efforts that build equity and resilience.
          </p>
        </div>
      </div>
    </div>
  )
}
