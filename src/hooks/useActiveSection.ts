import { useEffect, useState, type RefObject } from 'react'

// The active section is the one crossing a line this far below the navbar.
const LINE_OFFSET = 40

/**
 * Returns the id of the section crossing the line `navBottom + 40px`; if none does and the
 * page is scrolled to the bottom, the last section wins. Empty string when nothing is active.
 */
export function useActiveSection(ids: readonly string[], navRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const update = () => {
      const line = (navRef.current?.getBoundingClientRect().bottom ?? 0) + LINE_OFFSET
      let current = ''
      for (const section of sections) {
        const r = section.getBoundingClientRect()
        if (r.top <= line && r.bottom > line) current = section.id
      }
      if (!current) {
        const atEnd = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
        if (atEnd) current = sections[sections.length - 1].id
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, navRef])

  return active
}
