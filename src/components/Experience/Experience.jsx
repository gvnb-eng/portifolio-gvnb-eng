import { experiences } from '../../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-eyebrow">02 — Experiência</div>
          <h2 className="light">TRAJETÓRIA</h2>
          <div className={`divider ${styles.dividerGold}`} />
          <p className={styles.subtitle}>
            Mais de 15 anos construindo soluções técnicas de alto padrão em HVAC,
            energia solar e gestão de projetos no Brasil e nos EUA.
          </p>
        </div>
        <div className={styles.grid}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardDate}>{exp.date}</div>
              <div className={styles.cardRole}>{exp.role}</div>
              <div className={styles.cardCompany}>{exp.company}</div>
              <div className={styles.cardDesc}>{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
