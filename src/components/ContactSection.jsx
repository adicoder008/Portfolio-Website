import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiEnvelope } from 'react-icons/hi2'
import { profile, socialLinks } from '../data/portfolio'
import MotionReveal from './MotionReveal'
import SectionHeader from './SectionHeader'

const iconFor = (label) => {
  const key = label.toLowerCase()
  if (key === 'linkedin') return FaLinkedin
  if (key === 'github') return FaGithub
  if (key === 'leetcode') return SiLeetcode
  return FaLinkedin
}

const ContactSection = () => {
  const email = profile.email?.trim()

  return (
    <section id="contact" className="relative z-[1] scroll-mt-24 px-4 pb-24 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
            <div>
              <SectionHeader
                label="Contact"
                title="Let's build something ambitious"
                description="Share the role, stack, and timeline — I reply within 24–48 hours."
                className="max-w-xl"
              />

              <MotionReveal delay={0.1} className="mt-6 flex flex-wrap gap-3">
                {email ? (
                  <motion.a
                    href={`mailto:${email}`}
                    className="btn-primary px-6 py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiEnvelope className="h-4 w-4" />
                    Email me
                  </motion.a>
                ) : null}
                <a href="#projects" className="btn-secondary px-6 py-3">
                  View projects
                </a>
              </MotionReveal>

              {email ? (
                <p className="mt-4 font-mono text-xs text-lavender-400">
                  <a href={`mailto:${email}`} className="transition hover:text-violet-300">
                    {email}
                  </a>
                </p>
              ) : null}

              <p className="mt-4 font-mono text-[11px] text-lavender-500">{profile.availability}</p>
            </div>

            <MotionReveal delay={0.15}>
              <div className="rounded-2xl border border-violet-500/10 bg-[#0B1020]/60 p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lavender-500">Connect</p>
                <ul className="mt-3 space-y-2">
                  {email ? (
                    <li>
                      <a
                        href={`mailto:${email}`}
                        className="group flex items-center gap-3 rounded-xl border border-violet-500/10 bg-violet-500/[0.03] px-4 py-3 transition hover:border-violet-500/25 hover:bg-violet-600/[0.08]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-lavender-400 transition group-hover:text-violet-300">
                          <HiEnvelope size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-slate-200">Gmail</span>
                          <span className="block truncate text-xs text-lavender-500 group-hover:text-lavender-400">
                            {email}
                          </span>
                        </span>
                        <span className="ml-auto shrink-0 text-lavender-600 transition group-hover:text-violet-400" aria-hidden>
                          ↗
                        </span>
                      </a>
                    </li>
                  ) : null}
                  {socialLinks.map(({ label, href }) => {
                    const Icon = iconFor(label)
                    return (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-violet-500/10 bg-violet-500/[0.03] px-4 py-3 transition hover:border-violet-500/25 hover:bg-violet-600/[0.08]"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-lavender-400 transition group-hover:text-violet-300">
                            <Icon size={18} />
                          </span>
                          <span className="text-sm font-medium text-slate-200">{label}</span>
                          <span className="ml-auto text-lavender-600 transition group-hover:text-violet-400" aria-hidden>
                            ↗
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
