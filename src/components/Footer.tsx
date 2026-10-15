import { links } from '../data/portfolio'
import Button from './Button'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Tell me about what you're building.</h2>
        <div className={styles.actions}>
          <Button variant="primary" href={links.email} icon="ph ph-envelope-simple">
            Email me
          </Button>
          <Button variant="outline" href={links.linkedin} icon="ph ph-linkedin-logo">
            LinkedIn
          </Button>
          <Button variant="outline" href={links.github} icon="ph ph-github-logo">
            GitHub
          </Button>
        </div>
        <p className={styles.copy}>© 2026 Tomás Soares, Leiria, Portugal</p>
      </div>
    </footer>
  )
}
