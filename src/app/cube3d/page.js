import styles from './page.module.scss'
import Cube from './components/cube'

export default function Home() {
  return (
    <main className={styles.main}>
        <Cube />
    </main>
  )
}
