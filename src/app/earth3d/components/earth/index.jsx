'use client';
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function earth() {

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/earth3d/color.jpg',
        '/earth3d/normal.png',
        '/earth3d/occlusion.jpg'
    ])
    return (
        <Canvas>
            <ambientLight intensity={2} />
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </mesh>
        </Canvas>
    )
} 