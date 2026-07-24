export default function Footer() {
  return (
    <footer className="px-12 py-12 max-md:px-6 border-t border-[rgba(243,241,236,0.1)] flex items-center justify-between flex-wrap gap-5 max-md:flex-col max-md:items-start">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-[#f3f1ec] text-[#0c0e12] flex items-center justify-center font-['Oswald'] font-bold text-[13px]">
          LF
        </div>

        <span className="font-['Oswald'] font-semibold text-[16px] tracking-[1px]">
          LOWFORM © 2026
        </span>
      </div>

      <div className="flex gap-7 text-[16px] text-[#8a8f9c] max-md:flex-wrap max-md:gap-4">
        <a href="#" className="hover:text-[#f3f1ec] transition-colors">
          Instagram
        </a>
        <a href="#" className="hover:text-[#f3f1ec] transition-colors">
          Facebook
        </a>
        <a href="#" className="text-[#8a8f9c] hover:text-[#f3f1ec] transition-colors">
          hello@lowform.mn
        </a>
      </div>
    </footer>
  )
}
