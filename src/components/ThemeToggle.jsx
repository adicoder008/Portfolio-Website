import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-sky-200 dark:shadow-none dark:hover:bg-white/10"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <HiOutlineSun className="h-5 w-5" aria-hidden /> : <HiOutlineMoon className="h-5 w-5" aria-hidden />}
    </button>
  )
}

export default ThemeToggle
