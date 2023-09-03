import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.mask}>
        <p>This is Testing Testing Testing Testing Testing Mask Text</p>
      </div>

      <div className={styles.body}>
        <p>This is Different Different Different Different Different <span>Body</span> Text</p>
      </div>

    </main>
  )
}
