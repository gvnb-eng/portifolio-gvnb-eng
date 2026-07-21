import { useEffect, useRef, useState } from 'react'
import { Languages, Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import NavigationLink from '../NavigationLink'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './Navbar.module.css'

const content = {
  pt: {
    navLabel: 'Navegação principal',
    brand: 'Engenharia',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Experiência', href: '#experiencia' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Contato', href: '#contato' },
    ],
    portfolio: 'Portfólio',
    home: 'Início',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    languageLabel: 'Switch to English',
    languageLong: 'English',
    languageShort: 'EN',
  },
  en: {
    navLabel: 'Main navigation',
    brand: 'Engineering',
    links: [
      { label: 'About', href: '#sobre' },
      { label: 'Experience', href: '#experiencia' },
      { label: 'Skills', href: '#habilidades' },
      { label: 'Contact', href: '#contato' },
    ],
    portfolio: 'Portfolio',
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Mudar para português',
    languageLong: 'Português',
    languageShort: 'PT',
  },
}

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const text = content[language]
  const isPortfolio = pathname === '/portfolio'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const onPointerDown = (event) => {
      if (!navbarRef.current?.contains(event.target)) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isMenuOpen])

  return (
    <nav ref={navbarRef} className={styles.navbar} aria-label={text.navLabel}>
      <div className={`container ${styles.inner}`}>
        <NavigationLink to="/" className={styles.logo}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoText}>{text.brand}</span>
        </NavigationLink>
        <ul className={styles.links}>
          {text.links.map((link) => (
            <li key={link.href}>
              <NavigationLink to={`/${link.href}`} className={styles.link}>{link.label}</NavigationLink>
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <button
            className={styles.languageSwitch}
            type="button"
            aria-label={text.languageLabel}
            title={text.languageLabel}
            onClick={toggleLanguage}
          >
            <Languages className={styles.languageIcon} aria-hidden="true" />
            <span className={styles.languageLong}>{text.languageLong}</span>
            <span className={styles.languageShort}>{text.languageShort}</span>
          </button>
          <NavigationLink to={isPortfolio ? '/' : '/portfolio'} className={styles.cta}>
            {isPortfolio ? text.home : text.portfolio}
          </NavigationLink>
          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            type="button"
            aria-label={isMenuOpen ? text.closeMenu : text.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div id="mobile-navigation" className={styles.mobilePanel}>
          <ul className={styles.mobileLinks}>
            {text.links.map((link) => (
              <li key={link.href}>
                <NavigationLink
                  to={`/${link.href}`}
                  className={styles.mobileLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
