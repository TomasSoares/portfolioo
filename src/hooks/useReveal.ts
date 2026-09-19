import { useLayoutEffect } from 'react'
import { prefersReducedMotion } from '../utils/motion'

const REVEAL_STAGGER_S = 0.06
const CHIP_STAGGER_MS = 40

/**
 * Scroll reveals for every `[data-reveal]` and `[data-chip]` in the document. The attribute
 * value is the state: "" (untouched) -> "hidden" (set before paint) -> "shown". The visuals
 * live in global.css. Skipped entirely under `prefers-reduced-motion`, so nothing stays hidden.
 */
export function useReveal() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return

    const cleanups: (() => void)[] = []

    // Elements fade/rise in with a delay that cycles 0, 60, 120, 180ms by document order.
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    reveals.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${(i % 4) * REVEAL_STAGGER_S}s`)
      if (el.dataset.reveal === '') el.dataset.reveal = 'hidden'
    })
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          ;(entry.target as HTMLElement).dataset.reveal = 'shown'
          revealIO.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    reveals.forEach((el) => {
      if (el.dataset.reveal === 'hidden') revealIO.observe(el)
    })
    cleanups.push(() => revealIO.disconnect())

    // Chips appear together per row, 40ms apart, as soon as any chip of the row is in view.
    const chips = Array.from(document.querySelectorAll<HTMLElement>('[data-chip]'))
    chips.forEach((el) => {
      if (el.dataset.chip === '') el.dataset.chip = 'hidden'
    })
    const timers: number[] = []
    const chipIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const row = entry.target.parentElement
          if (!row) continue
          Array.from(row.children).forEach((chip, i) => {
            chipIO.unobserve(chip)
            timers.push(
              window.setTimeout(() => {
                ;(chip as HTMLElement).dataset.chip = 'shown'
              }, i * CHIP_STAGGER_MS),
            )
          })
        }
      },
      { threshold: 0.2 },
    )
    chips.forEach((el) => {
      if (el.dataset.chip === 'hidden') chipIO.observe(el)
    })
    cleanups.push(() => {
      chipIO.disconnect()
      timers.forEach((t) => window.clearTimeout(t))
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])
}
