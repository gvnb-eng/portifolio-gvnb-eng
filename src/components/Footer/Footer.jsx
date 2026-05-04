import styles from './Footer.module.css'

const links = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato',     href: '#contato' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoSub}>Engenharia</span>
        </div>
        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>
          ))}
        </nav>
        <div className={styles.copy}>
          © 2025 Gustavo Vieira Nunes Brito — Engenheiro Mecânico — CREA/DF
        </div>
      </div>
    </footer>
  )
}
