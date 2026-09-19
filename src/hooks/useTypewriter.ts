import { useEffect, useState } from 'react'

const START_DELAY_MS = 420
const CHAR_MS = 26
const CARET_LINGER_MS = 900

/**
 * Types `text` one character at a time. With `enabled` false the full text is returned at once
 * and the caret never shows.
 */
export function useTypewriter(text: string, enabled: boolean) {
  const [count, setCount] = useState(enabled ? 0 : text.length)
  const [caret, setCaret] = useState(enabled)

  useEffect(() => {
    if (!enabled) return

    let i = 0
    let timer: number
    const tick = () => {
      setCount(i)
      i += 1
      if (i <= text.length) timer = window.setTimeout(tick, CHAR_MS)
      else timer = window.setTimeout(() => setCaret(false), CARET_LINGER_MS)
    }
    timer = window.setTimeout(tick, START_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [text, enabled])

  return { typed: text.slice(0, count), caret }
}
