'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState<string>('light')

  React.useEffect(() => {
    setMounted(true)
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const isDark = html.classList.contains('dark')
    const newTheme = isDark ? 'light' : 'dark'

    if (isDark) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }

    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded border border-border bg-card text-foreground hover:bg-secondary transition-colors font-mono text-sm"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '◐ dark' : '◑ light'}
    </button>
  )
}
