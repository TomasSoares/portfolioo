import { useRef, type MouseEvent } from 'react'
import { links, navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { useTheme } from '../hooks/useTheme'
import { cx } from '../utils/cx'
import IconButton from './IconButton'
import styles from './Navbar.module.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const active = useActiveSection(sectionIds, navRef)
  const { scrollToId, scrollToTop } = useSmoothScroll(navRef)
  const { theme, toggle } = useTheme()

  const goTo = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <header ref={navRef} className={styles.nav}>
      <div className={styles.inner}>
        <a
          className={styles.name}
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
        >
          Tomás Soares
        </a>
        <nav className={styles.links} aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={cx(styles.link, active === link.id && styles.active)}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={goTo(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <IconButton icon="ph ph-envelope-simple" label="Email" href={links.email} />
          <IconButton icon="ph ph-linkedin-logo" label="LinkedIn" href={links.linkedin} />
          <IconButton icon="ph ph-github-logo" label="GitHub" href={links.github} />
          <IconButton
            icon={theme === 'light' ? 'ph ph-moon' : 'ph ph-sun'}
            label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            onClick={toggle}
          />
        </div>
      </div>
    </header>
  )
}
