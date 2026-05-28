import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks, profile } from '../data/portfolio'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-violet-500/10 bg-[#050816]/85 py-3 backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {profile.shortName}
          <span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-lavender-400 transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-violet-600/15 px-4 py-2 text-xs font-semibold text-violet-200 ring-1 ring-violet-500/25 transition hover:bg-violet-600/25 sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-violet-500/10 bg-[#050816]/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 text-sm text-slate-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-flex rounded-xl bg-violet-600/15 px-4 py-2 text-sm font-semibold text-violet-200"
                onClick={() => setOpen(false)}
              >
                Hire me
              </a>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </header>
  )
}

export default Navbar
