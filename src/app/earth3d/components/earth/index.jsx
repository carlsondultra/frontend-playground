'use client';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from 'framer-motion-3d';

export default function earth() {

    const scene = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/earth3d/color.jpg',
        '/earth3d/normal.png',
        '/earth3d/occlusion.jpg'
    ])
    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </motion.mesh>
        </Canvas>
    )
} 