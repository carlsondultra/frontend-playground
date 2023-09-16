import styles from './page.module.scss'
import Cube from './components/cube'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Cube />
    </main>

  )
}
