import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-12 py-12 max-md:px-6 border-t border-[rgba(243,241,236,0.1)] flex items-center justify-between flex-wrap gap-5 max-md:flex-col max-md:items-start">
      <div className="flex items-center gap-3">
        <Image src="/LF-logo.png" alt="Lowform" width={35} height={35} unoptimized />

        <span className="font-science font-semibold text-[16px] tracking-[1px]">
          LOWFORM © 2026
        </span>
      </div>

      <div className="flex gap-7 text-[16px] text-[#8a8f9c] max-md:flex-wrap max-md:gap-4">
        <Link
          href="https://www.instagram.com/_lowform/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#f3f1ec] transition-colors"
        >
          Instagram
        </Link>

        <span>Lowform123@gmail.com</span>
      </div>
    </footer>
  )
}
