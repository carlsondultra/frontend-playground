'use client'
import useMousePosition from './utils/useMousePosition'
import './styles.css'
import styles from './page.module.scss'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/navbar/navbar';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered? 400 : 40; //changing mask size if hovered over text
  return (
    <main className={styles.main}>

      <Navbar />

      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>Created using <span>Next.js</span> and <span>Framer Motion</span> </p>
      </div>

    </main>
  )
}
