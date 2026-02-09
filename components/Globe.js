import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Globe = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <Stars />
            <GlobeMesh />
            <OrbitControls />
        </Canvas>
    );
};

const GlobeMesh = () => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 1.1 : 1}
        >
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color={hovered ? 'lightblue' : 'blue'} />
        </mesh>
    );
};

export default Globe;
