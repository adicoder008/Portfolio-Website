import React from 'react'

/**
 * Decorative suns / planets / moons — fixed layout reads “random” but stays stable.
 */
const BODIES = [
  {
    id: 'sun-a',
    kind: 'sun',
    style: { left: '2%', top: '8%', width: 128, height: 128 },
    glow: 'rgba(251, 191, 36, 0.42)',
    core: 'rgba(253, 224, 71, 0.9)',
  },
  {
    id: 'sun-b',
    kind: 'sun',
    style: { right: '4%', top: '18%', width: 68, height: 68 },
    glow: 'rgba(249, 115, 22, 0.38)',
    core: 'rgba(254, 215, 170, 0.78)',
  },
  {
    id: 'mini-sun',
    kind: 'sun',
    style: { left: '48%', top: '6%', width: 44, height: 44 },
    glow: 'rgba(56, 189, 248, 0.32)',
    core: 'rgba(186, 230, 253, 0.6)',
  },
  {
    id: 'planet-1',
    kind: 'planet',
    style: { left: '14%', top: '36%', width: 34, height: 34 },
    fill: 'linear-gradient(135deg, rgba(56,189,248,0.55), rgba(99,102,241,0.38))',
    ring: true,
  },
  {
    id: 'moon-1',
    kind: 'moon',
    style: { left: '17%', top: '34%', width: 10, height: 10 },
    fill: '#cbd5e1',
  },
  {
    id: 'planet-2',
    kind: 'planet',
    style: { right: '12%', bottom: '26%', width: 42, height: 42 },
    fill: 'linear-gradient(145deg, rgba(167,139,250,0.55), rgba(52,211,153,0.28))',
    ring: true,
  },
  {
    id: 'moon-2',
    kind: 'moon',
    style: { right: '9%', bottom: '29%', width: 11, height: 11 },
    fill: '#94a3b8',
  },
  {
    id: 'planet-3',
    kind: 'planet',
    style: { left: '40%', bottom: '11%', width: 26, height: 26 },
    fill: 'linear-gradient(180deg, rgba(248,113,113,0.42), rgba(30,41,59,0.85))',
    ring: false,
  },
  {
    id: 'moon-3',
    kind: 'moon',
    style: { left: '44%', bottom: '13%', width: 8, height: 8 },
    fill: '#e2e8f0',
  },
  {
    id: 'planet-4',
    kind: 'planet',
    style: { left: '6%', bottom: '16%', width: 20, height: 20 },
    fill: 'linear-gradient(90deg, rgba(148,163,184,0.48), rgba(15,23,42,0.92))',
    ring: false,
  },
]

const SolarSystemLayer = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.45]" aria-hidden>
      <div
        className="orbit-line motion-reduce:animate-none absolute left-[12%] top-[30%] h-[100px] w-[160px] rounded-[100%] border border-white/[0.045]"
        style={{ transform: 'rotate(-16deg)' }}
      />
      <div
        className="orbit-line motion-reduce:animate-none absolute right-[6%] bottom-[24%] h-[160px] w-[240px] rounded-[100%] border border-white/[0.04]"
        style={{ transform: 'rotate(14deg)' }}
      />

      {BODIES.map((b) => {
        if (b.kind === 'sun') {
          return (
            <div
              key={b.id}
              className="absolute animate-celestial-drift motion-reduce:animate-none"
              style={{
                width: b.style.width,
                height: b.style.height,
                left: b.style.left,
                top: b.style.top,
                right: b.style.right,
                bottom: b.style.bottom,
              }}
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: b.glow, opacity: 0.95 }}
              />
              <div
                className="absolute inset-[12%] rounded-full blur-md"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${b.core}, transparent 62%)`,
                  boxShadow: `0 0 48px ${b.glow}`,
                }}
              />
            </div>
          )
        }

        if (b.kind === 'planet') {
          return (
            <div
              key={b.id}
              className="absolute animate-celestial-drift-slow motion-reduce:animate-none"
              style={{
                width: b.style.width,
                height: b.style.height,
                left: b.style.left,
                top: b.style.top,
                right: b.style.right,
                bottom: b.style.bottom,
              }}
            >
              {b.ring && (
                <div
                  className="absolute -inset-[20%] rounded-full border border-white/[0.06] opacity-75"
                  style={{ transform: 'rotate(-22deg) scaleY(0.32)' }}
                />
              )}
              <div
                className="h-full w-full rounded-full shadow-[inset_-4px_-6px_14px_rgba(0,0,0,0.5)]"
                style={{ background: b.fill }}
              />
            </div>
          )
        }

        return (
          <div
            key={b.id}
            className="absolute animate-celestial-drift-moon motion-reduce:animate-none rounded-full shadow-[0_0_14px_rgba(255,255,255,0.1)]"
            style={{
              width: b.style.width,
              height: b.style.height,
              left: b.style.left,
              top: b.style.top,
              right: b.style.right,
              bottom: b.style.bottom,
              background: `radial-gradient(circle at 32% 32%, ${b.fill}, #64748b)`,
            }}
          />
        )
      })}
    </div>
  )
}

export default SolarSystemLayer
