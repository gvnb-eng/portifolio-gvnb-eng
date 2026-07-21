import { experienceData } from '../../data/experience'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './Experience.module.css'

export default function Experience() {
  const { language } = useLanguage()
  const data = experienceData[language]

  return (
    <section id="experiencia" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-eyebrow">{data.eyebrow}</div>
          <h2 className="light">{data.title}</h2>
          <div className={`divider ${styles.dividerGold}`} />
          <p className={styles.subtitle}>
            {data.subtitle}
          </p>
        </div>
        <div className={styles.grid}>
          {data.items.map((exp, i) => (
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
