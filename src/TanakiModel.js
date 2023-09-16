import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, Color, MeshStandardMaterial, Float32BufferAttribute } from 'three'; // Import necessary Three.js components

// Define the VertexColors constant
const VertexColors = 2;

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
                const startColor = new Color(0xFFE600); 
                const endColor = new Color(0xFF4E8D); 
        
                const minY = Math.min(...object.geometry.attributes.position.array.filter((_, i) => i % 3 === 1));
                const maxY = Math.max(...object.geometry.attributes.position.array.filter((_, i) => i % 3 === 1));
        
                const colors = [];
        
                for (let i = 0; i < object.geometry.attributes.position.count; i++) {
                    const y = object.geometry.attributes.position.getY(i);
                    const gradientPosition = (y - minY) / (maxY - minY);
                    const color = new Color().lerpColors(startColor, endColor, gradientPosition);
                    colors.push(color.r, color.g, color.b);
                }
        
                object.geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
                object.material = new MeshStandardMaterial({ vertexColors: VertexColors });
                object.material.needsUpdate = true;
            }
        
            // Check if the name starts with "eyelid" and set a light blue color
            if (object.name.startsWith('eyelid')) {

                const eyeLidColor = new Color(0x5A9DEB);

                object.material = new MeshStandardMaterial({ color: eyeLidColor });
                object.material.needsUpdate = true;
            }

            if (object.name === "Mesh001") {
        const pinkColor = new Color(0xFF1493); // Hex code for pink
        object.material = new MeshStandardMaterial({ color: pinkColor });
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
        <primitive object={scene} position={[0, -2.5, 0]} scale={[3, 3, 3]} castShadow />
    );
}

export function TanakiModel() {
    return (
        <Canvas style={{ width: '400px', height: '400px' }}>
            <ambientLight intensity={1} />
            <directionalLight
                position={[5, 10, 5]} // position it in the scene
                intensity={1}         // light intensity
                castShadow            // enable shadow casting
            />
            <AnimatedModel url='./tanaki.glb' />
        </Canvas>
    );
}
