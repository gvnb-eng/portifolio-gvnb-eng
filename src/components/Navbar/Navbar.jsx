import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import NavigationLink from '../NavigationLink'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const { pathname, hash } = useLocation()
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
    <nav ref={navbarRef} className={styles.navbar} aria-label="Navegacao principal">
      <div className={`container ${styles.inner}`}>
        <NavigationLink to="/" className={styles.logo}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoText}>Engenharia</span>
        </NavigationLink>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <NavigationLink to={`/${link.href}`} className={styles.link}>{link.label}</NavigationLink>
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <NavigationLink to={isPortfolio ? '/' : '/portfolio'} className={styles.cta}>
            {isPortfolio ? 'Inicio' : 'Portfolio'}
          </NavigationLink>
          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
            {links.map((link) => (
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
