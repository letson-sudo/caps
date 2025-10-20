export default function Objectives() {
  const objectives = [
    'Enhance access to education, skills training, and economic opportunities for marginalized communities.',
    'Boost health outcomes, nutrition, and HIV/AIDS prevention among at-risk populations.',
    'Safeguard the environment through climate resilience, reforestation, and sustainable practices.',
    'Champion human rights, gender equality, and protection for vulnerable groups.',
    'Drive community development to promote self-sufficiency and overall well-being.'
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
        <h2 className="text-4xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Objectives</h2>
        <div className="space-y-6">
          {objectives.map((objective, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:border-purple-300 hover:scale-105 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-lg text-white shadow-lg">
                {idx + 1}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
