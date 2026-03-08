'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      themes={THEMES.map(t => t.id)}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

const THEMES = [
  { id: 'light', name: 'solarized-light' },
  { id: 'dark', name: 'solarized-dark' },
  { id: 'dracula', name: 'dracula' },
  { id: 'monokai', name: 'monokai' },
  { id: 'nord', name: 'nord' },
  { id: 'tokyo-night', name: 'tokyo-night' },
]

export function ThemeSelector() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 font-mono text-sm bg-card border border-border px-2 py-1 rounded">
      <label htmlFor="theme-select" className="text-muted-foreground mr-1">
        theme:
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-transparent border-none outline-none cursor-pointer focus:ring-0 text-foreground"
      >
        {THEMES.map((t) => (
          <option key={t.id} value={t.id} className="bg-card text-foreground">
            {t.name}
          </option>
        ))}
      </select>
    </div>
  )
}
