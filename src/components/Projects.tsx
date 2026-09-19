import { links, projects } from '../data/portfolio'
import Card from './Card'
import Panel from './Panel'
import Pill from './Pill'
import SectionHeader from './SectionHeader'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <Panel id="projects" gap={26}>
      <SectionHeader kicker="Projects" title="Things I've built." />
      <div className={styles.list}>
        {projects.map((project) => (
          <Card key={project.name} className={styles.card} data-reveal="">
            {project.image && (
              <div className={styles.media}>
                <img src={project.image} alt={project.name} />
              </div>
            )}
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.blurb}>{project.blurb}</p>
            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <Pill key={tech.name} variant="tech" icon={tech.icon} brand={tech.hex}>
                  {tech.name}
                </Pill>
              ))}
            </div>
            <a className={styles.link} href={project.href}>
              <i className="ph ph-github-logo" aria-hidden="true" />
              View on GitHub
            </a>
          </Card>
        ))}
      </div>
      <Pill variant="outline" href={links.github} icon="ph ph-github-logo">
        See everything on GitHub
      </Pill>
    </Panel>
  )
}
