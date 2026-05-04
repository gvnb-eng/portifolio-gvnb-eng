import { heroData } from '../../data/hero'
import Button from '../shared/Button/Button'
import styles from './Hero.module.css'

export default function Hero() {
  const delays = ['0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s']

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroTag} style={{ animationDelay: delays[0] }}>
            {heroData.tag}
          </div>
          <h1 style={{ animationDelay: delays[1] }}>
            {heroData.name.split('\n').map((line, i) => (
              <span key={i}>{line}{i < heroData.name.split('\n').length - 1 && <br />}</span>
            ))}
          </h1>
          <div className={styles.heroSubtitle} style={{ animationDelay: delays[2] }}>
            {heroData.subtitle}
          </div>
          <p className={styles.heroDesc} style={{ animationDelay: delays[3] }}>
            Engenheiro Mecânico pela UnB com <strong>15+ anos</strong> em sistemas HVAC,
            energia solar e gestão de projetos. De data centers a hospitais,
            entrego soluções técnicas com excelência operacional.
          </p>
          <div className={styles.tags} style={{ animationDelay: delays[4] }}>
            {heroData.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div style={{ animationDelay: delays[5] }}>
            <Button href={heroData.cta.href}>{heroData.cta.label}</Button>
          </div>
        </div>
        <div className={styles.heroStat}>{heroData.rotatedStat}</div>
      </div>
    </header>
  )
}
