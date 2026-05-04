import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato',     href: '#contato' },
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>GVNB</span>
          <span className={styles.logoText}>Engenharia</span>
        </a>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contato" className={styles.cta}>Fale Conosco</a>
      </div>
    </nav>
  )
}
