import React from 'react'
import { aboutPoints, profile } from '../data/portfolio'
import MotionReveal from './MotionReveal'
import SectionHeader from './SectionHeader'

const About = () => {
  return (
    <section id="about" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.08] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Technical builder focused on scalable systems"
          description="Mechanical Engineering student at NITK Surathkal building full-stack products, AI-integrated workflows, analytics systems, and real-time applications across startup and research environments."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {aboutPoints.map((point, i) => (
            <MotionReveal key={point.title} delay={i * 0.08}>
              <article className="glass-card h-full p-6 transition hover:border-violet-500/25">
                <h3 className="text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-lavender-400">{point.body}</p>
              </article>
            </MotionReveal>
          ))}
        </div>

        {/* <MotionReveal className="mt-8" delay={0.15}>
          <p className="glass-card max-w-3xl p-6 text-sm leading-relaxed text-lavender-400 sm:text-[0.9375rem]">
            Aditya Singh — Full-stack engineer · NITK · React, TypeScript, Node.js, AI-integrated systems, analytics platforms, and real-time engineering applications.
          </p>
        </MotionReveal> */}
      </div>
    </section>
  )
}

export default About
