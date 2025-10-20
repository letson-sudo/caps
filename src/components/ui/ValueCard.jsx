export default function ValueCard({ title, description, icon: Icon, color = "blue" }) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-600',
    purple: 'bg-purple-50 border-purple-200 hover:border-purple-400 text-purple-600',
    pink: 'bg-pink-50 border-pink-200 hover:border-pink-400 text-pink-600',
    green: 'bg-green-50 border-green-200 hover:border-green-400 text-green-600',
    emerald: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400 text-emerald-600'
  }

  return (
    <div className={`group p-6 rounded-2xl ${colorClasses[color]} transition-all duration-300 border hover:scale-105 shadow-md`}>
      <Icon className={`w-10 h-10 mb-4 group-hover:scale-125 transition-transform`} />
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
