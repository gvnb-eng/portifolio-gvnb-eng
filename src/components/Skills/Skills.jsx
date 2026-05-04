import { skills } from '../../data/skills'
import SectionHeader from '../shared/SectionHeader/SectionHeader'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="habilidades">
      <div className="container">
        <SectionHeader label="03 — Habilidades" title="FERRAMENTAS" />
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillLevel}>{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
