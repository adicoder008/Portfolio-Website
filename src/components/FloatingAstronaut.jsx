import React from 'react'
import AstronautFigure from './AstronautFigure'

/**
 * Zero‑g illusion: three de-synced drifts + mild sway (no wild spins).
 */
const FloatingAstronaut = () => {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-[12%] z-[1] flex justify-end md:top-[14%]"
      aria-hidden
    >
      <div className="relative mx-auto w-full max-w-6xl px-2 md:px-4">
        <div className="zero-g-x motion-reduce:animate-none absolute right-[2%] sm:right-[6%] md:right-[8%]">
          <div className="zero-g-y motion-reduce:animate-none">
            <div className="zero-g-tumble motion-reduce:animate-none">
              <div className="zero-g-wobble motion-reduce:animate-none">
                <AstronautFigure className="h-20 w-auto opacity-[0.92] drop-shadow-[0_0_24px_rgba(56,189,248,0.35)] sm:h-24 md:h-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingAstronaut
