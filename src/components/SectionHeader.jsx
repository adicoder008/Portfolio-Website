import React from 'react'
import MotionReveal from './MotionReveal'

const SectionHeader = ({ label, title, description, className = '' }) => {
  return (
    <MotionReveal className={`max-w-2xl ${className}`}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-violet-400/80">{label}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-lavender-400 sm:text-[0.9375rem]">{description}</p>
      ) : null}
    </MotionReveal>
  )
}

export default SectionHeader
