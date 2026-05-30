import React from 'react'
import { motion } from 'framer-motion'
import { engineeringCapabilities } from '../data/portfolio'
import MotionReveal from './MotionReveal'
import SectionHeader from './SectionHeader'

const ease = [0.22, 1, 0.36, 1]

const CapabilityCard = ({ capability, index }) => {
  const isPrimary = index === 0

  return (
    <MotionReveal delay={index * 0.06}>
      <motion.article
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-8 ${
          isPrimary
            ? 'bg-gradient-to-br from-violet-950/40 via-[#0B1020]/80 to-[#050816]/90'
            : 'bg-[#0B1020]/50'
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease }}
      >
        {/* Subtle top accent — no borders */}
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
            isPrimary ? 'via-violet-400/40' : 'via-violet-500/20'
          } to-transparent`}
          aria-hidden
        />

        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-semibold tracking-tight text-white ${
              isPrimary ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            {capability.title}
          </h3>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-lavender-600">
            {capability.projects}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-lavender-400">
          {capability.frontend && capability.backend ? (
            <>
              <span className="block">
                <span className="font-mono text-[10px] uppercase tracking-wider text-lavender-600">
                  Frontend ·{' '}
                </span>
                {capability.frontend.join(' · ')}
              </span>
              <span className="mt-2 block">
                <span className="font-mono text-[10px] uppercase tracking-wider text-lavender-600">
                  Backend ·{' '}
                </span>
                {capability.backend.join(' · ')}
              </span>
            </>
          ) : (
            capability.skills?.join(' · ')
          )}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-lavender-500">{capability.description}</p>

        {/* Subtle proficiency — project context + emphasis, not resume-style */}
        <div className="mt-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-lavender-600">
            {capability.emphasis} capability
          </span>
          <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              className={`h-full rounded-full ${isPrimary ? 'bg-violet-400/60' : 'bg-violet-500/35'}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${capability.strength}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.08, ease }}
            />
          </div>
        </div>
      </motion.article>
    </MotionReveal>
  )
}

const TechStack = () => {
  return (
    <section id="stack" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.06] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Capabilities"
          title="Tools I build with"
          description="Four engineering domains — full-stack products, AI systems, analytics, and embedded real-time work."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {engineeringCapabilities.map((capability, i) => (
            <CapabilityCard key={capability.id} capability={capability} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
