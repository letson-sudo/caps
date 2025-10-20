import Image from 'next/image'

export default function ImageSection({ src, alt, caption, className = "" }) {
  return (
    <div className={`relative  overflow-hidden shadow-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={500}
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
        <p className="text-2xl text-white max-w-3xl text-center">{caption}</p>
      </div>
    </div>
  )
}
