import React from 'react'
import SolarSystemLayer from './SolarSystemLayer'
import StarField from './StarField'

const SpaceBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-300" aria-hidden>
      {/* Base */}
      <div className="absolute inset-0 bg-slate-100 dark:bg-space-void" />

      {/* Light mode — soft blue atmosphere */}
      <div
        className="absolute -left-1/4 top-0 h-[65vh] w-[75vw] rounded-full bg-sky-200/50 blur-[110px] dark:hidden"
        aria-hidden
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[55vh] w-[65vw] rounded-full bg-blue-200/40 blur-[100px] dark:hidden"
        aria-hidden
      />

      {/* Dark mode — cyan / blue nebula */}
      <div
        className="absolute -left-1/4 top-0 hidden h-[70vh] w-[80vw] rounded-full opacity-30 blur-[120px] dark:block"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.38) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute -right-1/4 bottom-0 hidden h-[60vh] w-[70vw] rounded-full opacity-25 blur-[100px] dark:block"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.35) 0%, transparent 60%)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 hidden dark:block">
        <SolarSystemLayer />
        <StarField layer="slow" className="opacity-70" />
        <StarField layer="mid" className="opacity-90" />
        <StarField layer="fast" className="opacity-50" />
      </div>

      {/* Grid — light */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Grid — dark */}
      <div
        className="absolute inset-0 hidden opacity-[0.07] dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 100%)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent dark:from-space-void" />
    </div>
  )
}

export default SpaceBackground
