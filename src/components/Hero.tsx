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

          {/* Right Column: Editorial Portrait Showcase (Non-Box Arch Design) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end animate-hero-visual w-full">
            <div className="relative group w-full max-w-[320px] mx-auto lg:ml-auto">
              {/* Subtle Ambient Glow behind the arch */}
              <div
                className="absolute -inset-1 rounded-t-full rounded-b-3xl bg-gradient-to-b from-white/[0.08] to-transparent blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                aria-hidden="true"
              />

              {/* Editorial Arch Container */}
              <div className="relative border border-white/[0.16] bg-[#0A0A0A] p-3 rounded-t-full rounded-b-3xl shadow-2xl transition-all duration-500 group-hover:border-white/30">
                {/* Header Tag */}
                <div className="flex items-center justify-between px-3 pt-3 pb-2 text-[10px] font-mono text-[#666666] uppercase tracking-widest">
                  <span>PORTRAIT // 01</span>
                  <span>WT.DEV</span>
                </div>

                {/* Arched Photo Frame */}
                <div className="relative overflow-hidden rounded-t-full rounded-b-2xl bg-[#050505] border border-white/[0.08] aspect-[3/4]">
                  <img
                    src="/images/profile/wisnu-profile.jpg"
                    alt="Wisnu Tri - Full Stack Developer"
                    className="w-full h-full object-cover object-top grayscale contrast-[1.08] brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Editorial Subtle Vignette Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-black/20 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Floating Identity & Status Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#0A0A0A]/85 border border-white/[0.12] backdrop-blur-md text-[10px] font-mono text-[#F5F5F2]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Wisnu Tri</span>
                    </span>
                    <span className="text-[#A1A1A1] text-[9px] uppercase tracking-wider">Full Stack</span>
                  </div>
                </div>

                {/* Technical Coordinates Footer */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-[9px] font-mono text-[#666666] tracking-wider uppercase">
                  <span>LAT -6.4025° LON 106.7942°</span>
                  <span className="text-white/60">ACTIVE</span>
                </div>
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
