import { stackGroups } from '../data/portfolio'
import Panel from './Panel'
import Pill from './Pill'
import SectionHeader from './SectionHeader'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <Panel id="stack" maxWidth={820} gap={30}>
      <SectionHeader kicker="Tech stack" title="The day-to-day toolkit." />
      {stackGroups.map((group) => (
        <div key={group.label} className={styles.group} data-reveal="">
          <span className={styles.label}>{group.label}</span>
          <div className={styles.row}>
            {group.items.map((item) => (
              <Pill key={item.name} variant="chip" icon={item.icon} brand={item.hex}>
                {item.name}
              </Pill>
            ))}
          </div>
        </div>
      ))}
    </Panel>
  )
}
