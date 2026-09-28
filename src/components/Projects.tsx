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
            {/* Project Overview Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 md:mb-16">
              {/* Left Column: Metadata & Title */}
              <div className="lg:col-span-6 flex flex-col space-y-4">
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
              </div>

              {/* Right Column: Tech Stack & Repositories */}
              <div className="lg:col-span-6 flex flex-col space-y-6 lg:pt-8">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block mb-2 font-mono">
                    Technologies
                  </span>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] font-mono leading-relaxed">
                    React · TypeScript · Tailwind CSS · Node.js · Express · PostgreSQL · Prisma · React Native
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
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
            </div>

            {/* Visual Showcase Gallery: Admin Dashboard & Mobile Customer/Admin */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {/* 1. Primary Desktop Showcase: Operational Dashboard */}
              <div className="border border-white/[0.12] bg-[#0A0A0A] p-2 sm:p-4 transition-all duration-300 group-hover:border-white/20">
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-3">
                  <span>01.1 // WEB ADMIN OPERATIONAL DASHBOARD</span>
                  <span>1440 × 900 · DESKTOP VIEWPORT</span>
                </div>
                <div className="bg-[#050505] border border-white/[0.06]">
                  <img
                    src="/images/projects/carwash/carwash-admin-dashboard.png"
                    alt="Carwash Management System Admin Operational Dashboard showing revenue metrics, queue, and cashier controls"
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-2.5 mt-1 text-[11px] font-mono text-[#888888] flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.04]">
                  <span>Operational Command Center — Real-time queue status, today's revenue breakdown, staff assignments, and quick actions.</span>
                  <span className="text-[#555555]">DESKTOP FULL</span>
                </div>
              </div>

              {/* 2. Cross-Platform Mobile Applications: Customer & Administrator */}
              <div className="border border-white/[0.12] bg-[#0A0A0A] p-4 sm:p-6 transition-all duration-300 hover:border-white/25">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-8">
                  <span>01.2 // CROSS-PLATFORM MOBILE APPLICATION</span>
                  <span>REACT NATIVE · CUSTOMER PORTAL & ADMINISTRATOR</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto items-start">
                  {/* Mobile Screen 1: Customer Portal Live Tracking */}
                  <div className="flex flex-col items-center">
                    <div className="border border-white/[0.08] bg-[#050505] p-2 w-full max-w-[280px] sm:max-w-[310px]">
                      <img
                        src="/images/projects/carwash/iPhone-14-PRO-localhost.png"
                        alt="Carwash Mobile Customer Portal showing live tracking status for Ferrari SF90"
                        className="w-full h-auto object-contain block mx-auto"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-mono text-[#F5F5F2] tracking-wider uppercase mt-4 text-center">
                      Mobile Customer Portal
                    </span>
                    <span className="text-[11px] text-[#888888] text-center mt-1 max-w-[260px]">
                      Customer live tracking status (Antrean, Pencucian, Detailing, Selesai) with vehicle selector and cashless payment.
                    </span>
                  </div>

                  {/* Mobile Screen 2: Administrator Operational View */}
                  <div className="flex flex-col items-center">
                    <div className="border border-white/[0.08] bg-[#050505] p-2 w-full max-w-[280px] sm:max-w-[310px]">
                      <img
                        src="/images/projects/carwash/carwash-mobile-admin.png"
                        alt="Carwash Mobile Administrator app showing operational summary and active orders"
                        className="w-full h-auto object-contain block mx-auto"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-mono text-[#F5F5F2] tracking-wider uppercase mt-4 text-center">
                      Mobile Administrator
                    </span>
                    <span className="text-[11px] text-[#888888] text-center mt-1 max-w-[260px]">
                      Administrator operational summary, real-time active queues, unit counts, and order transaction status.
                    </span>
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
