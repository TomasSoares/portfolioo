import { links } from '../data/portfolio'
import Panel from './Panel'
import Pill from './Pill'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <Panel as="footer" padding="clamp(40px, 7vw, 72px) 20px" gap={20} centerText>
      <h2 className={styles.title} data-reveal="">
        Tell me about what you're building.
      </h2>
      <div className={styles.actions}>
        <Pill variant="primary" href={links.email} icon="ph ph-envelope-simple">
          Email me
        </Pill>
        <Pill variant="outline" href={links.linkedin} icon="ph ph-linkedin-logo">
          LinkedIn
        </Pill>
        <Pill variant="outline" href={links.github} icon="ph ph-github-logo">
          GitHub
        </Pill>
      </div>
      <p className={styles.copy}>© 2026 Tomás Soares, Leiria, Portugal</p>
    </Panel>
  )
}
