import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

function AnimatedModel({ url }) {
    const gltf = useLoader(GLTFLoader, url);
    const { scene, animations } = gltf;
    const { clock } = useThree();
    const mixerRef = useRef(null);

    useEffect(() => {
        if (animations && animations.length) {
            mixerRef.current = new AnimationMixer(scene);
            animations.forEach((clip) => {
                mixerRef.current.clipAction(clip).play();
            });

            const animate = () => {
                if (mixerRef.current) {
                    mixerRef.current.update(clock.getDelta());
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
        <primitive object={scene} position={[0, 1, 0]} children-0-castShadow />
    );
}

export function TanakiModel() {
    return (
        <Canvas style={{ width: '100%', height: '500px' }}>
            <mesh>
                {/* <torusKnotGeometry /> */}
                {/* <meshNormalMaterial /> */}
            </mesh>
            <AnimatedModel url='./tanaki.glb' />
        </Canvas>
    );
}
