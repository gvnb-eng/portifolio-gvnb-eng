import { contactData } from '../../data/contact'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './Contact.module.css'

export default function Contact() {
  const { language } = useLanguage()
  const data = contactData[language]

  return (
    <section id="contato" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className="section-eyebrow">{data.eyebrow}</div>
            <h2>{data.title}</h2>
            <div className="divider" />
            <p className={styles.desc}>{data.description}</p>
            <div className={styles.links}>
              {data.links.map((link) => (
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
                  <label className={styles.label}>{data.fields.name}</label>
                  <input className={styles.input} type="text" placeholder={data.fields.namePlaceholder} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{data.fields.email}</label>
                  <input className={styles.input} type="email" placeholder={data.fields.emailPlaceholder} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{data.fields.subject}</label>
                <input className={styles.input} type="text" placeholder={data.fields.subjectPlaceholder} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{data.fields.message}</label>
                <textarea className={styles.textarea} rows={5} placeholder={data.fields.messagePlaceholder} />
              </div>
              <a href={data.cta.href} className={styles.submit}>
                {data.cta.label}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
