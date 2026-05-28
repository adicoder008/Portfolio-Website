import React from 'react'
import { useInView } from '../hooks/useInView'

const Reveal = ({ children, className = '' }) => {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-500 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal
