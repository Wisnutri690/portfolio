import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-reveal-id')
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }))
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.15 }
    )

    const revealElements = sectionRef.current?.querySelectorAll('[data-reveal-id]')
    revealElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => !!visibleItems[id]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="editorial-container relative">
        {/* Top Section Divider */}
        <div className="editorial-divider mb-16 md:mb-20" aria-hidden="true" />

        {/* Subtle Watermark 03 */}
        <span
          className="absolute -top-6 right-4 md:right-8 font-editorial text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          03
        </span>

        {/* Section Header */}
        <div
          data-reveal-id="header"
          className={`flex flex-col space-y-6 max-w-3xl mb-20 md:mb-28 reveal-init ${
            isVisible('header') ? 'reveal-visible' : ''
          }`}
        >
          <span className="section-label">03 / SELECTED WORK</span>
          <h2 id="projects-heading" className="section-headline text-[#F5F5F2]">
            Projects built to solve<br />
            real problems.
          </h2>
          <p className="text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[620px]">
            A selection of web and mobile applications I've built while
            developing my full-stack skills — from frontend interfaces to APIs,
            databases, and real-world application workflows.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col space-y-24 md:space-y-36">
          {/* ======================================================== */}
          {/* PROJECT 01 — CARWASH MANAGEMENT SYSTEM (PRIMARY SHOWCASE) */}
          {/* ======================================================== */}
          <article
            data-reveal-id="project-carwash"
            className={`group border-t border-white/[0.12] pt-12 md:pt-16 reveal-init ${
              isVisible('project-carwash') ? 'reveal-visible' : ''
            }`}
            aria-labelledby="carwash-title"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Metadata, Title, Description, Tech, Links */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <span className="section-label">
                  01 / FULL STACK · WEB + MOBILE
                </span>

                <h3
                  id="carwash-title"
                  className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F5F5F2] group-hover:text-white transition-colors duration-300 leading-tight"
                >
                  Carwash Management System
                </h3>

                <p className="text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[540px]">
                  A full-stack carwash management system designed to manage
                  customers, vehicles, orders, staff workflows, payments, and
                  operational status across web and mobile applications.
                </p>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block mb-2">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] font-mono leading-relaxed">
                    React · TypeScript · Tailwind CSS · Node.js · Express · PostgreSQL · Prisma · React Native
                  </p>
                </div>

                {/* Repositories Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/Wisnutri690/Carwash-Management-System-Frontend"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2.5 !px-4 !text-xs tracking-wider group/link"
                    aria-label="View Carwash Management System Frontend repository on GitHub"
                  >
                    <span>Frontend</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href="https://github.com/Wisnutri690/Carwash-Management-System-Backend"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2.5 !px-4 !text-xs tracking-wider group/link"
                    aria-label="View Carwash Management System Backend repository on GitHub"
                  >
                    <span>Backend</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href="https://github.com/Wisnutri690/carwash-management-mobile"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2.5 !px-4 !text-xs tracking-wider group/link"
                    aria-label="View Carwash Management System Mobile repository on GitHub"
                  >
                    <span>Mobile</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Frame (Technical Operational Architecture) */}
              <div className="lg:col-span-6 w-full">
                <div
                  className="border border-white/[0.12] bg-[#0A0A0A] p-6 sm:p-8 relative font-mono text-xs select-none transition-all duration-300 group-hover:scale-[1.01] group-hover:border-white/20"
                  aria-hidden="true"
                >
                  {/* Visual Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-[10px] tracking-widest text-[#666666] uppercase">
                    <span>OPS // WORKFLOW ENGINE</span>
                    <span>WEB + MOBILE ECOSYSTEM</span>
                  </div>

                  {/* Active Orders Status Pipeline */}
                  <div className="py-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] pb-2 text-[#666666] uppercase tracking-wider border-b border-white/[0.05]">
                      <span>Order Ref</span>
                      <span>Service Type</span>
                      <span>Pipeline</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-white/[0.04] text-[11px]">
                      <span className="text-[#F5F5F2]">CW-0821</span>
                      <span className="text-[#A1A1A1] font-sans">Full Wash & Detail</span>
                      <span className="text-white/80">IN PROGRESS</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-white/[0.04] text-[11px]">
                      <span className="text-[#F5F5F2]">CW-0822</span>
                      <span className="text-[#A1A1A1] font-sans">Exterior Express</span>
                      <span className="text-[#666666]">QUEUED</span>
                    </div>

                    <div className="flex items-center justify-between py-2 text-[11px]">
                      <span className="text-[#F5F5F2]">CW-0823</span>
                      <span className="text-[#A1A1A1] font-sans">Interior Sanitizing</span>
                      <span className="text-white/90">COMPLETED</span>
                    </div>
                  </div>

                  {/* Architecture Sync Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                    <div className="border border-white/[0.08] p-3 bg-white/[0.01]">
                      <span className="text-[9px] text-[#666666] block mb-1">CLIENT APPLICATION</span>
                      <p className="text-[11px] text-[#F5F5F2] font-sans">React Admin + Native App</p>
                    </div>

                    <div className="border border-white/[0.08] p-3 bg-white/[0.01]">
                      <span className="text-[9px] text-[#666666] block mb-1">SERVER & STORAGE</span>
                      <p className="text-[11px] text-[#F5F5F2] font-sans">Express + PostgreSQL</p>
                    </div>
                  </div>

                  {/* Visual Footer */}
                  <div className="pt-4 mt-2 flex items-center justify-between text-[9px] text-[#666666] tracking-wider uppercase">
                    <span>SYSTEM COMPONENT MODEL</span>
                    <span>VERIFIED STRUCTURE</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ======================================================== */}
          {/* PROJECT 02 — RONA COFFEE & GROUNDS */}
          {/* ======================================================== */}
          <article
            data-reveal-id="project-rona"
            className={`group border-t border-white/[0.12] pt-12 md:pt-16 reveal-init ${
              isVisible('project-rona') ? 'reveal-visible' : ''
            }`}
            aria-labelledby="rona-title"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Metadata, Title, Description, Tech, Links */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <span className="section-label">
                  02 / FRONTEND · LANDING PAGE
                </span>

                <h3
                  id="rona-title"
                  className="font-editorial text-3xl sm:text-4xl text-[#F5F5F2] group-hover:text-white transition-colors duration-300 leading-tight"
                >
                  RONA Coffee & Grounds
                </h3>

                <p className="text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[540px]">
                  A premium coffee shop landing page focused on editorial
                  typography, warm visual storytelling, responsive layout, and
                  subtle scroll-based interactions.
                </p>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block mb-2">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] font-mono leading-relaxed">
                    React · TypeScript · Vite · Tailwind CSS
                  </p>
                </div>

                {/* Repositories & Demo Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://rona-coffee.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary !py-2.5 !px-4 !text-xs tracking-wider group/link"
                    aria-label="View RONA Coffee & Grounds live deployment on Vercel"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href="https://github.com/Wisnutri690/rona-coffe"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2.5 !px-4 !text-xs tracking-wider group/link"
                    aria-label="View RONA Coffee & Grounds repository on GitHub"
                  >
                    <span>Repository</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Frame (Editorial Coffee Composition) */}
              <div className="lg:col-span-6 w-full">
                <div
                  className="border border-white/[0.12] bg-[#0A0A0A] p-6 sm:p-8 relative font-mono text-xs select-none transition-all duration-300 group-hover:scale-[1.01] group-hover:border-white/20"
                  aria-hidden="true"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-[10px] tracking-widest text-[#666666] uppercase">
                    <span>BRAND // EDITORIAL SHOWCASE</span>
                    <span>EXPERIENTIAL UI</span>
                  </div>

                  {/* Coffee Narrative Layout Simulation */}
                  <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                    <span className="text-[10px] tracking-[0.25em] text-[#666666] uppercase">
                      RONA // COFFEE & GROUNDS
                    </span>
                    <p className="font-editorial text-2xl md:text-3xl text-[#F5F5F2] max-w-xs leading-snug">
                      Artisan Roastery & Warm Visual Storytelling
                    </p>
                    <div className="w-12 h-px bg-white/20" />
                    <span className="text-[10px] text-[#A1A1A1] font-sans">
                      Editorial Typographic Rhythm · Responsive Grid · Subtle Micro-interactions
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[9px] text-[#666666] tracking-wider uppercase">
                    <span>DEPLOYMENT: VERCEL</span>
                    <span>PRODUCTION ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ======================================================== */}
          {/* PROJECT 03 — WATCHLIST */}
          {/* ======================================================== */}
          <article
            data-reveal-id="project-watchlist"
            className={`group border-t border-b border-white/[0.12] py-12 md:py-16 reveal-init ${
              isVisible('project-watchlist') ? 'reveal-visible' : ''
            }`}
            aria-labelledby="watchlist-title"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Metadata, Title, Description, Tech, Links */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <span className="section-label">
                  03 / FRONTEND · REACT
                </span>

                <h3
                  id="watchlist-title"
                  className="font-editorial text-3xl sm:text-4xl text-[#F5F5F2] group-hover:text-white transition-colors duration-300 leading-tight"
                >
                  WatchList
                </h3>

                <p className="text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[540px]">
                  A movie watchlist application for browsing, searching,
                  and managing a personal collection of movies and shows.
                </p>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block mb-2">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] font-mono leading-relaxed">
                    React · JavaScript · Vite · Tailwind CSS
                  </p>
                </div>

                {/* Repositories Link */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://github.com/Wisnutri690/Stage-2-Project-2-WatchList"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2.5 !px-4 !text-xs tracking-wider group/link"
                    aria-label="View WatchList repository on GitHub"
                  >
                    <span>Repository</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Frame (Curated Media Layout) */}
              <div className="lg:col-span-6 w-full">
                <div
                  className="border border-white/[0.12] bg-[#0A0A0A] p-6 sm:p-8 relative font-mono text-xs select-none transition-all duration-300 group-hover:scale-[1.01] group-hover:border-white/20"
                  aria-hidden="true"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-[10px] tracking-widest text-[#666666] uppercase">
                    <span>MEDIA // CURATED DIRECTORY</span>
                    <span>PERSONAL ARCHIVE</span>
                  </div>

                  {/* Cinema Wireframe Grid Simulation */}
                  <div className="py-6 grid grid-cols-3 gap-3">
                    <div className="border border-white/[0.08] bg-white/[0.01] aspect-[2/3] flex flex-col justify-end p-2.5">
                      <span className="text-[8px] text-[#666666] block">ARCHIVE #01</span>
                      <span className="text-[9px] text-[#F5F5F2] font-sans truncate">Feature Film</span>
                    </div>

                    <div className="border border-white/[0.12] bg-white/[0.03] aspect-[2/3] flex flex-col justify-end p-2.5">
                      <span className="text-[8px] text-white/60 block">SAVED</span>
                      <span className="text-[9px] text-[#F5F5F2] font-sans truncate">Documentary</span>
                    </div>

                    <div className="border border-white/[0.08] bg-white/[0.01] aspect-[2/3] flex flex-col justify-end p-2.5">
                      <span className="text-[8px] text-[#666666] block">QUEUE</span>
                      <span className="text-[9px] text-[#F5F5F2] font-sans truncate">Mini Series</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[9px] text-[#666666] tracking-wider uppercase">
                    <span>SEARCH & FILTER ENGINE</span>
                    <span>LOCAL PERSISTENCE</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
