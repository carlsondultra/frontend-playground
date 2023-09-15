'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import styles from './style.module.scss'

export default function index() {
    return (
        <div className={styles.main}>
            <Canvas>
                <ambientLight intensity={2}/>
                <Cube />
            </Canvas>
        </div>
    )
}

function Cube() {
    return (
        <mesh>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial color={"orange"}/>
        </mesh>
    )
}