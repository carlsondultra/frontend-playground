'use client'
import Image from 'next/image'
import styles from './page.module.css'
import './styles.css'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/navbar/navbar'

export default function Home() {

    const firstText = useRef(null)
    const secondText = useRef(null)
    const slider = useRef(null)
    let xPercent = 0;
    let direction = 1; //negative value moves text to the left

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-=500px",
        })
        requestAnimationFrame(animation);
    }, [])

    // using gsap to set position of x based on xpercent value
    const animation = () => {
        if(xPercent <= -100){
            xPercent = 0;
        }
        if(xPercent > 0){
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animation);
        xPercent += 0.1 * direction;
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <Image
                fill={true}
                // width={1920}
                // height={1080}
                src="/imagefloat/floating_5.jpg"
                alt="image"
            />
            <div className={styles.sliderContainer}>
                <div className={styles.title}>
                    <h1 className={styles.h1}>Infinite Moving Text</h1>
                    <p className={styles.p}>Created using Next.js and GSAP</p>
                </div>
                <div ref={slider} className={styles.slider}>
                    {/* Repeated paragraphs in order to have infinite effect */}
                    <p ref={firstText}>Created using Next.js and GSAP</p>
                    <p ref={secondText}>Created using Next.js and GSAP</p>
                </div>
            </div>

        </main>
    )
}
