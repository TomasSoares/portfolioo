import type { TechItem } from '../data/portfolio'
import { cx } from '../utils/cx'
import styles from './TechMark.module.css'

/** A technology's brand-coloured logo followed by its name. */
export default function TechMark({ item, small }: { item: TechItem; small?: boolean }) {
  return (
    <span className={cx(styles.mark, small && styles.small)}>
      <i
        className={cx(item.icon, styles.icon)}
        aria-hidden="true"
        data-brand=""
        style={{ color: item.hex }}
      />
      {item.name}
    </span>
  )
}
