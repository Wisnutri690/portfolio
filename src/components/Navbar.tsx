import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll saat mobile menu terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.12] py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="text-sm tracking-[0.2em] font-semibold uppercase text-[#F5F5F2] hover:opacity-80 transition-opacity"
            aria-label="Wisnu Tri — Home"
          >
            Wisnu Tri
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] tracking-wider uppercase text-[#A1A1A1] hover:text-[#F5F5F2] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary !py-2 !px-4 !text-xs tracking-wider"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#F5F5F2] hover:text-white transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#050505] z-50 md:hidden flex flex-col justify-between p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          {/* Header Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.12]">
            <span className="text-sm tracking-[0.2em] font-semibold uppercase text-[#F5F5F2]">
              Wisnu Tri
            </span>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2 text-[#F5F5F2] hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-4 py-8" aria-label="Mobile Navigation Links">
            <span className="section-label mb-2">Navigation</span>
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-2xl font-light text-[#F5F5F2] hover:text-white transition-colors flex items-center justify-between border-b border-white/[0.08] pb-4"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#A1A1A1]">0{index + 1}</span>
              </a>
            ))}
          </nav>

          {/* Footer Drawer */}
          <div className="pt-6 border-t border-white/[0.12] space-y-4">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="btn-primary w-full text-center justify-center !py-3"
            >
              Let's Talk
            </a>
            <p className="text-xs text-[#666666] text-center tracking-wider uppercase">
              Depok, Indonesia · Full Stack Developer
            </p>
          </div>
        </div>
      )}
    </>
  )
}
