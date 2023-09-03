import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.mask}>
        <p>Testing Mask Text</p>
      </div>

      <div className={styles.body}>
        <p>Testing Body Text</p>
      </div>

    </main>
  )
}
