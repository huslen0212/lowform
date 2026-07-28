'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(12,14,18,0.9)] backdrop-blur-sm border-b border-[rgba(243,241,236,0.1)]">
      <div className="flex items-center justify-between px-12 py-5 max-md:px-6">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/LF-logo.png" alt="Lowform" width={35} height={35} unoptimized />
            <span className="font-science font-bold text-xl tracking-[2px]">LOWFORM</span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="flex gap-9 text-[17px] tracking-[1px] uppercase max-md:hidden">
          <Link href="#shop" className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors">
            Shop
          </Link>

          <Link href="/custom" className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors">
            Custom
          </Link>

          <Link href="#about" className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors">
            About
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden max-md:flex flex-col gap-1.5 w-6 cursor-pointer"
          aria-label="Menu"
        >
          <span
            className={`block h-px bg-[#f3f1ec] transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}
          />
          <span
            className={`block h-px bg-[#f3f1ec] transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px bg-[#f3f1ec] transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="hidden max-md:flex flex-col border-t border-[rgba(243,241,236,0.1)] px-6 py-4 gap-4 text-[17px] tracking-[1px] uppercase">
          <Link
            href="#shop"
            onClick={() => setOpen(false)}
            className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors py-2"
          >
            Shop
          </Link>
          <Link
            href="/custom"
            onClick={() => setOpen(false)}
            className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors py-2"
          >
            Custom
          </Link>
          <Link
            href="#about"
            onClick={() => setOpen(false)}
            className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors py-2"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  )
}
