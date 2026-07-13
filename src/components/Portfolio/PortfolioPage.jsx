import { useEffect, useState } from 'react'
import NavigationLink from '../NavigationLink'
import { portfolioCases } from '../../data/portfolio'
import styles from './PortfolioPage.module.css'

export default function PortfolioPage() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <div className={styles.kicker}>PORTFOLIO | 2012-2024</div>
          <h1>ENGENHARIA<br />EM CAMPO</h1>
          <p>Uma selecao cronologica de vivencias em obra, manutencao, vistoria, ambiente critico e levantamento tecnico em AVAC.</p>
          <NavigationLink className={styles.backLink} to="/">Voltar para a apresentacao</NavigationLink>
        </div>
      </header>

      <section className={styles.timeline} aria-label="Trajetoria profissional em imagens">
        <div className={`container ${styles.timelineInner}`}>
          <div className={styles.timelineLabel}>TRAJETORIA VISUAL</div>
          {portfolioCases.map((entry, index) => (
            <article className={styles.caseStudy} key={entry.id}>
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.dot} />
                {index < portfolioCases.length - 1 && <span className={styles.line} />}
              </div>
              <div className={styles.caseContent}>
                <div className={styles.caseMeta}>
                  <span>{entry.period}</span>
                  <span>{entry.company}</span>
                </div>
                <h2>{entry.project}</h2>
                <p className={styles.role}>{entry.role}</p>
                <div className={styles.copyGrid}>
                  <p><strong>Contexto</strong>{entry.context}</p>
                  <p><strong>Atuacao</strong>{entry.activity}</p>
                  <p><strong>Evidencia</strong>{entry.evidence}</p>
                </div>
                <div className={styles.gallery}>
                  {entry.images.map((image, imageIndex) => (
                    <button
                      className={`${styles.photoButton} ${imageIndex === 0 ? styles.featuredPhoto : ''}`}
                      key={image}
                      onClick={() => setActiveImage({ image, entry, imageIndex })}
                      type="button"
                    >
                      <img src={image} alt={`${entry.project}: evidencia de campo ${imageIndex + 1}`} loading={index < 2 && imageIndex < 2 ? 'eager' : 'lazy'} />
                      <span>{String(imageIndex + 1).padStart(2, '0')}</span>
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeImage && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`Foto de ${activeImage.entry.project}`} onClick={() => setActiveImage(null)}>
          <button className={styles.closeButton} type="button" aria-label="Fechar foto" onClick={() => setActiveImage(null)}>x</button>
          <figure className={styles.lightboxFigure} onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={`${activeImage.entry.project}: evidencia de campo ${activeImage.imageIndex + 1}`} />
            <figcaption>{activeImage.entry.period} | {activeImage.entry.company} | {activeImage.entry.project}</figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
