import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { extend } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib/loaders/GLTFLoader';
import { Environment, Loader, useGLTF } from '@react-three/drei';

function Model(props) {
  const gltf = useGLTF('/tanaki.glb', true);  // Adjust path accordingly
  return <primitive object={gltf.scene} dispose={null} />;
}

export default function TanakiModel() {
  return (
    <Canvas style={{ width: '100%', height: '500px' }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={<Loader />}>
        <Model />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
}
