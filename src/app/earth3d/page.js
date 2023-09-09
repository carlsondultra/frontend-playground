import styles from './page.module.scss'
import Earth from './components/earth'
import SmoothScroll from './components/smoothScroll'
import Projects from './components/projects'
import './styles.css'

export default function Home() {
    return (
    <SmoothScroll>
        <main className={styles.main}>
            <Earth />\
            <Projects />
        </main>
    </SmoothScroll>
        
    )
}