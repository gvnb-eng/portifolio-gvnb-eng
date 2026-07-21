import NavigationLink from '../NavigationLink'
import { heroData } from '../../data/hero'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { language } = useLanguage()
  const data = heroData[language]

  return (
    <header className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>{data.eyebrow}</div>
          <h1>
            {data.name.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <div className={styles.subtitle}>{data.subtitle}</div>
          <p className={styles.desc}>
            {data.description}
          </p>
          <div className={styles.actions}>
            <NavigationLink to="/#contato" className={styles.btnPrimary}>{data.primaryAction}</NavigationLink>
            <NavigationLink to="/#sobre" className={styles.btnOutline}>{data.secondaryAction}</NavigationLink>
          </div>
        </div>
        <div className={styles.badges}>
          {data.tags.map((tag) => (
            <span key={tag} className={styles.badge}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>↓</span>
      </div>
    </header>
  )
}
