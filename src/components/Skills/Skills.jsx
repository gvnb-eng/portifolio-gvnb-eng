import { skillsData } from '../../data/skills'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './Skills.module.css'

export default function Skills() {
  const { language } = useLanguage()
  const data = skillsData[language]

  return (
    <section id="habilidades" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-eyebrow">{data.eyebrow}</div>
          <h2>{data.title}</h2>
          <div className="divider" />
        </div>
        <div className={styles.grid}>
          {data.items.map((skill) => (
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
