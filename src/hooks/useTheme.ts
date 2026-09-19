import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

type Theme = 'dark' | 'light'

// Keep in sync with the inline anti-flash script in index.html.
const STORAGE_KEY = 'ts-mono-theme'
const THEMING_MS = 520

function readSavedTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readSavedTheme)
  const timer = useRef<number | undefined>(undefined)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    const root = document.documentElement
    // `theming` gives every element a colour transition for the cross-fade.
    root.classList.add('theming')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => root.classList.remove('theming'), THEMING_MS)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable: the theme just won't persist.
    }
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}
