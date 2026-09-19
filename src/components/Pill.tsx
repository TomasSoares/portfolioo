import type { ReactNode } from 'react'
import { cx } from '../utils/cx'
import styles from './Pill.module.css'

type Variant = 'tag' | 'chip' | 'tech' | 'primary' | 'outline'

interface PillProps {
  /**
   * tag: plain label · chip: Tech stack pill (staggers in on scroll) · tech: small pill inside
   * a project card · primary / outline: filled and outlined link buttons.
   */
  variant: Variant
  /** Button size: `lg` in the hero, `md` elsewhere. Only used by primary / outline. */
  size?: 'md' | 'lg'
  /** Renders an <a> instead of a <span>. */
  href?: string
  /** Icon class string (Phosphor or Devicon). */
  icon?: string
  /** Brand colour for the icon; also marks it for the light-theme tone-down. */
  brand?: string
  children: ReactNode
}

export default function Pill({ variant, size = 'md', href, icon, brand, children }: PillProps) {
  const className = cx(
    styles.pill,
    styles[variant],
    (variant === 'primary' || variant === 'outline') && styles[size],
  )
  const content = (
    <>
      {icon && (
        <i
          className={cx(icon, styles.icon)}
          aria-hidden="true"
          data-brand={brand ? '' : undefined}
          style={brand ? { color: brand } : undefined}
        />
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    )
  }
  return (
    <span className={className} data-chip={variant === 'chip' ? '' : undefined}>
      {content}
    </span>
  )
}
