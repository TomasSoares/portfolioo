import avatar from '../assets/avatar.jpeg'
import { links } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { prefersReducedMotion } from '../utils/motion'
import Panel from './Panel'
import Pill from './Pill'
import styles from './Hero.module.css'

const HEADLINE = 'Building interfaces for the web, front to back.'

export default function Hero() {
  const { typed, caret } = useTypewriter(HEADLINE, !prefersReducedMotion())

  return (
    <Panel
      id="top"
      padding="clamp(44px, 9vw, 92px) 20px clamp(36px, 6vw, 64px)"
      gap={22}
      centerText
    >
      <div className={styles.avatarWrap} data-reveal="">
        <img className={styles.avatar} src={avatar} alt="Tomás Soares" width={76} height={76} />
        <span className={styles.namePill}>
          <span className={styles.dot} />
          Tomás Soares
        </span>
      </div>
      <h1 className={styles.title} data-reveal="" aria-label={HEADLINE}>
        <span aria-hidden="true">{typed}</span>
        {caret && (
          <span className={styles.caret} aria-hidden="true">
            |
          </span>
        )}
      </h1>
      <p className={styles.lead} data-reveal="">
        FrontEnd Developer in Leiria, Portugal. Currently a Web Developer Trainee at Innovation
        Makers, working remotely, with a Computer Science degree behind me.
      </p>
      <div className={styles.actions} data-reveal="">
        <Pill variant="primary" size="lg" href={links.email} icon="ph ph-envelope-simple">
          Email me
        </Pill>
        <Pill variant="outline" size="lg" href={links.cv} icon="ph ph-arrow-down">
          Download CV
        </Pill>
      </div>
    </Panel>
  )
}
