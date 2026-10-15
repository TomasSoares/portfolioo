import Section from './Section'
import styles from './About.module.css'

const facts = ['Computer Science graduate, 2025', 'Works remotely', 'Speaks Portuguese and English']

export default function About() {
  return (
    <Section id="about" title="About">
      <p className={styles.lead}>A developer who came up through the fundamentals.</p>
      <p className={styles.body}>
        I finished my Computer Science degree at the University of Leiria e Oeste in 2025, after
        three internships that taught me early what shipping actually costs. Front end is where I'm
        most at home, from component structure to layout behaviour and the small interaction
        details, but I'm comfortable following a feature back through the API and into the
        database.
      </p>
      <ul className={styles.facts}>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </Section>
  )
}
