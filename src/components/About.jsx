import React from 'react'
import { motion } from 'framer-motion'
import { HiBolt, HiCodeBracketSquare, HiSparkles } from 'react-icons/hi2'
import { aboutPoints } from '../data/portfolio'
import MotionReveal from './MotionReveal'
import SectionHeader from './SectionHeader'

const iconMap = {
  stack: HiCodeBracketSquare,
  ai: HiSparkles,
  bolt: HiBolt,
}

const About = () => {
  return (
    <section id="about" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.08] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Full-stack engineer · NITK Surathkal"
          description="I build and ship React & Node products — AI tools, dashboards, and startup platforms — with clean architecture and a bias toward production."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {aboutPoints.map((point, i) => {
            const Icon = iconMap[point.icon] ?? HiCodeBracketSquare

            return (
              <MotionReveal key={point.title} delay={i * 0.06}>
                <motion.article
                  className="glass-card group flex h-full min-h-[220px] flex-col items-center justify-center p-6 text-center transition hover:border-violet-500/25 sm:p-7"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/15 group-hover:text-violet-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-lavender-400 sm:text-sm">
                    {point.body}
                  </p>
                </motion.article>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
