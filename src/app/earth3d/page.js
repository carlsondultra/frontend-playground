import styles from './page.module.scss'
import Earth from './components/earth'
import SmoothScroll from './components/smoothScroll'

export default function Home() {
    return (
    <SmoothScroll>
        <main className={styles.main}>
            <Earth />
        </main>
    </SmoothScroll>
        
    )
}