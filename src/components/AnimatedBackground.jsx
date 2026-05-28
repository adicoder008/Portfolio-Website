import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#050816]" />

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(109,40,217,0.14),transparent_55%)]"
        aria-hidden
      />

      <motion.div
        className="absolute -left-[20%] top-[-10%] h-[55vh] w-[55vw] rounded-full bg-violet-700/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[15%] top-[20%] h-[45vh] w-[50vw] rounded-full bg-indigo-600/15 blur-[110px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[40vh] w-[45vw] rounded-full bg-purple-800/10 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 100%)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/40 to-[#050816]" />
    </div>
  )
}

export default AnimatedBackground
