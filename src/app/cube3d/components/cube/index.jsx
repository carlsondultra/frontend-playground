'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function index() {
    return (
        <div>
            <Canvas>
                <Cube />
            </Canvas>
        </div>
    )
}

function Cube() {
    return (
        <mesh>
            <boxGeometry />
        </mesh>
    )
}