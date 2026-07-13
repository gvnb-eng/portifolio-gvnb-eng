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
  const { pathname } = useLocation()
  const isPortfolio = pathname === '/portfolio'

  return (
    <nav className={styles.navbar} aria-label="Navegacao principal">
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
        <NavigationLink to={isPortfolio ? '/' : '/portfolio'} className={styles.cta}>
          {isPortfolio ? 'Inicio' : 'Portfolio'}
        </NavigationLink>
      </div>
    </nav>
  )
}
