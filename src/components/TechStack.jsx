import React from 'react'
import { motion } from 'framer-motion'
import { techStackGroups } from '../data/portfolio'
import MotionReveal from './MotionReveal'
import SectionHeader from './SectionHeader'

const TechStack = () => {
  const byTitle = Object.fromEntries(techStackGroups.map((group) => [group.title, group]))
  const rows = [
    ['Core stack', 'Backend & APIs', 'AI systems'],
    ['Data & analytics', 'Databases', 'Languages'],
    ['Embedded & realtime', 'Developer tooling'],
  ]

  return (
    <section id="stack" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.08] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="TECH STACK"
          title="Systems, tools & technologies I build with"
          description="Full-stack engineering across scalable frontend systems, APIs, AI workflows, analytics platforms, databases, and real-time applications."
        />

        <div className="mt-10 space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={row.join('-')} className="grid grid-cols-1 gap-3 sm:grid-cols-12 lg:gap-4">
              {row.map((title, colIndex) => {
                const group = byTitle[title]
                if (!group) return null
                const spanClass = row.length === 3 ? 'sm:col-span-4' : 'sm:col-span-6'

                return (
                  <MotionReveal
                    key={group.title}
                    delay={(rowIndex * 3 + colIndex) * 0.03}
                    className={spanClass}
                  >
                    <motion.div
                      className="glass-card group h-full min-h-[168px] p-4"
                      whileHover={{ y: -3, borderColor: 'rgba(139, 92, 246, 0.35)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lavender-500 group-hover:text-violet-300">
                        {group.title}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {group.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-violet-500/15 bg-violet-500/[0.08] px-2 py-[3px] text-[10px] font-medium text-lavender-400 transition group-hover:border-violet-400/30 group-hover:text-violet-200"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </MotionReveal>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
