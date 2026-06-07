import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const TIER = {
  hero: {
    image: 'h-[68%]',
    body: 'p-2.5 sm:p-3',
    title: 'text-[13px] sm:text-sm font-semibold leading-snug',
    desc: 'text-[10px] sm:text-[11px] leading-snug line-clamp-2',
    tech: 'text-[8px] sm:text-[9px] line-clamp-1',
    subtitle: 'text-[7px] sm:text-[8px]',
    btn: 'px-1.5 py-0.5 text-[9px] gap-0.5',
    icon: 'h-2.5 w-2.5',
    card: 'ring-1 ring-violet-500/20 shadow-[0_0_32px_-12px_rgba(139,92,246,0.35)]',
  },
  major: {
    image: 'h-[66%]',
    body: 'p-2.5',
    title: 'text-[12px] sm:text-[13px] font-semibold leading-snug',
    desc: 'text-[10px] leading-snug line-clamp-2',
    tech: 'text-[8px] sm:text-[9px] line-clamp-1',
    subtitle: 'text-[7px] sm:text-[8px]',
    btn: 'px-1.5 py-0.5 text-[9px] gap-0.5',
    icon: 'h-2.5 w-2.5',
    card: '',
  },
  standard: {
    image: 'h-[64%]',
    body: 'p-2.5',
    title: 'text-[12px] font-semibold leading-snug',
    desc: 'text-[10px] leading-snug line-clamp-2',
    tech: 'text-[8px] sm:text-[9px] line-clamp-1',
    subtitle: 'text-[7px] sm:text-[8px]',
    btn: 'px-1.5 py-0.5 text-[9px] gap-0.5',
    icon: 'h-2.5 w-2.5',
    card: '',
  },
  minor: {
    image: 'h-[60%]',
    body: 'p-2',
    title: 'text-[11px] sm:text-[12px] font-medium leading-snug text-white/85',
    desc: 'text-[9px] sm:text-[10px] leading-snug line-clamp-2 text-lavender-500',
    tech: 'text-[8px] line-clamp-1 text-lavender-600',
    subtitle: 'text-[7px] text-violet-400/70',
    btn: 'px-1.5 py-0.5 text-[8px] gap-0.5',
    icon: 'h-2 w-2',
    card: 'opacity-[0.88] border-white/[0.05] hover:opacity-100',
  },
}

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
  tier = 'standard',
}) => {
  const [imgSrc, setImgSrc] = useState(image)
  const styles = TIER[tier] ?? TIER.standard
  const useGradient =
    !imgSrc && typeof imageFallback === 'string' && imageFallback.startsWith('linear-gradient')
  const techLine = tech.join(' · ')

  return (
    <motion.article
      className={`glass-card group flex h-full min-h-0 flex-col overflow-hidden transition-[border-color,box-shadow,opacity] hover:border-violet-500/25 ${styles.card} ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
    >
      <div
        className={`relative shrink-0 overflow-hidden border-b border-white/[0.05] bg-[#050816] ${styles.image}`}
      >
        {useGradient ? (
          <div className="h-full w-full" style={{ background: imageFallback }} />
        ) : (
          <img
            src={imgSrc || imageFallback}
            alt=""
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
            loading="lazy"
            decoding="async"
            onError={() => {
              if (imageFallback && !imageFallback.startsWith('linear-gradient')) setImgSrc(imageFallback)
              else setImgSrc(null)
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/20 to-transparent" />
        <p
          className={`absolute bottom-1.5 left-2 font-mono uppercase tracking-[0.16em] text-violet-400/90 ${styles.subtitle}`}
        >
          {subtitle}
        </p>
      </div>

      <div className={`flex min-h-0 flex-1 flex-col ${styles.body}`}>
        <h3 className={`text-white transition group-hover:text-violet-200 ${styles.title}`}>{title}</h3>

        <p className={`mt-0.5 min-h-0 flex-1 text-lavender-400 ${styles.desc}`}>{description}</p>

        <p className={`mt-1 shrink-0 truncate font-mono uppercase tracking-wide text-lavender-500 ${styles.tech}`}>
          {techLine}
        </p>

        <div className="mt-1.5 flex shrink-0 flex-wrap gap-1">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center rounded border border-white/10 bg-white/[0.04] font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] ${styles.btn}`}
            >
              <FaGithub className={styles.icon} />
              GitHub
            </a>
          ) : null}
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center rounded bg-violet-600/15 font-semibold text-violet-200 ring-1 ring-violet-500/25 transition hover:bg-violet-600/25 ${styles.btn}`}
            >
              Live
              <HiArrowTopRightOnSquare className={styles.icon} />
            </a>
          ) : (
            <a
              href="#contact"
              className={`inline-flex items-center rounded border border-dashed border-violet-500/20 font-semibold text-lavender-400 transition hover:border-violet-500/35 hover:text-violet-200 ${styles.btn}`}
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
