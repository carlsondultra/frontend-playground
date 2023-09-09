import styles from './page.module.scss'
import SmoothScroll from './components/smoothScroll'
import Projects from './components/projects'
import './styles.css'
import dynamic from 'next/dynamic'

const Earth = dynamic(() => import('./components/earth'), {
    ssr: false,
    loading: () => <img src="/assets/placeholder.png"></img>
  })

export default function Home() {
    return (
    <SmoothScroll>
        <main className={styles.main}>
            <Earth />
            <Projects />
        </main>
    </SmoothScroll>
        
    )
}