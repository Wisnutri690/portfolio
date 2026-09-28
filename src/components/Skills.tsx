import { useEffect, useRef, useState } from 'react'

interface SkillGroup {
  number: string
  category: string
  skills: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    number: '01',
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    number: '02',
    category: 'Backend',
    skills: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'REST API', 'JWT'],
  },
  {
    number: '03',
    category: 'Database',
    skills: ['PostgreSQL'],
  },
  {
    number: '04',
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'NativeWind'],
  },
  {
    number: '05',
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman'],
  },
]

export default function Skills() {
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
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="editorial-container relative">
        {/* Top Section Divider */}
        <div className="editorial-divider mb-16 md:mb-20" aria-hidden="true" />

        {/* Subtle Watermark 02 */}
        <span
          className="absolute -top-6 right-4 md:right-8 font-editorial text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          02
        </span>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-28">
            <div
              className={`reveal-init ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: '50ms' }}
            >
              <span className="section-label">02 / STACK</span>
            </div>

            <h2
              id="skills-heading"
              className={`section-headline text-[#F5F5F2] reveal-init ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Tools I use to build<br />
              from interface to API.
            </h2>

            <p
              className={`text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-[540px] font-normal reveal-init ${
                isVisible ? 'reveal-visible' : ''
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              A practical stack built around modern JavaScript and TypeScript,
              covering frontend interfaces, backend services, databases, and
              cross-platform mobile development.
            </p>
          </div>

          {/* Right Column: Editorial Category Rows */}
          <div className="lg:col-span-7 flex flex-col border-y border-white/[0.12]">
            {SKILL_GROUPS.map((group, index) => (
              <div
                key={group.number}
                className={`py-8 border-b border-white/[0.08] last:border-b-0 reveal-init ${
                  isVisible ? 'reveal-visible' : ''
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  {/* Category Header */}
                  <div className="sm:col-span-4 flex items-center gap-3">
                    <span className="font-mono text-xs text-[#666666]">
                      {group.number}
                    </span>
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[#F5F5F2] font-medium">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="sm:col-span-8">
                    <ul
                      className="flex flex-wrap items-center gap-x-6 gap-y-2.5"
                      role="list"
                    >
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-base text-[#A1A1A1] hover:text-[#F5F5F2] transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
