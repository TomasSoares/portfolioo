import avatar from '../assets/avatar.jpeg'
import { links } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { prefersReducedMotion } from '../utils/motion'
import Button from './Button'
import styles from './Hero.module.css'

const FIRST = 'Tomás'
const LAST = 'Soares'
const NAME = `${FIRST} ${LAST}`

export default function Hero() {
  const { typed, caret } = useTypewriter(NAME, !prefersReducedMotion())
  const typedFirst = typed.slice(0, FIRST.length)
  const typedLast = typed.slice(FIRST.length + 1)

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      {/*
       * The full name is laid out invisibly underneath so the typed copy on top never
       * shifts the page while it grows. Screen readers get the name once, from aria-label.
       */}
      <h1 className={styles.name} aria-label={NAME}>
        <span className={styles.ghost} aria-hidden="true">
          {FIRST}
          <br />
          {LAST}
        </span>
        <span className={styles.typed} aria-hidden="true">
          {typedFirst}
          {typed.length > FIRST.length && <br />}
          {typedLast}
          {caret && <span className={styles.caret}>_</span>}
        </span>
      </h1>

      <div className={styles.intro}>
        <img className={styles.avatar} src={avatar} alt="" width={64} height={64} />
        <div className={styles.text}>
          <p className={styles.lead}>Building interfaces for the web, front to back.</p>
          <p className={styles.sub}>
            Front-end focused developer in Leiria, Portugal. Currently a Web Developer Trainee at
            Innovation Makers, working remotely, with a Computer Science degree behind me.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" href={links.email} icon="ph ph-envelope-simple">
              Email me
            </Button>
            <Button variant="outline" href={links.cv} icon="ph ph-file-arrow-down">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
