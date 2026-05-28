import React from 'react'
import { navLinks, profile, socialLinks } from '../data/portfolio'

const Footer = () => {
  return (
    <footer className="relative z-[1] border-t border-violet-500/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{profile.fullName}</p>
          <p className="mt-1 text-xs text-lavender-500">{profile.role} · {profile.location}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-xs text-lavender-500 transition hover:text-violet-300">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[10px] uppercase tracking-wider text-lavender-600">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
