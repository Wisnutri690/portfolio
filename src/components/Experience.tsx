import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X, ZoomIn } from 'lucide-react'

interface JourneyMedia {
  src: string
  alt: string
  caption: string
}

interface CertificationCredential {
  name: string
  issuer: string
  verifyUrl?: string
}

interface JourneyItem {
  id: string
  period: string
  tag: string
  title: string
  institution?: string
  description: string
  focus?: string
  meta?: string
  media?: JourneyMedia[]
  credentials?: CertificationCredential[]
}

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: 'fullstack',
    period: '2025 — PRESENT',
    tag: 'DEVELOPMENT',
    title: 'Full Stack Development',
    institution: 'DumbWays Indonesia & Independent Development',
    description:
      'Developing full-stack web and mobile applications from architectural design to deployment. Engineered REST APIs, state management, and database schemas using React, React Native, TypeScript, Node.js, Express, PostgreSQL, and Prisma.',
    focus: 'React · React Native · TypeScript · Node.js · Express · PostgreSQL · Prisma',
  },
  {
    id: 'certifications',
    period: '2025',
    tag: 'CREDENTIALS',
    title: 'Licenses & Certifications',
    institution: 'HackerRank & DumbWays Indonesia',
    description:
      'Verified technical credentials demonstrating competitive proficiency in algorithmic problem solving, core JavaScript, and full-stack software development.',
    credentials: [
      {
        name: 'HackerRank — JavaScript (Intermediate) Certificate',
        issuer: 'HackerRank',
        verifyUrl: 'https://www.hackerrank.com/certificates/cc13197889ba',
      },
      {
        name: 'HackerRank — JavaScript (Basic) Certificate',
        issuer: 'HackerRank',
        verifyUrl: 'https://www.hackerrank.com/certificates/002461e1c576',
      },
      {
        name: 'Fundamental FullStack (Top 20 of 2,000 Candidates)',
        issuer: 'DumbWays Indonesia',
      },
    ],
    media: [
      {
        src: '/images/experience/hackerrank-javascript-intermediate.png',
        alt: 'HackerRank Certificate of Accomplishment - JavaScript (Intermediate) for Wisnu Triandika',
        caption: 'HackerRank · JavaScript (Intermediate)',
      },
      {
        src: '/images/experience/hackerrank-javascript-basic.jpg',
        alt: 'HackerRank Certificate of Accomplishment - JavaScript (Basic) for Wisnu Triandika',
        caption: 'HackerRank · JavaScript (Basic)',
      },
      {
        src: '/images/experience/dumbways-top-20.png',
        alt: 'Sertifikat Lolos Seleksi Bootcamp Dumbways Indonesia Top 20 dari 2000 Peserta',
        caption: 'DumbWays · Top 20 Candidates',
      },
    ],
  },
  {
    id: 'internship',
    period: '2025',
    tag: 'INTERNSHIP',
    title: 'IT Support Intern',
    institution: 'Kantor Pertanahan (Land Government Office)',
    description:
      'Supported IT administrative workflows and computer equipment maintenance. Handled document scanning, digital archiving, and data organization using office network systems, computers, and scanners.',
    media: [
      {
        src: '/images/experience/pkl-activity-wisnu.jpg',
        alt: 'Dokumentasi kegiatan operasional PKL di Kantor Pertanahan',
        caption: 'Operasional Komputer & Scanning',
      },
      {
        src: '/images/experience/sertifikat-prakerin-bpn.jpg',
        alt: 'Sertifikat Praktik Kerja Industri (PRAKERIN) di Kantor Pertanahan',
        caption: 'Sertifikat PRAKERIN BPN',
      },
    ],
  },
  {
    id: 'education',
    period: '2022 — 2025',
    tag: 'EDUCATION',
    title: 'SMK Itikurih Hibarna',
    institution: 'Computer and Network Engineering (TKJ)',
    description:
      'Studied computer hardware, fiber optic networking, and MikroTik networking fundamentals.',
    meta: 'Graduated: May 2025',
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({})
  const [selectedMedia, setSelectedMedia] = useState<JourneyMedia | null>(null)

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
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="editorial-container relative">
        <div className="editorial-divider mb-16 md:mb-20" aria-hidden="true" />

        <span
          className="absolute -top-6 right-4 md:right-8 font-editorial text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          04
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-28">
            <div
              data-reveal-id="journey-label"
              className={`reveal-init ${isVisible('journey-label') ? 'reveal-visible' : ''}`}
            >
              <span className="section-label">04 / JOURNEY</span>
            </div>

            <h2
              id="experience-heading"
              data-reveal-id="journey-title"
              className={`section-headline text-[#F5F5F2] reveal-init ${
                isVisible('journey-title') ? 'reveal-visible' : ''
              }`}
            >
              From networks to<br />
              full-stack development.
            </h2>

            <p
              data-reveal-id="journey-intro"
              className={`text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[540px] font-normal reveal-init ${
                isVisible('journey-intro') ? 'reveal-visible' : ''
              }`}
            >
              Building on an engineering foundation from Computer and Network
              Engineering to designing high-performance web and mobile
              architectures.
            </p>

            <div
              data-reveal-id="journey-meta"
              className={`pt-4 border-t border-white/[0.08] max-w-[540px] reveal-init ${
                isVisible('journey-meta') ? 'reveal-visible' : ''
              }`}
            >
              <span className="text-xs font-mono text-[#666666] tracking-wider uppercase block mb-2">
                Core Philosophy
              </span>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                Disciplined engineering, rigorous type safety, responsive performance,
                and user-centric design across the full software lifecycle.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-12">
            {JOURNEY_ITEMS.map((item, index) => (
              <article
                key={item.id}
                data-reveal-id={`journey-item-${item.id}`}
                className={`relative pl-8 md:pl-10 border-l border-white/[0.12] reveal-init ${
                  isVisible(`journey-item-${item.id}`) ? 'reveal-visible' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#333333] border border-[#050505]"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[#666666] tracking-wider">
                    {item.period}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 border border-white/[0.08] text-[#888888] bg-[#0A0A0A]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F2] mt-2">
                  {item.title}
                </h3>

                {item.institution && (
                  <p className="text-xs uppercase tracking-[0.15em] text-[#A1A1A1] font-medium mt-1">
                    {item.institution}
                  </p>
                )}

                <p className="text-sm md:text-base text-[#A1A1A1] leading-relaxed mt-3 max-w-[580px]">
                  {item.description}
                </p>

                {item.focus && (
                  <div className="pt-3">
                    <span className="text-[11px] font-mono text-[#666666] tracking-wide block">
                      {item.focus}
                    </span>
                  </div>
                )}

                {item.meta && (
                  <div className="pt-3">
                    <span className="text-[11px] font-mono text-[#666666] tracking-widest uppercase block">
                      {item.meta}
                    </span>
                  </div>
                )}

                {item.credentials && item.credentials.length > 0 && (
                  <div className="pt-4 space-y-2 max-w-[580px]">
                    {item.credentials.map((cred) => (
                      <div
                        key={cred.name}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-white/[0.08] bg-[#0A0A0A] hover:border-white/20 transition-all duration-200 gap-2"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-medium text-[#F5F5F2]">
                            {cred.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#888888] mt-0.5">
                            {cred.issuer}
                          </span>
                        </div>
                        {cred.verifyUrl && (
                          <a
                            href={cred.verifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-[#A1A1A1] hover:text-white font-mono transition-colors self-start sm:self-auto shrink-0 border border-white/[0.1] px-2 py-1 rounded-[2px]"
                          >
                            <span>Verify</span>
                            <ArrowUpRight size={11} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {item.media && item.media.length > 0 && (
                  <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.media.map((img) => (
                      <div
                        key={img.src}
                        onClick={() => setSelectedMedia(img)}
                        className="border border-white/[0.12] bg-[#0A0A0A] p-2.5 overflow-hidden group/media hover:border-white/30 transition-all duration-300 cursor-pointer"
                        title="Click to view full size"
                      >
                        <div className="relative overflow-hidden bg-[#050505] border border-white/[0.06] flex items-center justify-center p-2 min-h-[190px] sm:min-h-[220px]">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto max-h-[260px] sm:max-h-[320px] object-contain transition-transform duration-300 group-hover/media:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs text-white font-mono">
                            <ZoomIn size={14} />
                            <span>Preview</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-[#CCCCCC] tracking-wider uppercase block mt-2.5 px-1 truncate">
                          {img.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-200"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0A0A0A] border border-white/20 p-3 sm:p-5 shadow-2xl rounded-[2px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-[#E0E0E0]">
              <span className="truncate pr-4 uppercase tracking-wider">{selectedMedia.caption}</span>
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="p-1 text-[#888888] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="bg-[#050505] border border-white/[0.06] p-2 sm:p-4 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto max-h-[75vh] object-contain rounded-[1px]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
