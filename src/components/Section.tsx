import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  /** Section name, shown in the left column (and above the content on narrow screens). */
  title: string
  children: ReactNode
}

/** A page section: a rule across the top, the title in a narrow left column, content on the right. */
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
