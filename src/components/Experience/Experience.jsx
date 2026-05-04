import { experiences } from '../../data/experience'
import SectionHeader from '../shared/SectionHeader/SectionHeader'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <SectionHeader label="02 — Experiência" title="TRAJETÓRIA" />
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDate}>{exp.date}</div>
              <div className={styles.timelineRole}>{exp.role}</div>
              <div className={styles.timelineCompany}>{exp.company}</div>
              <div className={styles.timelineDesc}>{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
