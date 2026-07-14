import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import NavigationLink from '../NavigationLink'
import { portfolioCases } from '../../data/portfolio'
import styles from './PortfolioPage.module.css'

function PhotoButton({ entry, image, imageIndex, featured = false, onOpen }) {
  return (
    <button
      className={`${styles.photoButton} ${featured ? styles.featuredPhoto : ''}`}
      onClick={(event) => onOpen(event.currentTarget, imageIndex)}
      type="button"
      aria-label={`Ampliar imagem ${image.sequence} de ${entry.project}: ${image.caption}`}
    >
      <span className={styles.photoViewport}>
        <img
          src={image.src}
          alt={`${entry.project}: ${image.caption}`}
          loading={featured ? 'eager' : 'lazy'}
        />
        <span className={styles.photoNumber}>{String(image.sequence).padStart(2, '0')}</span>
      </span>
      <span className={styles.photoCaption}>
        <span>{image.dateLabel}</span>
        {image.caption}
      </span>
    </button>
  )
}

function CaseStudy({ entry, caseIndex, onOpen }) {
  const articleRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const article = articleRef.current
    if (!article || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([result]) => {
        if (result.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(article)
    return () => observer.disconnect()
  }, [])

  const featuredIndex = entry.images.findIndex((image) => image.sequence === entry.featuredSequence)
  const featuredImage = entry.images[featuredIndex]
  const sequenceImages = entry.images.filter((_, imageIndex) => imageIndex !== featuredIndex)

  return (
    <article
      ref={articleRef}
      id={entry.id}
      className={`${styles.caseStudy} ${isVisible ? styles.caseVisible : ''}`}
    >
      <header className={styles.caseHeader}>
        <div className={styles.caseNumber}>{String(caseIndex + 1).padStart(2, '0')}</div>
        <div>
          <div className={styles.caseMeta}>
            <span>{entry.period}</span>
            <span>{entry.company}</span>
          </div>
          <h2>{entry.project}</h2>
          <p className={styles.role}>{entry.role}</p>
        </div>
      </header>

      <div className={`${styles.caseLead} ${caseIndex % 2 ? styles.caseLeadReverse : ''}`}>
        <PhotoButton
          entry={entry}
          image={featuredImage}
          imageIndex={featuredIndex}
          featured
          onOpen={(trigger, imageIndex) => onOpen(trigger, caseIndex, imageIndex)}
        />
        <div className={styles.caseNarrative}>
          <div className={styles.dateRange}>{entry.dateRange}</div>
          <p><strong>Contexto</strong>{entry.context}</p>
          <p><strong>Atuação</strong>{entry.activity}</p>
          <p><strong>Evidência</strong>{entry.evidence}</p>
        </div>
      </div>

      <div className={`${styles.photoBoard} ${styles[entry.layout]}`}>
        {sequenceImages.map((image) => {
          const imageIndex = entry.images.indexOf(image)
          return (
            <PhotoButton
              entry={entry}
              image={image}
              imageIndex={imageIndex}
              key={image.src}
              onOpen={(trigger, selectedIndex) => onOpen(trigger, caseIndex, selectedIndex)}
            />
          )
        })}
      </div>
    </article>
  )
}

export default function PortfolioPage() {
  const [activeImage, setActiveImage] = useState(null)
  const lastTriggerRef = useRef(null)
  const closeButtonRef = useRef(null)
  const isLightboxOpen = activeImage !== null

  const closeLightbox = useCallback(() => {
    setActiveImage(null)
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus())
  }, [])

  const moveImage = useCallback((direction) => {
    setActiveImage((current) => {
      if (!current) return current
      const imageCount = portfolioCases[current.caseIndex].images.length
      return {
        ...current,
        imageIndex: (current.imageIndex + direction + imageCount) % imageCount,
      }
    })
  }, [])

  const openImage = (trigger, caseIndex, imageIndex) => {
    lastTriggerRef.current = trigger
    setActiveImage({ caseIndex, imageIndex })
  }

  useEffect(() => {
    if (!isLightboxOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') moveImage(-1)
      if (event.key === 'ArrowRight') moveImage(1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [closeLightbox, isLightboxOpen, moveImage])

  const activeEntry = activeImage ? portfolioCases[activeImage.caseIndex] : null
  const activePhoto = activeEntry ? activeEntry.images[activeImage.imageIndex] : null

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <div className={styles.introCopy}>
            <div className={styles.kicker}>PORTFÓLIO | 2012-2024</div>
            <h1>ENGENHARIA<br />EM CAMPO</h1>
            <p>Uma trajetória visual de instalações, manutenção, vistoria, ambiente crítico e levantamento técnico em AVAC.</p>
            <NavigationLink className={styles.backLink} to="/">Voltar para a apresentação</NavigationLink>
          </div>
          <div className={styles.yearTrail} aria-label="Períodos apresentados">
            {portfolioCases.map((entry) => <span key={entry.id}>{entry.period}</span>)}
          </div>
        </div>
      </header>

      <section className={styles.portfolioBody} aria-label="Trajetória profissional em imagens">
        <div className={`container ${styles.portfolioShell}`}>
          <nav className={styles.chapterIndex} aria-label="Índice cronológico do portfólio">
            <div className={styles.chapterTitle}>TRAJETÓRIA VISUAL</div>
            <div className={styles.chapterLinks}>
              {portfolioCases.map((entry, index) => (
                <NavigationLink key={entry.id} to={`/portfolio#${entry.id}`} className={styles.chapterLink}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{entry.period}</strong>
                  <small>{entry.project}</small>
                </NavigationLink>
              ))}
            </div>
          </nav>

          <div className={styles.cases}>
            {portfolioCases.map((entry, caseIndex) => (
              <CaseStudy entry={entry} caseIndex={caseIndex} key={entry.id} onOpen={openImage} />
            ))}
          </div>
        </div>
      </section>

      {activeEntry && activePhoto && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto de ${activeEntry.project}`}
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            type="button"
            aria-label="Fechar foto"
            onClick={closeLightbox}
          >
            <X aria-hidden="true" />
          </button>
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <button className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} type="button" aria-label="Foto anterior" onClick={() => moveImage(-1)}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <figure className={styles.lightboxFigure}>
              <img src={activePhoto.src} alt={`${activeEntry.project}: ${activePhoto.caption}`} />
              <figcaption aria-live="polite">
                <span>{activePhoto.dateLabel} | {activeEntry.company}</span>
                <strong>{activePhoto.caption}</strong>
                <small>Imagem {activeImage.imageIndex + 1} de {activeEntry.images.length}</small>
              </figcaption>
            </figure>
            <button className={`${styles.lightboxArrow} ${styles.lightboxNext}`} type="button" aria-label="Próxima foto" onClick={() => moveImage(1)}>
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
