'use client'
import {
    Floating1,
    Floating2,
    Floating3,
    Floating4,
    Floating5,
    Floating6,
    Floating7,
    Floating8
} from "../imagefloat/data"
import './styles.css'
import styles from "./page.module.scss"
import Image from "next/image"
import { useRef } from 'react';
import { gsap } from "gsap"

export default function Home() {

    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    const speed = 0.1 //how fast pictures move

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;
        gsap.set(plane1.current, {x: `+=${movementX * speed}`,y: `+=${movementY * speed}`})
        gsap.set(plane2.current, {x: `+=${movementX * speed * 0.5}`,y: `+=${movementY * speed * 0.5}`})
        gsap.set(plane3.current, {x: `+=${movementX * speed * 0.25}`,y: `+=${movementY * speed * 0.25}`})
    }

    return (
        <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
            <div ref={plane1} className={styles.plane}>
                <Image
                    alt="image"
                    src={Floating1}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating2}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating3}
                    width={300}
                />
            </div>
            <div ref={plane2} className={styles.plane}>
                <Image
                    alt="image"
                    src={Floating4}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating5}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating6}
                    width={300}
                />
            </div>
            <div ref={plane3} className={styles.plane}>
                <Image
                    alt="image"
                    src={Floating7}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating8}
                    width={300}
                />
            </div>
            <div className={styles.title}>
                <h1>Floating Images Gallery</h1>
                <p>Created using Next.js and GSAP</p>
            </div>
        </main>
    )
}
