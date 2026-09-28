import { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="editorial-container relative">
        {/* Top Section Divider */}
        <div className="editorial-divider mb-16 md:mb-20" aria-hidden="true" />

        {/* Subtle Watermark 01 */}
        <span
          className="absolute -top-6 right-4 md:right-8 font-editorial text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </span>

        {/* Content Grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Label & Large Headline */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div
              className={`reveal-init ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: '50ms' }}
            >
              <span className="section-label">01 / ABOUT</span>
            </div>

            <h2
              id="about-heading"
              className={`section-headline text-[#F5F5F2] reveal-init ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              A developer who likes<br />
              understanding how<br />
              things work.
            </h2>
          </div>

          {/* Right Column: Narrative Copy & Editorial Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            {/* Narrative Paragraph */}
            <p
              className={`text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[620px] font-normal reveal-init ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              I'm a Junior Full Stack Developer focused on building web and mobile
              applications. I enjoy working across the stack — from responsive
              interfaces and React applications to REST APIs, databases,
              authentication, and application architecture.
            </p>

            {/* Editorial Divider */}
            <div
              className={`editorial-divider reveal-init ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{ transitionDelay: '350ms' }}
              aria-hidden="true"
            />

            {/* Metadata Section */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 reveal-init ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              {/* Focus */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block">
                  Focus
                </span>
                <p className="text-sm md:text-base text-[#F5F5F2] font-medium">
                  Full Stack Development
                </p>
              </div>

              {/* Current Stack */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block">
                  Current Stack
                </span>
                <p className="text-sm md:text-base text-[#F5F5F2] font-medium leading-snug">
                  React · TypeScript · Node.js · PostgreSQL
                </p>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium block">
                  Location
                </span>
                <p className="text-sm md:text-base text-[#F5F5F2] font-medium">
                  Depok, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
