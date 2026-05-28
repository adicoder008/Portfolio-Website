import React from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const MotionReveal = ({
  children,
  className = '',
  delay = 0,
  y = 28,
  as: Component = motion.div,
}) => {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </Component>
  )
}

export default MotionReveal
