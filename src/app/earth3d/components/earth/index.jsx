'use client';
import { Canvas } from "@react-three/fiber";

export default function earth() {
    return (
        <Canvas>
            <ambientLight intensity={2} />
            <mesh scale={2.5}>
                <sphereGeometry />
            </mesh>
        </Canvas>
    )
} 