import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
  { label: 'Portfolio', href: '/portfolio' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const homePrefix = pathname === '/' ? '' : '/'

  return (
    <nav className={styles.navbar} aria-label="Navegacao principal">
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoText}>Engenharia</span>
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              {link.href === '/portfolio' ? (
                <Link to={link.href} className={styles.link}>{link.label}</Link>
              ) : (
                <a href={`${homePrefix}${link.href}`} className={styles.link}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
        <a href={`${homePrefix}#contato`} className={`${styles.cta} ${styles.desktopCta}`}>Fale Conosco</a>
        {pathname === '/portfolio' ? (
          <a href="/#contato" className={`${styles.cta} ${styles.mobileCta}`}>Contato</a>
        ) : (
          <Link to="/portfolio" className={`${styles.cta} ${styles.mobileCta}`}>Portfolio</Link>
        )}
      </div>
    </nav>
  )
}
