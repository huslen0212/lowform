import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 flex">
      {/* Logo section */}
      <div className="bg-black flex items-center justify-center px-4 h-14 shrink-0">
        <Image src="/LF-logo.png" alt="Lowform" width={80} height={40} className="h-8 w-auto" />
      </div>
      {/* Nav items */}
      <div className="flex-1 bg-white flex items-center px-6 h-14">{/* nav items эндээс */}</div>
    </header>
  )
}
