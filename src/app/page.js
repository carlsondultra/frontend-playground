import Link from 'next/link'
import './styles.css'
import styles from './page.module.scss'
import Navbar from './components/navbar/navbar' 

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <p>Welcome to my front-end playground!</p>
        <p>Click the links to browse front-end techniques i've been playing around with!</p>
      </div>
    </main>
  )
}
