import styles from './SectionKicker.module.css'

export default function SectionKicker({ children }: { children: string }) {
  return <span className={styles.kicker}>{children}</span>
}
