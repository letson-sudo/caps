import Image from 'next/image'

export default function Footer() {
  return (
    <div className="border-t border-slate-300 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-28 h-28 bg-slate-100 rounded-2xl border-2 border-slate-300 flex items-center justify-center shadow-lg">
            <Image
              src="/caps logo.png"
              alt="CAPS Logo"
              width={80}
              height={80}
              className="object-contain p-4"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">CAPS</span>
          </div>

          <p className="text-slate-600 text-lg text-center font-medium">
            Centre Against Poverty and Social Problems
          </p>
          <p className="text-slate-500 text-center">
            Empowering communities, transforming lives since 1999
          </p>
          <p className="text-slate-400 text-sm text-center">
            © 2025 CAPS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
