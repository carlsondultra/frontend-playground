'use client'
import useMousePosition from './utils/useMousePosition'
import styles from './page.module.scss'
import { motion } from 'framer-motion';

export default function Home() {

  const {x, y} = useMousePosition();
  const size = 40;
  return (
    <main className={styles.main}>

      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
        }}
        transition={{type: "tween", ease: "backOut"}}
        >
        <p>This is Testing Testing Testing Testing Testing Mask Text</p>
      </motion.div>

      <div className={styles.body}>
        <p>This is Different Different Different Different Different <span>Body</span> Text</p>
      </div>

    </main>
  )
}
