import NavigationLink from '../NavigationLink'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './Footer.module.css'

const content = {
  pt: {
    brand: 'Engenharia',
    navLabel: 'Navegacao do rodape',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Contato', href: '#contato' },
    ],
    portfolio: 'Portfolio',
    profession: 'Engenheiro Mecanico',
  },
  en: {
    brand: 'Engineering',
    navLabel: 'Footer navigation',
    links: [
      { label: 'About', href: '#sobre' },
      { label: 'Experience', href: '#experiencia' },
      { label: 'Skills', href: '#habilidades' },
      { label: 'Contact', href: '#contato' },
    ],
    portfolio: 'Portfolio',
    profession: 'Mechanical Engineer',
  },
}

export default function Footer() {
  const { language } = useLanguage()
  const text = content[language]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoSub}>{text.brand}</span>
        </div>
        <nav className={styles.nav} aria-label={text.navLabel}>
          {text.links.map((link) => <NavigationLink key={link.href} to={`/${link.href}`} className={styles.navLink}>{link.label}</NavigationLink>)}
          <NavigationLink to="/portfolio" className={styles.navLink}>{text.portfolio}</NavigationLink>
        </nav>
        <div className={styles.copy}>2025 Gustavo Vieira Nunes Brito | {text.profession} | CREA/DF</div>
      </div>
    </footer>
  )
}
