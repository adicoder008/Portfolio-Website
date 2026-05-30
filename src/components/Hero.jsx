import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDownTray, HiOutlineRocketLaunch } from 'react-icons/hi2'
import { profile } from '../data/portfolio'
import HeroEngineeringVisual from './HeroEngineeringVisual'
import MotionReveal from './MotionReveal'

const Hero = () => {
  const resumeHref = profile.resumeUrl

  return (
    <section id="top" className="relative z-[1] scroll-mt-20 overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* Copy */}
        <div className="max-w-lg">
          <MotionReveal delay={0}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-400/80">
              {profile.role} · {profile.location}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.05} className="mt-4">
            <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-white">
              {profile.headline}
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.1} className="mt-4">
            <p className="max-w-md text-sm leading-relaxed text-lavender-400">{profile.subheadline}</p>
          </MotionReveal>

          <MotionReveal delay={0.14} className="mt-5 flex flex-wrap gap-2">
            {profile.heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-500/[0.08] px-2.5 py-1 text-[10px] font-medium text-lavender-400"
              >
                {tag}
              </span>
            ))}
          </MotionReveal>

          <MotionReveal delay={0.18} className="mt-7">
            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                href={resumeHref}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiArrowDownTray className="h-4 w-4" />
                Resume
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineRocketLaunch className="h-4 w-4 text-violet-300" />
                Projects
              </motion.a>
              <a
                href="#contact"
                className="px-2 py-2.5 text-sm font-medium text-lavender-500 transition hover:text-violet-300"
              >
                Contact →
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.22} className="mt-8 flex gap-8 border-t border-violet-500/10 pt-6">
            {profile.heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-base font-semibold text-white">{stat.value}</p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-lavender-500">{stat.label}</p>
              </div>
            ))}
          </MotionReveal>
        </div>

        {/* Engineering visual */}
        <MotionReveal delay={0.1} y={20} className="w-full lg:max-w-none">
          <HeroEngineeringVisual />
        </MotionReveal>
      </div>
    </section>
  )
}

export default Hero
