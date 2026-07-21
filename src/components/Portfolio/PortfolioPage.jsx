import { useEffect, useState } from 'react'
import NavigationLink from '../NavigationLink'
import { useLanguage } from '../../i18n/LanguageContext'
import { portfolioCasesByLanguage } from '../../data/portfolio'
import styles from './PortfolioPage.module.css'

const pageCopy = {
  pt: {
    kicker: 'PORTFOLIO | 2012-2024',
    title: ['ENGENHARIA', 'EM CAMPO'],
    description: 'Uma selecao cronologica de vivencias em obra, manutencao, vistoria, ambiente critico e levantamento tecnico em AVAC.',
    back: 'Voltar para a apresentacao',
    timelineAria: 'Trajetoria profissional em imagens',
    timelineLabel: 'TRAJETORIA VISUAL',
    context: 'Contexto',
    activity: 'Atuacao',
    evidence: 'Evidencia',
    imageAlt: (project, index) => `${project}: evidencia de campo ${index + 1}`,
    dialogLabel: (project) => `Foto de ${project}`,
    close: 'Fechar foto',
  },
  en: {
    kicker: 'PORTFOLIO | 2012-2024',
    title: ['ENGINEERING', 'IN THE FIELD'],
    description: 'A chronological selection of experience in construction, maintenance, inspections, critical environments and HVAC field surveys.',
    back: 'Back to profile',
    timelineAria: 'Professional journey in images',
    timelineLabel: 'VISUAL TIMELINE',
    context: 'Context',
    activity: 'Role',
    evidence: 'Evidence',
    imageAlt: (project, index) => `${project}: field evidence ${index + 1}`,
    dialogLabel: (project) => `Photo from ${project}`,
    close: 'Close photo',
  },
}

export default function PortfolioPage() {
  const { language } = useLanguage()
  const [activeImage, setActiveImage] = useState(null)
  const copy = pageCopy[language]
  const portfolioCases = portfolioCasesByLanguage[language]

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
          <div className={styles.kicker}>{copy.kicker}</div>
          <h1>{copy.title[0]}<br />{copy.title[1]}</h1>
          <p>{copy.description}</p>
          <NavigationLink className={styles.backLink} to="/">{copy.back}</NavigationLink>
        </div>
      </header>

      <section className={styles.timeline} aria-label={copy.timelineAria}>
        <div className={`container ${styles.timelineInner}`}>
          <div className={styles.timelineLabel}>{copy.timelineLabel}</div>
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
                  <p><strong>{copy.context}</strong>{entry.context}</p>
                  <p><strong>{copy.activity}</strong>{entry.activity}</p>
                  <p><strong>{copy.evidence}</strong>{entry.evidence}</p>
                </div>
                <div className={styles.gallery}>
                  {entry.images.map((image, imageIndex) => (
                    <button
                      className={`${styles.photoButton} ${imageIndex === 0 ? styles.featuredPhoto : ''}`}
                      key={image}
                      onClick={() => setActiveImage({ image, entry, imageIndex })}
                      type="button"
                    >
                      <img src={image} alt={copy.imageAlt(entry.project, imageIndex)} loading={index < 2 && imageIndex < 2 ? 'eager' : 'lazy'} />
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
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={copy.dialogLabel(activeImage.entry.project)} onClick={() => setActiveImage(null)}>
          <button className={styles.closeButton} type="button" aria-label={copy.close} onClick={() => setActiveImage(null)}>x</button>
          <figure className={styles.lightboxFigure} onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={copy.imageAlt(activeImage.entry.project, activeImage.imageIndex)} />
            <figcaption>{activeImage.entry.period} | {activeImage.entry.company} | {activeImage.entry.project}</figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
