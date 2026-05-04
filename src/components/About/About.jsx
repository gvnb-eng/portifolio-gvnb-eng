import { aboutParagraphs, stats } from '../../data/about'
import SectionHeader from '../shared/SectionHeader/SectionHeader'
import styles from './About.module.css'

function highlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return text
  const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'))
  return parts.map((part, i) =>
    highlights.includes(part) ? <strong key={i}>{part}</strong> : part
  )
}

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <SectionHeader label="01 — Sobre" title="QUEM SOU EU" />
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            {aboutParagraphs.map((para, i) => (
              <p key={i}>{highlightText(para.text, para.highlights)}</p>
            ))}
          </div>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
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
