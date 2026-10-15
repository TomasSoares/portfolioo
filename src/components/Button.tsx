import type { ReactNode } from 'react'
import { cx } from '../utils/cx'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary' | 'outline'
  href: string
  /** Phosphor icon class string, e.g. "ph ph-envelope-simple". */
  icon?: string
  children: ReactNode
}

/** Link styled as a button: the filled primary action, or the outlined secondary one. */
export default function Button({ variant, href, icon, children }: ButtonProps) {
  return (
    <a className={cx(styles.button, styles[variant])} href={href}>
      {icon && <i className={cx(icon, styles.icon)} aria-hidden="true" />}
      {children}
    </a>
  )
}
