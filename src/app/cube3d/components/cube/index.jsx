'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import styles from './style.module.scss'
import '../../styles.css'

export default function index() {
    return (
        <div className={styles.main}>
            <Canvas>
                <ambientLight intensity={2}/>
                <directionalLight position={[2, 1, 1]} />
                <Cube />
            </Canvas>
        </div>
    )
}

function Cube() {

    const mesh = useRef(null);
    useFrame( (state, delta) => {
        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;
    })

    const texture_1 = useLoader(TextureLoader, "/imagefloat/floating_1.jpg")
    const texture_2 = useLoader(TextureLoader, "/imagefloat/floating_2.jpg")
    const texture_3 = useLoader(TextureLoader, "/imagefloat/floating_3.jpg")
    const texture_4 = useLoader(TextureLoader, "/imagefloat/floating_4.jpg")
    const texture_5 = useLoader(TextureLoader, "/imagefloat/floating_5.jpg")
    const texture_6 = useLoader(TextureLoader, "/imagefloat/floating_6.jpg")

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_4} attach="material-3"/>
            <meshStandardMaterial map={texture_5} attach="material-4"/>
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </mesh>
    )
}