'use client';
import React from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

useGLTF.preload('/models/Michelle.glb');
function GirlModel() {
  const { animations, scene } = useGLTF('/models/Michelle.glb');

  const { mixer } = useAnimations(animations, scene);

  useFrame((state, delta) => {
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
    console.log('No scene');
    return null;
  }
  return (
    <primitive
      object={scene}
      rotation={[-Math.PI / 20, 0, 0]}
      position={[0, -3, 0]}
      scale={[3, 3, 3]}
    />
  );
}

export default function ColoredGirl() {
  return (
    <>
      <div className="absolute h-[700px] w-[110%] translate-x-[-10%] translate-y-[-7%] transform lg:w-[60%] lg:translate-x-[55%] 2xl:w-[50%] 2xl:translate-x-[70%] 2xl:translate-y-[-25%]">
        {/* <h1 className="text-white text-center text-lg">I hate her !!!</h1> */}
        <Canvas
          className="z-10 h-[900px] w-[90%]"
          camera={{ position: [0, 3, 5], fov: 61 }}
          //   camera={{ position: [0, 300, -85], fov: 50 }}
          gl={{ antialias: true }}
          key="colored-girl"
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <directionalLight position={[0, 56, 1]} intensity={2} />
          <Suspense fallback={null}>
            <GirlModel />
          </Suspense>

          {/* <OrbitControls /> */}
          {/* <OrbitControls enabled={false} /> */}
        </Canvas>
      </div>
    </>
  );
}
