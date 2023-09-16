import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, MeshStandardMaterial } from 'three';

function AnimatedModel({ url }) {
    const gltf = useLoader(GLTFLoader, url);
    const { scene, animations } = gltf;
    const { clock } = useThree();
    const mixerRef = useRef(null);

    const handMeshes = ['handL_1', 'handR_1'];
    const bodyMesh = 'BodyMesh001';

    useEffect(() => {
        if (animations && animations.length) {
            mixerRef.current = new AnimationMixer(scene);
            animations.forEach((clip) => {
                mixerRef.current.clipAction(clip).play();
            });

            let lastTimestamp;

            const animate = (timestamp) => {
                if (lastTimestamp !== undefined) {
                    const elapsedTimeInSeconds = (timestamp - lastTimestamp) * 0.001; // Convert ms to seconds
                    if (mixerRef.current) {
                        mixerRef.current.update(elapsedTimeInSeconds);
                    }
                }
                lastTimestamp = timestamp;
                
                requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
        }

        scene.traverse((object) => {
            if (object.isMesh && handMeshes.includes(object.name)) {
                object.material = new MeshStandardMaterial({ color: 'yellow' });
                object.material.needsUpdate = true;
            }

            if (object.name === bodyMesh) {
                object.material = new MeshStandardMaterial({ color: 'pink' });
                object.material.needsUpdate = true;
            }
        });

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
