import { roles } from '../data/portfolio'
import Card from './Card'
import Panel from './Panel'
import SectionHeader from './SectionHeader'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <Panel id="experience" gap={26}>
      <SectionHeader kicker="Experience" title="Where I'm putting the hours." />
      <div className={styles.list}>
        {roles.map((role) => (
          <Card key={`${role.company}-${role.period}`} data-reveal="">
            <div className={styles.meta}>
              <span>{role.period}</span>
              <span className={styles.sep} aria-hidden="true">
                ·
              </span>
              <span>{role.kind}</span>
            </div>
            <h3 className={styles.title}>{role.title}</h3>
            <p className={styles.company}>{role.company}</p>
            <p className={styles.summary}>{role.summary}</p>
          </Card>
        ))}
      </div>
    </Panel>
  )
}
