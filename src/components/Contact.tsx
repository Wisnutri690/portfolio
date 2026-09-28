import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
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
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="editorial-container relative">
        {/* Top Section Divider */}
        <div className="editorial-divider mb-16 md:mb-20" aria-hidden="true" />

        {/* Subtle Watermark 05 */}
        <span
          className="absolute -top-6 right-4 md:right-8 font-editorial text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          05
        </span>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div
              data-reveal-id="contact-label"
              className={`reveal-init ${isVisible('contact-label') ? 'reveal-visible' : ''}`}
            >
              <span className="section-label">05 / CONTACT</span>
            </div>

            <h2
              id="contact-heading"
              data-reveal-id="contact-title"
              className={`section-headline text-[#F5F5F2] reveal-init ${
                isVisible('contact-title') ? 'reveal-visible' : ''
              }`}
            >
              Let's build something<br />
              useful.
            </h2>

            <p
              data-reveal-id="contact-desc"
              className={`text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[560px] font-normal reveal-init ${
                isVisible('contact-desc') ? 'reveal-visible' : ''
              }`}
            >
              Have a project, opportunity, or idea in mind? I'm open to
              conversations about full-stack development and building useful
              digital products.
            </p>
          </div>

          {/* Right Column: Contact Details & Action Buttons */}
          <div
            data-reveal-id="contact-action"
            className={`lg:col-span-5 flex flex-col space-y-8 pt-4 lg:pt-14 reveal-init ${
              isVisible('contact-action') ? 'reveal-visible' : ''
            }`}
          >
            {/* Direct Contact Information */}
            <div className="space-y-5 border-t border-white/[0.12] pt-6">
              <div className="flex flex-col space-y-1">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium">
                  Direct Email
                </span>
                <a
                  href="mailto:wisnutri690@gmail.com"
                  className="text-base sm:text-lg text-[#F5F5F2] hover:text-white transition-colors duration-200 font-mono break-all"
                >
                  wisnutri690@gmail.com
                </a>
              </div>

              <div className="flex flex-col space-y-1 pt-1">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-medium">
                  Location & Timezone
                </span>
                <p className="text-sm text-[#A1A1A1]">
                  Depok, Indonesia (GMT+7)
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:wisnutri690@gmail.com"
                className="btn-primary group"
                aria-label="Send email to wisnutri690@gmail.com"
              >
                <span>Email Me</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/wisnutri-andika"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary group"
                aria-label="Connect with Wisnu Tri on LinkedIn"
              >
                <span>LinkedIn</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
