import { Target, Users, Heart, CheckCircle, Leaf } from 'lucide-react'

export default function CoreValues() {
  const values = [
    { title: 'Integrity and Ethical Conduct', desc: 'Committing to transparency and honesty in all our operations.', icon: Target, color: 'blue' },
    { title: 'Inclusion and Non-Discrimination', desc: 'Ensuring every voice is heard, regardless of background or ability.', icon: Users, color: 'purple' },
    { title: 'Community Empowerment', desc: 'Equipping individuals with the tools for self-reliance and growth.', icon: Heart, color: 'pink' },
    { title: 'Transparency and Accountability', desc: 'Holding ourselves and partners to the highest standards for impactful results.', icon: CheckCircle, color: 'green' },
    { title: 'Sustainability', desc: 'Prioritizing long-term solutions that protect people and the planet.', icon: Leaf, color: 'emerald' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
        <h2 className="text-4xl font-black mb-12 text-center text-slate-800">Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className={`group p-6 rounded-2xl bg-${value.color}-50 hover:bg-${value.color}-100 transition-all duration-300 border border-${value.color}-200 hover:scale-105 shadow-md`}>
              <value.icon className={`w-10 h-10 text-${value.color}-600 mb-4 group-hover:scale-125 transition-transform`} />
              <h3 className="text-xl font-bold mb-3 text-slate-800">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
