import { useCallback, useEffect, useRef, type RefObject } from 'react'

const MIN_MS = 420
const MAX_MS = 900
// Gap left between the sticky navbar and the top of the target section.
const NAV_GAP = 18

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export function useSmoothScroll(navRef: RefObject<HTMLElement | null>) {
  const raf = useRef(0)

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const animateTo = useCallback((end: number) => {
    const start = window.scrollY
    const distance = end - start
    if (distance === 0) return

    const duration = Math.min(MAX_MS, Math.max(MIN_MS, Math.abs(distance) * 0.5))
    const t0 = performance.now()
    cancelAnimationFrame(raf.current)

    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      // `instant`: html has `scroll-behavior: smooth`, which would otherwise smooth every frame again.
      window.scrollTo({ top: start + distance * easeInOutCubic(p), behavior: 'instant' })
      if (p < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
  }, [])

  const scrollToTop = useCallback(() => animateTo(0), [animateTo])

  const scrollToId = useCallback(
    (id: string) => {
      const target = document.getElementById(id)
      if (!target) return
      const navHeight = (navRef.current?.getBoundingClientRect().height ?? 0) + NAV_GAP
      animateTo(target.getBoundingClientRect().top + window.scrollY - navHeight)
    },
    [animateTo, navRef],
  )

  return { scrollToId, scrollToTop }
}
