import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroScreenshots } from '../data/portfolio'

const terminalLines = [
  { text: '$ npm run build', delay: 0 },
  { text: '✓ TypeScript · 0 errors', delay: 0.4, className: 'text-emerald-400/90' },
  { text: '$ deploy --env production', delay: 0.8 },
  { text: '→ API gateway · MongoDB · AI layer', delay: 1.2, className: 'text-violet-400/80' },
]

const metrics = [
  { label: 'Uptime', value: '99.9%', trend: '+0.2%' },
  { label: 'API latency', value: '42ms', trend: '-8ms' },
  { label: 'Active users', value: '12.4k', trend: '+18%' },
]

const archNodes = ['React UI', 'Node API', 'MongoDB', 'AI Engine']

const HeroEngineeringVisual = () => {
  const [slide, setSlide] = useState(0)
  const [lineCount, setLineCount] = useState(1)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroScreenshots.length), 4200)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setLineCount((c) => (c >= terminalLines.length ? 1 : c + 1)), 2800)
    return () => clearInterval(t)
  }, [])

  const current = heroScreenshots[slide]

  return (
    <div className="relative w-full">
      {/* Glow + grid */}
      <div
        className="hero-grid pointer-events-none absolute -inset-6 rounded-3xl opacity-60"
        aria-hidden
      />
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-violet-600/15 blur-3xl" aria-hidden />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden>
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-violet-400/35"
            style={{ left: `${8 + (i * 7) % 85}%`, top: `${10 + (i * 11) % 80}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-violet-500/15 bg-[#0B1020]/90 shadow-2xl shadow-black/60 backdrop-blur-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-violet-500/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-[10px] text-lavender-500">product-console · live</span>
        </div>

        <div className="grid min-h-[220px] grid-cols-1 sm:grid-cols-[38%_1fr]">
          {/* Terminal */}
          <div className="border-b border-violet-500/10 bg-[#050816]/80 p-3 font-mono text-[10px] leading-relaxed sm:border-b-0 sm:border-r sm:p-4 sm:text-[11px]">
            {terminalLines.slice(0, lineCount).map((line, i) => (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-lavender-400 ${line.className ?? ''}`}
              >
                {line.text}
              </motion.p>
            ))}
            <p className="mt-1 text-lavender-500">
              <span className="text-violet-400">❯</span> shipping features
              <span className="hero-cursor ml-0.5 inline-block h-3 w-[6px]" />
            </p>
          </div>

          {/* Dashboard widgets */}
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="rounded-lg border border-violet-500/10 bg-violet-500/[0.04] px-2 py-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ borderColor: 'rgba(139, 92, 246, 0.28)' }}
                >
                  <p className="text-[9px] text-lavender-500">{m.label}</p>
                  <p className="text-sm font-semibold text-white">{m.value}</p>
                  <p className="text-[9px] text-emerald-400/80">{m.trend}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-violet-500/10 bg-violet-500/[0.03] p-2">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-lavender-500">Throughput</p>
              <div className="flex h-14 items-end gap-1">
                {[32, 48, 40, 64, 52, 72, 58, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-violet-700/80 to-indigo-400/40"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Architecture flow */}
        <div className="flex flex-wrap items-center gap-1 border-t border-violet-500/10 bg-violet-500/[0.03] px-3 py-2">
          {archNodes.map((node, i) => (
            <React.Fragment key={node}>
              <motion.span
                className="rounded-md border border-violet-500/20 bg-violet-600/10 px-2 py-0.5 font-mono text-[9px] text-violet-200/90"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              >
                {node}
              </motion.span>
              {i < archNodes.length - 1 ? (
                <span className="text-[10px] text-lavender-600" aria-hidden>
                  →
                </span>
              ) : null}
            </React.Fragment>
          ))}
        </div>

        {/* Rotating product screenshots */}
        <div className="relative aspect-[16/7] overflow-hidden border-t border-violet-500/10 bg-[#050816]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.label}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
            >
              {current.gradient ? (
                <div className="h-full w-full" style={{ background: current.gradient }} />
              ) : (
                <img src={current.src} alt="" className="h-full w-full object-cover object-top" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-wider text-violet-300/90">{current.label}</p>
            <div className="flex gap-1">
              {heroScreenshots.map((s, i) => (
                <span
                  key={s.label}
                  className={`h-1 rounded-full transition-all ${i === slide ? 'w-4 bg-violet-400' : 'w-1 bg-violet-500/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroEngineeringVisual
