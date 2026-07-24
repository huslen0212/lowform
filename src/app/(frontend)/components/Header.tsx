'use client'

import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(12,14,18,0.9)] backdrop-blur-sm border-b border-[rgba(243,241,236,0.1)]">
      <div className="flex items-center justify-between px-12 py-5 max-md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8.5 h-8.5 bg-[#f3f1ec] text-[#0c0e12] flex items-center justify-center font-['Oswald'] font-bold text-base tracking-[-1px]">
            LF
          </div>
          <span className="font-['Oswald'] font-bold text-xl tracking-[2px]">LOWFORM</span>
        </div>

        {/* Desktop links */}
        <div className="flex gap-9 text-[17px] tracking-[1px] uppercase max-md:hidden">
          <a href="#shop" className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors">
            Shop
          </a>
          <a href="#custom" className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors">
            Custom
          </a>
          <a href="#about" className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors">
            About
          </a>
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
          <a
            href="#shop"
            onClick={() => setOpen(false)}
            className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors py-2"
          >
            Shop
          </a>
          <a
            href="#custom"
            onClick={() => setOpen(false)}
            className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors py-2"
          >
            Custom
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-[#f3f1ec] hover:text-[#e8482c] transition-colors py-2"
          >
            About
          </a>
        </div>
      )}
    </nav>
  )
}
