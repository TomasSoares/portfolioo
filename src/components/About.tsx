import Panel from './Panel'
import Pill from './Pill'
import SectionKicker from './SectionKicker'
import styles from './About.module.css'

const tags = ['CS Graduate', 'Remote', 'Portuguese / English']

export default function About() {
  return (
    <Panel id="about" gap={18} centerText>
      <SectionKicker>About</SectionKicker>
      <h2 className={styles.title} data-reveal="">
        A developer who came up through the fundamentals.
      </h2>
      <p className={styles.body} data-reveal="">
        I finished my Computer Science degree at the University of Leiria e Oeste in 2025, after
        three internships that taught me early what shipping actually costs. Front end is where I'm
        most at home, from component structure to layout behaviour and the small interaction
        details, but I'm comfortable following a feature back through the API and into the
        database.
      </p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Pill key={tag} variant="tag">
            {tag}
          </Pill>
        ))}
      </div>
    </Panel>
  )
}
