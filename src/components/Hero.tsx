import { ArrowUpRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-32 md:pt-36 pb-8"
      aria-label="Introduction"
    >
      <div className="editorial-container flex-1 flex flex-col justify-between">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start my-auto">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 animate-hero-eyebrow">
              <span className="w-6 h-px bg-white/20" aria-hidden="true" />
              <span className="section-label">Full Stack Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-[#F5F5F2] animate-hero-headline">
              Building digital<br />
              experiences from<br />
              frontend to backend.
            </h1>

            {/* Supporting Description */}
            <p className="text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[620px] font-normal animate-hero-desc">
              I build modern web and mobile applications with React, TypeScript, Node.js, and PostgreSQL — from interface to API and database.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-hero-cta">
              <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#contact" className="btn-secondary group">
                <span>Let's Connect</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Visual */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end animate-hero-visual w-full">
            <div
              className="w-full max-w-[340px] border border-white/[0.12] bg-[#0A0A0A]/40 p-6 relative font-mono text-xs select-none backdrop-blur-xs"
              aria-hidden="true"
            >
              {/* Corner crosshairs */}
              <span className="absolute -top-1.5 -left-1.5 text-white/30 text-[10px] leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-white/30 text-[10px] leading-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-white/30 text-[10px] leading-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-white/30 text-[10px] leading-none">+</span>

              {/* Blueprint Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-[10px] tracking-widest text-[#666666] uppercase">
                <span>SYS.ARCH // 01</span>
                <span>WT.DEV</span>
              </div>

              {/* Blueprint Architecture Diagram */}
              <div className="py-6 space-y-4">
                {/* Node 1: Client Layer */}
                <div className="border border-white/[0.1] p-3 bg-white/[0.02]">
                  <div className="flex items-center justify-between text-[11px] text-[#F5F5F2] mb-1">
                    <span>INTERFACE</span>
                    <span className="text-[9px] text-[#666666]">01 / CLIENT</span>
                  </div>
                  <div className="text-[10px] text-[#A1A1A1] font-sans tracking-wide">
                    React · React Native · TypeScript
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center -my-2">
                  <div className="w-px h-4 bg-white/20" />
                </div>

                {/* Node 2: Server Layer */}
                <div className="border border-white/[0.1] p-3 bg-white/[0.02]">
                  <div className="flex items-center justify-between text-[11px] text-[#F5F5F2] mb-1">
                    <span>SERVER & API</span>
                    <span className="text-[9px] text-[#666666]">02 / SERVICE</span>
                  </div>
                  <div className="text-[10px] text-[#A1A1A1] font-sans tracking-wide">
                    Node.js · Express · REST API · JWT
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center -my-2">
                  <div className="w-px h-4 bg-white/20" />
                </div>

                {/* Node 3: Data Layer */}
                <div className="border border-white/[0.1] p-3 bg-white/[0.02]">
                  <div className="flex items-center justify-between text-[11px] text-[#F5F5F2] mb-1">
                    <span>DATA PERSISTENCE</span>
                    <span className="text-[9px] text-[#666666]">03 / STORAGE</span>
                  </div>
                  <div className="text-[10px] text-[#A1A1A1] font-sans tracking-wide">
                    PostgreSQL · Prisma ORM
                  </div>
                </div>
              </div>

              {/* Blueprint Footer Coordinates */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[9px] text-[#666666] tracking-wider uppercase">
                <span>LAT -6.4025° LON 106.7942°</span>
                <span className="text-white/60">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Metadata Bar */}
        <div className="pt-16 pb-2 animate-hero-meta w-full">
          <div className="editorial-divider mb-6" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] md:text-xs tracking-[0.15em] text-[#A1A1A1] uppercase font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />
              <span>Based in Depok, Indonesia</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />
              <span>Open to Opportunities</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-[#666666] tracking-widest text-[10px]">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={12} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
