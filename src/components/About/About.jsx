import { aboutParagraphs, stats } from '../../data/about'
import styles from './About.module.css'

function highlightText(text, highlights) {
  if (!highlights?.length) return text
  const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'g'))
  return parts.map((part, i) =>
    highlights.includes(part) ? <strong key={i}>{part}</strong> : part
  )
}

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="section-eyebrow">01 — Sobre</div>
            <h2>QUEM SOU EU</h2>
            <div className="divider" />
            <div className={styles.text}>
              {aboutParagraphs.map((para, i) => (
                <p key={i}>{highlightText(para.text, para.highlights)}</p>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            {stats.map((stat) => (
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
