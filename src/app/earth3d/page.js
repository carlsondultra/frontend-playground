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
            <div className={styles.spacer}>
                <div className={styles.title}>
                    <h1>3D Earth with Lenis Scroll</h1>
                    <p>Created using Next.js, Framer Motion, Lenis Scroll, and React Three Fiber</p>
                    <br></br>
                    <p>Scroll down to see effect</p>
                </div>

            </div>
            <main className={styles.main}>
                <Earth />
                <Projects />
            </main>
        </SmoothScroll>

    )
}