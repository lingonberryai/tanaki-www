import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';




export function TanakiModel() {
    return (
        <Canvas style={{ width: '100%', height: '500px' }}>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    );
}
