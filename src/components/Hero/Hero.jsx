import { heroData } from '../../data/hero'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>Engenheiro Mecânico · UnB · CREA/DF</div>
          <h1>
            {heroData.name.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <div className={styles.subtitle}>{heroData.subtitle}</div>
          <p className={styles.desc}>
            {heroData.description}
          </p>
          <div className={styles.actions}>
            <a href="#contato" className={styles.btnPrimary}>Solicitar Orçamento</a>
            <a href="#sobre" className={styles.btnOutline}>Conheça o Trabalho</a>
          </div>
        </div>
        <div className={styles.badges}>
          {heroData.tags.map((tag) => (
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
