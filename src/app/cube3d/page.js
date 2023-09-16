import Cube from './components/cube'
import Navbar from '../components/navbar/navbar'
import styles from './style.module.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.spacer}>
        <Navbar />
        <div className={styles.title}>
          <h1>3D Cube with scroll</h1>
          <p>Created using Next.js, Framer Motion and Three.js</p>
          <br></br>
          <p>Scroll down to see effect</p>
        </div>

      </div>
      <Cube />
    </main>

  )
}
