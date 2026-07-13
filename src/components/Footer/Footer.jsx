import NavigationLink from '../NavigationLink'
import styles from './Footer.module.css'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoSub}>Engenharia</span>
        </div>
        <nav className={styles.nav} aria-label="Navegacao do rodape">
          {links.map((link) => <NavigationLink key={link.href} to={`/${link.href}`} className={styles.navLink}>{link.label}</NavigationLink>)}
          <NavigationLink to="/portfolio" className={styles.navLink}>Portfolio</NavigationLink>
        </nav>
        <div className={styles.copy}>2025 Gustavo Vieira Nunes Brito | Engenheiro Mecanico | CREA/DF</div>
      </div>
    </footer>
  )
}
