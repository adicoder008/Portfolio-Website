import React from 'react'

/** layout: wide = panoramic thumb · square = 1:1 thumb */
const ProjectCard = ({ title, description, tech, image, surface, href, layout = 'wide' }) => {
  const isSquare = layout === 'square'
  const hasPhoto = Boolean(image)
  const initial = title.replace(/[^a-zA-Z0-9]/g, '').charAt(0) || '·'

  return (
    <a
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition duration-300 hover:border-sky-300 hover:shadow-lg dark:border-white/[0.08] dark:bg-space-deep/80 dark:shadow-glass dark:hover:border-sky-500/35 dark:hover:shadow-glow"
    >
      <span
        className={`relative block shrink-0 overflow-hidden ${
          isSquare ? 'aspect-square max-h-[200px] sm:max-h-[220px]' : 'aspect-[21/9] max-h-[140px] sm:max-h-[160px]'
        }`}
      >
        {hasPhoto ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="relative h-full w-full"
            style={{ background: surface ?? '#0f172a' }}
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px',
              }}
              aria-hidden
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/25 to-transparent dark:from-space-void/90 dark:via-space-void/25" />
            <span
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-black/20 font-display text-lg font-semibold text-white/90 backdrop-blur-sm"
              aria-hidden
            >
              {initial}
            </span>
          </div>
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-100/20 to-transparent opacity-90 dark:from-space-void dark:via-space-void/30" />
      </span>

      <span className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
        <span className="mb-2 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-600 dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </span>
        <span className="font-display text-base font-semibold leading-snug text-slate-900 transition group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-200 sm:text-lg">
          {title}
        </span>
        <span className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-500 sm:text-sm">
          {description}
        </span>
        <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] font-medium uppercase tracking-wider text-sky-600 transition group-hover:text-sky-700 dark:text-slate-500 dark:group-hover:text-sky-300">
          View
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </span>
    </a>
  )
}

export default ProjectCard
