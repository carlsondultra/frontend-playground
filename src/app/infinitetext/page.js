'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export default function Home() {

    const firstText = useRef(null)
    const secondText = useRef(null)
    let xPercent = 0;
    let direction = 1; //negative value moves text to the left

    useEffect(() => {
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
        xPercent += 0.1 * direction;
        requestAnimationFrame(animation);
    }

    return (
        <main>
            <Image
                fill={true}
                src="/imagefloat/floating_5.jpg"
                alt="image"
            />
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    {/* Repeated paragraphs in order to have infinite effect */}
                    <p ref={firstText}>Created using Next.js and GSAP</p>
                    <p ref={secondText}>Created using Next.js and GSAP</p>
                </div>
            </div>

        </main>
    )
}
