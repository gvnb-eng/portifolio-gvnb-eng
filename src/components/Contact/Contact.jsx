import { contactData } from '../../data/contact'
import SectionHeader from '../shared/SectionHeader/SectionHeader'
import Button from '../shared/Button/Button'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <SectionHeader label="04 — Contato" title="VAMOS TRABALHAR" />
        <div className={styles.contactBox}>
          <p>{contactData.description}</p>
          <Button href={contactData.cta.href}>{contactData.cta.label}</Button>
          <div className={styles.contactLinks}>
            {contactData.links.map((link) => (
              <a key={link.label} href={link.href} className={styles.contactLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
