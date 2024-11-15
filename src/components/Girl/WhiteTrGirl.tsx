"use client";
//!!!!! work White dancing !!!!
import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

useGLTF.preload("/models/Michelle-tr-white.glb");

function GirlModel() {
  const { animations, scene } = useGLTF("/models/Michelle-tr-white.glb");
  const { ref, mixer } = useAnimations(animations, scene);

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
    console.log(" No scene");
    return null;
  }

  scene.traverse((child) => {
    if (child instanceof THREE.SkinnedMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
      });
    }
  });

  return <primitive object={scene} ref={ref} />;
}

export default function WhiteTrGirl() {
  // State to store the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  // Use scroll position to adjust the model's position
  const modelPosition = {
    translateY: -20 + scrollPosition * 0.05, // Adjust multiplier to control movement speed
    translateX: 70 + scrollPosition * 0.02, // Adjust multiplier to control movement speed
  };

  return (
    <>
      <div className="h-[700px] 2xl:w-[50%] lg:w-[60%] w-[90%] transform 2xl:translate-x-[70%] lg:translate-x-[55%] 2xl:translate-y-[-25%] translate-y-[-7%] translate-x-[-10%] absolute"
         style={{
          transform: `translateY(${modelPosition.translateY}%) translateX(${modelPosition.translateX}%)`,
        }}
      >
      
        <Canvas
          className="h-[900px] w-[400px]"
          camera={{ position: [0, 1, 5], fov: 50 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <directionalLight position={[0, 1, 1]} intensity={2} />
          <Suspense fallback={null}>
            <GirlModel />
          </Suspense>
          <OrbitControls enabled={false} />
        </Canvas>
      </div>
    </>
  );
}
