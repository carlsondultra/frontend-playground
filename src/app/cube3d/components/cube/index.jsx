'use client'

import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import styles from './style.module.scss'
import '../../styles.css'
import { OrbitControls } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion-3d'

export default function index() {
    return (
        <div className={styles.main}>
            <Canvas>
                {/* disabling zooming and panning on cube */}
                <OrbitControls enableZoom={false} enablePan={false}/>
                <ambientLight intensity={2}/>
                <directionalLight position={[2, 1, 1]} />
                <Cube />
            </Canvas>
        </div>
    )
}

function Cube() {

    const mesh = useRef(null);

    const options = {
        damping: 20
    }

    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    }

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = -0.5 + clientX / innerWidth
        const y = -0.5 + clientY / innerHeight
        mouse.x.set(x);
        mouse.y.set(y)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)

        return () => window.removeEventListener("mouse", manageMouseMove)
    }, [])

    const texture_1 = useLoader(TextureLoader, "/imagefloat/floating_1.jpg")
    const texture_2 = useLoader(TextureLoader, "/imagefloat/floating_2.jpg")
    const texture_3 = useLoader(TextureLoader, "/imagefloat/floating_3.jpg")
    const texture_4 = useLoader(TextureLoader, "/imagefloat/floating_4.jpg")
    const texture_5 = useLoader(TextureLoader, "/imagefloat/floating_5.jpg")
    const texture_6 = useLoader(TextureLoader, "/imagefloat/floating_6.jpg")

    return (
        <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_4} attach="material-3"/>
            <meshStandardMaterial map={texture_5} attach="material-4"/>
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </motion.mesh>
    )
}