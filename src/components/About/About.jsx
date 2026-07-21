import { aboutData } from '../../data/about'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './About.module.css'

function highlightText(text, highlights) {
  if (!highlights?.length) return text
  const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'))
  return parts.map((part, i) =>
    highlights.includes(part) ? <strong key={i}>{part}</strong> : part
  )
}

export default function About() {
  const { language } = useLanguage()
  const data = aboutData[language]

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="section-eyebrow">{data.eyebrow}</div>
            <h2>{data.title}</h2>
            <div className="divider" />
            <div className={styles.text}>
              {data.paragraphs.map((para, i) => (
                <p key={i}>{highlightText(para.text, para.highlights)}</p>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            {data.stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statNum}>{stat.num}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
