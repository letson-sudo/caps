import { CheckCircle } from 'lucide-react'

export default function TargetGroups() {
  const groups = [
    'Poor and vulnerable communities across Malawi',
    'Women, adolescent girls, and young women',
    'Orphans and vulnerable children (OVCs)',
    'Persons with disabilities',
    'Minority and marginalized groups, including the LGBTI community, MSM, prisoners, youth at risk, and commercial sex workers',
    'Government departments and agencies for collaborative impact'
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
        <h2 className="text-4xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Target Groups</h2>
        <p className="text-slate-700 text-lg mb-8 font-medium">We prioritize support for:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {groups.map((group, idx) => (
            <div key={idx} className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-slate-200 hover:border-purple-300 hover:scale-105 transition-all duration-300 shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-slate-700">{group}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
