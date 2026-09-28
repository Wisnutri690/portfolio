import { useEffect, useRef, useState } from 'react'

interface JourneyMedia {
  src: string
  alt: string
  caption: string
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
}

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: 'fullstack',
    period: '2025 — PRESENT',
    tag: 'DEVELOPMENT',
    title: 'Full Stack Development',
    institution: 'DumbWays Bootcamp & Independent Development',
    description:
      'Developing full-stack web and mobile applications through structured learning, hands-on projects, and independent development.',
    focus: 'React · TypeScript · Node.js · Express · PostgreSQL · Prisma · React Native',
    media: [
      {
        src: '/images/experience/hackerrank-javascript-basic.jpg',
        alt: 'HackerRank Certificate of Accomplishment - JavaScript (Basic) for Wisnu Triandika',
        caption: 'HackerRank · JavaScript (Basic)',
      },
    ],
  },
  {
    id: 'internship',
    period: '2025',
    tag: 'INTERNSHIP',
    title: 'Internship / PKL',
    institution: 'Land Government Office',
    description:
      'Supported administrative data tasks using computers, including taking notes and scanning customer documents with office equipment.',
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
    period: '2025',
    tag: 'EDUCATION',
    title: 'SMK Itikurih Hibarna',
    institution: 'TKJ / Computer & Network Engineering',
    description:
      'Studied computer hardware, fiber optic networking, and MikroTik networking fundamentals.',
    meta: 'Graduated: 14 May 2025',
  },
]

export default function Experience() {
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
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="editorial-container relative">
        {/* Top Section Divider */}
        <div className="editorial-divider mb-16 md:mb-20" aria-hidden="true" />

        {/* Subtle Watermark 04 */}
        <span
          className="absolute -top-6 right-4 md:right-8 font-editorial text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          04
        </span>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
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
              My path started with computer networks and hardware, then expanded
              into building web and mobile applications across the full stack.
            </p>
          </div>

          {/* Right Column: Editorial Timeline List */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/[0.12]">
            {JOURNEY_ITEMS.map((item, index) => (
              <article
                key={item.id}
                data-reveal-id={`journey-item-${item.id}`}
                className={`py-8 md:py-10 border-b border-white/[0.08] last:border-b-0 reveal-init ${
                  isVisible(`journey-item-${item.id}`) ? 'reveal-visible' : ''
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {/* Timeline Header: Period & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-xs tracking-wider text-[#A1A1A1]">
                    {item.period}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#666666] border border-white/[0.1] px-2 py-0.5 rounded-[2px] font-mono">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl md:text-3xl text-[#F5F5F2] font-medium leading-snug">
                  {item.title}
                </h3>

                {/* Organization / Context */}
                {item.institution && (
                  <p className="text-xs uppercase tracking-[0.15em] text-[#A1A1A1] font-medium mt-1">
                    {item.institution}
                  </p>
                )}

                {/* Narrative Description */}
                <p className="text-sm md:text-base text-[#A1A1A1] leading-relaxed mt-3 max-w-[580px]">
                  {item.description}
                </p>

                {/* Tech Stack Focus if available */}
                {item.focus && (
                  <div className="pt-3">
                    <span className="text-[11px] font-mono text-[#666666] tracking-wide block">
                      {item.focus}
                    </span>
                  </div>
                )}

                {/* Extra Meta (e.g. Graduation date) */}
                {item.meta && (
                  <div className="pt-3">
                    <span className="text-[11px] font-mono text-[#666666] tracking-widest uppercase block">
                      {item.meta}
                    </span>
                  </div>
                )}

                {/* Experience Media / Certificate Preview Area */}
                {item.media && item.media.length > 0 && (
                  <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {item.media.map((img) => (
                      <div
                        key={img.src}
                        className="border border-white/[0.1] bg-[#0A0A0A] p-1.5 overflow-hidden group/media hover:border-white/25 transition-all duration-300"
                      >
                        <div className="overflow-hidden bg-[#050505] aspect-[4/3] flex items-center justify-center">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/media:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[9px] font-mono text-[#666666] tracking-wider uppercase block mt-1.5 px-0.5 truncate">
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
    </section>
  )
}
