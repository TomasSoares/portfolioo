import styles from './IconButton.module.css'

interface IconButtonProps {
  /** Phosphor icon class string, e.g. "ph ph-github-logo". */
  icon: string
  label: string
  /** Renders a link; without it, a <button> that calls `onClick`. */
  href?: string
  onClick?: () => void
}

/** 36×36 icon-only button used in the navbar. */
export default function IconButton({ icon, label, href, onClick }: IconButtonProps) {
  const glyph = <i className={icon} aria-hidden="true" style={{ fontSize: 19 }} />

  if (href) {
    return (
      <a className={styles.button} href={href} aria-label={label} title={label}>
        {glyph}
      </a>
    )
  }
  return (
    <button className={styles.button} type="button" aria-label={label} onClick={onClick}>
      {glyph}
    </button>
  )
}
