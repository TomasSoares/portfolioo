import SectionKicker from './SectionKicker'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  kicker: string
  title: string
}

/** Kicker + h2 block shared by Experience, Tech stack and Projects. */
export default function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <SectionKicker>{kicker}</SectionKicker>
      <h2 className={styles.title} data-reveal="">
        {title}
      </h2>
    </div>
  )
}
