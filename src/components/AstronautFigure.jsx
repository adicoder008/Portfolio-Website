import React from 'react'

/** Small stylized astronaut — reads clearly at ~80–112px height */
const AstronautFigure = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 112"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    {/* Backpack */}
    <rect x="44" y="50" width="18" height="34" rx="4" fill="#0f172a" stroke="rgba(148,163,184,0.4)" strokeWidth="1.2" />
    {/* Legs */}
    <rect x="28" y="82" width="11" height="26" rx="5" fill="#cbd5e1" />
    <rect x="41" y="82" width="11" height="26" rx="5" fill="#cbd5e1" />
    {/* Body */}
    <rect x="22" y="48" width="36" height="40" rx="10" fill="#f1f5f9" stroke="rgba(148,163,184,0.45)" strokeWidth="1.2" />
    <rect x="28" y="56" width="24" height="18" rx="3" fill="#0f172a" opacity="0.88" />
    <circle cx="40" cy="65" r="3.5" fill="#38bdf8" />
    {/* Arms */}
    <ellipse cx="18" cy="58" rx="7" ry="16" fill="#e2e8f0" transform="rotate(-18 18 58)" />
    <ellipse cx="62" cy="58" rx="7" ry="16" fill="#e2e8f0" transform="rotate(18 62 58)" />
    {/* Helmet */}
    <circle cx="40" cy="32" r="20" fill="#e2e8f0" stroke="rgba(148,163,184,0.55)" strokeWidth="1.5" />
    <ellipse cx="40" cy="32" rx="15" ry="14" fill="#020617" opacity="0.92" />
    <ellipse cx="34" cy="28" rx="8" ry="6" fill="url(#visorshine)" opacity="0.4" />
    <defs>
      <linearGradient id="visorshine" x1="26" y1="22" x2="44" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" />
        <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

export default AstronautFigure
