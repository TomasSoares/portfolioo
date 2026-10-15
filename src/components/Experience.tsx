import { roles } from '../data/portfolio'
import Section from './Section'
import styles from './Experience.module.css'

/** Roles as a timeline, newest first: the period sits in its own column because order matters here. */
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className={styles.timeline}>
        {roles.map((role) => (
          <li key={`${role.company}-${role.period}`} className={styles.role}>
            <p className={styles.period}>{role.period}</p>
            <div className={styles.details}>
              <h3 className={styles.title}>{role.title}</h3>
              <p className={styles.company}>{role.company}</p>
              <p className={styles.kind}>{role.kind}</p>
              <p className={styles.summary}>{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
