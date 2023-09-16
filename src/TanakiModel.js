import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

function AnimatedModel({ url }) {
    const gltf = useLoader(GLTFLoader, url);
    const { scene, animations } = gltf;
    const { clock } = useThree();
    const mixerRef = useRef(null);

    // 30fps in seconds
    const frameTime = 300000;

    useEffect(() => {
        if (animations && animations.length) {
            mixerRef.current = new AnimationMixer(scene);
            animations.forEach((clip) => {
                mixerRef.current.clipAction(clip).play();
            });

            const animate = () => {
                if (mixerRef.current) {
                    mixerRef.current.update(frameTime);  // Use frameTime instead of clock.getDelta()
                }
                requestAnimationFrame(animate);
            }
            animate();
        }

        return () => {
            if (mixerRef.current) {
                animations.forEach((clip) => {
                    const action = mixerRef.current.clipAction(clip);
                    if (action) action.stop();
                });
                mixerRef.current = null;
            }
        };
    }, [animations, scene, clock]);

    return (
        <primitive object={scene} position={[0, -0.5, 0]} scale={[2, 2, 2]} children-0-castShadow />
    );
}

export function TanakiModel() {
    return (
        <Canvas style={{ width: '100%', height: '1000px' }}>

            <ambientLight intensity={0.5} />


            <directionalLight
                position={[5, 10, 5]} // position it in the scene
                intensity={1}         // light intensity
                castShadow            // enable shadow casting
            />
            <AnimatedModel url='./tanaki.glb' />
        </Canvas>
    );
}
