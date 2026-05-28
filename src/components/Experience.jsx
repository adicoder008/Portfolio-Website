import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import MotionReveal from './MotionReveal'
import SectionHeader from './SectionHeader'

const Experience = () => {
  return (
    <section id="experience" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.08] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Experience"
          title="Startup & engineering timeline"
          description="From mechanical engineering at NITK to building AI-integrated products, analytics systems, and production-ready software across startup environments."
        />

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/10 to-transparent" />

          <ul className="space-y-10">
            {experience.map((item, i) => (
              <MotionReveal key={`${item.period}-${i}`} delay={i * 0.08}>
                <li className="relative pl-10">
                  <motion.span
                    className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                      item.highlight
                        ? 'border-violet-400 bg-violet-600/25 shadow-[0_0_16px_rgba(139,92,246,0.35)]'
                        : 'border-violet-500/20 bg-[#0B1020]'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, type: 'spring', stiffness: 300 }}
                  />

                  <div
                    className={`glass-card p-6 ${item.highlight ? 'border-violet-500/25 bg-violet-600/[0.06]' : ''}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-lavender-500">{item.period}</p>
                      {item.highlight ? (
                        <span className="rounded-full bg-violet-600/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                          Startup
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-violet-400/80">{item.org}</p>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-lavender-400">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/70" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
