import { links, projects } from '../data/portfolio'
import Section from './Section'
import TechMark from './TechMark'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.name} className={styles.project}>
            {project.image && (
              <div className={styles.media}>
                <img src={project.image} alt={`Screenshot of ${project.name}`} />
              </div>
            )}
            <div className={styles.head}>
              <h3 className={styles.name}>{project.name}</h3>
              <a className={styles.link} href={project.href}>
                {project.linkKind === 'site' ? (
                  <>
                    <i className={`ph ph-globe-simple ${styles.icon}`} aria-hidden="true" />
                    <span className={styles.label}>Visit site</span>
                  </>
                ) : (
                  <>
                    <i className={`ph ph-github-logo ${styles.icon}`} aria-hidden="true" />
                    <span className={styles.label}>View on GitHub</span>
                  </>
                )}
              </a>
            </div>
            <p className={styles.blurb}>{project.blurb}</p>
            <ul className={styles.stack} aria-label="Built with">
              {project.stack.map((tech) => (
                <li key={tech.name}>
                  <TechMark item={tech} small />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <a className={styles.more} href={links.github}>
        <i className={`ph ph-github-logo ${styles.icon}`} aria-hidden="true" />
        <span className={styles.label}>See everything on GitHub</span>
      </a>
    </Section>
  )
}
