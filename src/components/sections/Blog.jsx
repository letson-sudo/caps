import { ChevronRight } from 'lucide-react'

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
        <h2 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Blog & Stories</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Stay updated with CAPS's latest projects, inspiring success stories, and community transformations. From empowering women farmers to youth overcoming challenges, discover how we're sparking change every day. Check back for infographics highlighting our impact on poverty reduction and social progress.
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto">
          Read Our Stories <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
