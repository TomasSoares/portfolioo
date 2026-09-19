import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../utils/cx'
import styles from './Panel.module.css'

interface PanelProps {
  as?: 'section' | 'footer'
  id?: string
  /** Max width of the content column in px. */
  maxWidth?: number
  /** CSS `padding` of the content column. Defaults to the shared section padding. */
  padding?: string
  /** Gap in px between the children. */
  gap: number
  centerText?: boolean
  children: ReactNode
}

/** The rounded section shell, with a centred flex column inside. */
export default function Panel({
  as: Tag = 'section',
  id,
  maxWidth = 760,
  padding,
  gap,
  centerText,
  children,
}: PanelProps) {
  const vars = {
    '--max': `${maxWidth}px`,
    '--gap': `${gap}px`,
    ...(padding ? { '--pad': padding } : {}),
  } as CSSProperties

  return (
    <Tag id={id} className={styles.panel}>
      <div className={cx(styles.inner, centerText && styles.center)} style={vars}>
        {children}
      </div>
    </Tag>
  )
}
