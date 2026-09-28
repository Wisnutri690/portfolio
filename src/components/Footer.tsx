export default function Footer() {
  return (
    <footer className="border-t border-white/[0.12] py-12 md:py-16 text-[#A1A1A1]">
      <div className="editorial-container flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Brand & Role */}
        <div className="space-y-1">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase text-[#F5F5F2] block">
            Wisnu Tri
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[#666666] block">
            Full Stack Developer
          </span>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs tracking-wider uppercase font-medium"
          aria-label="Footer Navigation Links"
        >
          <a
            href="https://github.com/Wisnutri690"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F5F2] transition-colors duration-200"
            aria-label="Wisnu Tri on GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/wisnutri-andika"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F5F2] transition-colors duration-200"
            aria-label="Wisnu Tri on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:wisnutri690@gmail.com"
            className="hover:text-[#F5F5F2] transition-colors duration-200"
            aria-label="Email Wisnu Tri"
          >
            Email
          </a>
        </nav>

        {/* Copyright */}
        <div>
          <p className="text-xs text-[#666666] font-mono">
            © 2026 Wisnu Tri. Built with React.
          </p>
        </div>
      </div>
    </footer>
  )
}
