import { skills } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-eyebrow">03 — Habilidades</div>
          <h2>FERRAMENTAS & EXPERTISE</h2>
          <div className="divider" />
        </div>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{skill.icon}</span>
              </div>
              <div className={styles.name}>{skill.name}</div>
              <div className={styles.level}>{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
