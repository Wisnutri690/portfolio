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

              {/* Right Column: Real Project Screenshot Showcase */}
              <div className="lg:col-span-6 w-full">
                <div className="border border-white/[0.12] bg-[#0A0A0A] p-2 sm:p-3 relative overflow-hidden transition-all duration-300 group-hover:border-white/25">
                  {/* Top Bar Indicator */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-2">
                    <span>SYS // OPERATIONAL DASHBOARD</span>
                    <span>APEX COMMAND CENTER</span>
                  </div>

                  {/* Primary Screenshot: Operational Dashboard */}
                  <div className="overflow-hidden bg-[#050505] border border-white/[0.06]">
                    <img
                      src="/images/projects/carwash/carwash-dashboard.png"
                      alt="Carwash Management System Dashboard Operasional interface"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>

                  {/* Secondary Thumbnails: Portal & Mobile */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="border border-white/[0.06] p-1 bg-[#050505] overflow-hidden">
                      <img
                        src="/images/projects/carwash/carwash-overview.png"
                        alt="Carwash Customer Portal interface"
                        className="w-full h-24 sm:h-28 object-cover object-top"
                        loading="lazy"
                      />
                      <span className="text-[9px] font-mono text-[#666666] tracking-wider uppercase block mt-1 px-1">
                        Customer Portal
                      </span>
                    </div>

                    <div className="border border-white/[0.06] p-1 bg-[#050505] overflow-hidden">
                      <img
                        src="/images/projects/carwash/carwash-mobile.png"
                        alt="Carwash Mobile Administrator app interface"
                        className="w-full h-24 sm:h-28 object-cover object-top"
                        loading="lazy"
                      />
                      <span className="text-[9px] font-mono text-[#666666] tracking-wider uppercase block mt-1 px-1">
                        Mobile App View
                      </span>
                    </div>
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

              {/* Right Column: Real Project Screenshot Showcase */}
              <div className="lg:col-span-6 w-full">
                <div className="border border-white/[0.12] bg-[#0A0A0A] p-2 sm:p-3 relative overflow-hidden transition-all duration-300 group-hover:border-white/25">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-2">
                    <span>BRAND // LANDING PAGE</span>
                    <span>VERCEL PRODUCTION DEPLOYMENT</span>
                  </div>

                  <div className="overflow-hidden bg-[#050505] border border-white/[0.06]">
                    <img
                      src="/images/projects/rona/rona-overview.png"
                      alt="RONA Coffee & Grounds landing page interface"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
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

              {/* Right Column: Real Project Screenshot Showcase */}
              <div className="lg:col-span-6 w-full">
                <div className="border border-white/[0.12] bg-[#0A0A0A] p-2 sm:p-3 relative overflow-hidden transition-all duration-300 group-hover:border-white/25">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-2">
                    <span>APP // WATCHLIST DIRECTORY</span>
                    <span>REACT + TAILWIND</span>
                  </div>

                  <div className="overflow-hidden bg-[#050505] border border-white/[0.06]">
                    <img
                      src="/images/projects/watchlist/watchlist-home.png"
                      alt="WatchList movie collection interface"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
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
