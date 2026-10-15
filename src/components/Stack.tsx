import { stackGroups } from '../data/portfolio'
import Section from './Section'
import TechMark from './TechMark'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <dl className={styles.groups}>
        {stackGroups.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt className={styles.label}>{group.label}</dt>
            <dd>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <TechMark item={item} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
