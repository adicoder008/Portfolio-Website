import React, { useMemo } from 'react'

/** Deterministic “random” layout — stable across renders, no hydration surprises. */
function makeStars(count, seedOffset = 0) {
  return Array.from({ length: count }, (_, i) => {
    const n = i + seedOffset
    const left = ((n * 47.13) % 100).toFixed(2)
    const top = ((n * 71.29 + seedOffset) % 100).toFixed(2)
    const size = 1 + (n % 3)
    const opacity = 0.15 + (n % 8) * 0.09
    const duration = 60 + (n % 50)
    const delay = (n % 12) * -4
    return { left, top, size, opacity, duration, delay, blur: n % 5 === 0 }
  })
}

/**
 * Tiny DOM stars + slow drift — cheaper than heavy particle libraries.
 */
const StarField = ({ className = '', layer = 'mid' }) => {
  const stars = useMemo(() => {
    const count = layer === 'slow' ? 28 : layer === 'mid' ? 36 : 22
    const offset = layer === 'slow' ? 0 : layer === 'mid' ? 101 : 209
    return makeStars(count, offset)
  }, [layer])

  const drift =
    layer === 'slow' ? 'animate-star-drift-slow' : layer === 'fast' ? 'animate-star-drift-fast' : 'animate-star-drift-mid'

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((s, i) => (
        <span
          key={`${layer}-${i}`}
          className={`absolute rounded-full bg-white ${drift}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            boxShadow: s.blur ? '0 0 6px rgba(255,255,255,0.45)' : undefined,
          }}
        />
      ))}
    </div>
  )
}

export default StarField
