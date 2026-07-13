import { Link, useLocation } from 'react-router-dom'
import styles from './Footer.module.css'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const { pathname } = useLocation()
  const homePrefix = pathname === '/' ? '' : '/'

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoSub}>Engenharia</span>
        </div>
        <nav className={styles.nav} aria-label="Navegacao do rodape">
          {links.map((link) => <a key={link.href} href={`${homePrefix}${link.href}`} className={styles.navLink}>{link.label}</a>)}
          <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
        </nav>
        <div className={styles.copy}>2025 Gustavo Vieira Nunes Brito | Engenheiro Mecanico | CREA/DF</div>
      </div>
    </footer>
  )
}
