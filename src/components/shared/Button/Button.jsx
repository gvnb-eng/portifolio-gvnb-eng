import styles from './Button.module.css'

export default function Button({ href, children }) {
  return (
    <a href={href} className={styles.btn}>
      {children}
    </a>
  )
}
