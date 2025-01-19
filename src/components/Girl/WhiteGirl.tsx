'use client';
//!!!!! work White dancing !!!!
import React from 'react';
import { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';

useGLTF.preload('/models/Michelle-white.glb');
function GirlModel() {
  const { animations, scene } = useGLTF('/models/Michelle-white.glb');

  const { ref, mixer } = useAnimations(animations, scene);

  //   scene.scale.set(1, 1, 1);

  useFrame((_, delta) => {
    if (mixer && animations.length) {
      mixer.update(delta * 0.1);
    }
  });
  React.useEffect(() => {
    if (animations.length > 0 && mixer) {
      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [animations, mixer]);

  if (!scene) {
    console.log(' No scene');
    return null;
  }

  scene.traverse((child) => {
    if (child instanceof THREE.SkinnedMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
      });
    }
  });

  return <primitive object={scene} ref={ref} scale={[1.2, 1.2, 2]} />;
}

export default function WhiteGirl() {
  return (
    <>
      {/* <div className="h-[800px]  w-[400px]"> */}
      <Canvas
        camera={{ position: [0, 1, 5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        {/* <directionalLight position={[5, 5, 5]} /> */}
        <directionalLight position={[0, 1, 1]} intensity={2} />
        <Suspense fallback={null}>
          <GirlModel />
        </Suspense>
        <OrbitControls enabled={false} />
      </Canvas>
      {/* </div> */}
    </>
  );
}
