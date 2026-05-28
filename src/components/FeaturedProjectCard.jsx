import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const FeaturedProjectCard = ({
  title,
  subtitle,
  description,
  tech,
  image,
  imageFallback,
  github,
  live,
  index = 0,
  className = '',
  compact = false,
}) => {
  const [imgSrc, setImgSrc] = useState(image)
  const useGradient =
    !imgSrc && typeof imageFallback === 'string' && imageFallback.startsWith('linear-gradient')
  const visibleTech = compact ? tech.slice(0, 3) : tech
  const extraTech = compact && tech.length > 3 ? tech.length - 3 : 0

  return (
    <motion.article
      className={`glass-card group flex min-h-0 h-full flex-col overflow-hidden ring-1 ring-white/0 transition-[border-color,box-shadow,ring-color] hover:border-white/45 hover:ring-white/35 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: compact ? -3 : -6 }}
    >
      <div
        className={`relative shrink-0 overflow-hidden border-b border-white/[0.06] bg-slate-900/80 ${
          compact ? 'h-[150px] sm:h-[170px]' : 'aspect-[4/3] sm:aspect-[16/10]'
        }`}
      >
        {useGradient ? (
          <div className="h-full w-full" style={{ background: imageFallback }} />
        ) : (
          <img
            src={imgSrc || imageFallback}
            alt=""
            className={`h-full w-full transition duration-500 group-hover:scale-[1.02] ${
              compact ? 'object-contain bg-[#050816] p-1.5' : 'object-cover'
            }`}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (imageFallback && !imageFallback.startsWith('linear-gradient')) setImgSrc(imageFallback)
              else setImgSrc(null)
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent" />
        <p
          className={`absolute font-mono uppercase tracking-[0.18em] text-violet-400/90 ${
            compact ? 'bottom-2 left-2.5 text-[8px]' : 'bottom-4 left-4 text-[10px]'
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div className={`flex min-h-0 flex-1 flex-col ${compact ? 'p-3.5 sm:p-4' : 'p-5 sm:p-6'}`}>
        <h3
          className={`font-semibold text-white transition group-hover:text-violet-200 ${
            compact ? 'text-sm leading-snug' : 'text-lg'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-1 min-h-0 flex-1 text-slate-400 ${
            compact ? 'text-[11px] leading-relaxed text-lavender-400 line-clamp-2' : 'mt-2 text-sm leading-relaxed text-lavender-400 line-clamp-4'
          }`}
        >
          {description}
        </p>

        <ul className={`flex flex-wrap gap-1 ${compact ? 'mt-2' : 'mt-4 gap-2'}`}>
          {visibleTech.map((t) => (
            <li
              key={t}
              className={`rounded border border-violet-500/10 bg-violet-500/[0.06] font-mono uppercase tracking-wide text-lavender-400 ${
                compact ? 'px-1.5 py-px text-[8px]' : 'px-2 py-0.5 text-[10px]'
              }`}
            >
              {t}
            </li>
          ))}
          {extraTech > 0 ? (
            <li className="px-1.5 py-px font-mono text-[8px] text-lavender-500">+{extraTech}</li>
          ) : null}
        </ul>

        <div className={`mt-auto flex flex-wrap gap-1.5 ${compact ? 'pt-2' : 'mt-5 gap-2'}`}>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] ${
                compact ? 'px-2 py-1 text-[10px]' : 'gap-2 px-4 py-2 text-xs'
              }`}
            >
              <FaGithub className={compact ? 'h-3 w-3' : 'h-4 w-4'} />
              GitHub
            </a>
          ) : null}
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 rounded-md bg-violet-600/15 font-semibold text-violet-200 ring-1 ring-violet-500/25 transition hover:bg-violet-600/25 ${
                compact ? 'px-2 py-1 text-[10px]' : 'gap-2 px-4 py-2 text-xs'
              }`}
            >
              Live
              <HiArrowTopRightOnSquare className="h-3 w-3" />
            </a>
          ) : (
            <a
              href="#contact"
              className={`inline-flex items-center rounded-md border border-dashed border-violet-500/20 font-semibold text-lavender-400 transition hover:border-violet-500/35 hover:text-violet-200 ${
                compact ? 'px-2 py-1 text-[10px]' : 'px-4 py-2 text-xs'
              }`}
            >
              Request access
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default FeaturedProjectCard
