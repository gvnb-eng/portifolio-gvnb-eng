import { contactData } from '../../data/contact'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className="section-eyebrow">04 — Contato</div>
            <h2>VAMOS TRABALHAR JUNTOS</h2>
            <div className="divider" />
            <p className={styles.desc}>{contactData.description}</p>
            <div className={styles.links}>
              {contactData.links.map((link) => (
                <a key={link.label} href={link.href} className={styles.link}>
                  <span className={styles.linkDot} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Nome</label>
                  <input className={styles.input} type="text" placeholder="Seu nome" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>E-mail</label>
                  <input className={styles.input} type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Assunto</label>
                <input className={styles.input} type="text" placeholder="Projeto HVAC, consultoria..." />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Mensagem</label>
                <textarea className={styles.textarea} rows={5} placeholder="Descreva o projeto ou dúvida..." />
              </div>
              <a href={contactData.cta.href} className={styles.submit}>
                {contactData.cta.label}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
