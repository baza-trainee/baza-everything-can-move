"use client";
import React from "react";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

useGLTF.preload("/models/Michelle.glb");
function GirlModel() {
  const { animations, scene } = useGLTF("/models/Michelle.glb");

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
    console.log("No scene");
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
      <div className="h-auto transform translate-x-[-20%]">
        {/* <h1 className="text-white text-center text-lg">I hate her !!!</h1> */}
        <Canvas className="h-[900px] w-[100%]"
          camera={{ position: [0, 3, 5], fov: 50 }}
          //   camera={{ position: [0, 300, -85], fov: 50 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <directionalLight position={[0, 1, 1]} intensity={2} />
          <Suspense fallback={null}>
            <GirlModel />
          </Suspense>

          {/* <OrbitControls /> */}
          <OrbitControls enabled={false} />
        </Canvas>
      </div>
    </>
  );
}
