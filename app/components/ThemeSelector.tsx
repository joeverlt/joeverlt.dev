'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

const ThemeSelector = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <RiSunFill className="h-5 w-5 text-slate-50" />
      ) : (
        <RiMoonFill className="h-5 w-5 text-slate-800" />
      )}
    </button>
  )
}

export default ThemeSelector
