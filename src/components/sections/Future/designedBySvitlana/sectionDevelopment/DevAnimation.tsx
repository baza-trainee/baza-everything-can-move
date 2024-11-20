'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';

const TorusScene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const { scene, gl, camera, size } = useThree();

  const dampValue = 0.96;

  useEffect(() => {
    const composer = new EffectComposer(gl);
    composer.addPass(new RenderPass(scene, camera));

    const afterimagePass = new AfterimagePass();
    afterimagePass.uniforms['damp'].value = dampValue;
    composer.addPass(afterimagePass);

    composerRef.current = composer;
  }, [gl, scene, camera]);

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    }
    gl.setSize(size.width, size.height);
  }, [size, camera, gl]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0075;
      meshRef.current.rotation.y += 0.015;
    }
    composerRef.current?.render();
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[100, 30, 100, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};

function DevAnimation () {
  return(
    <div className="lg:sticky top-0 left-0 2xl:left-[50%] 2xl:-translate-x-[50%] mx-auto lg:mx-0 w-[262px] h-[260px] xl:w-widthXl  2xl:w-[390px] 2xl:h-[386px]">
    <Canvas
      camera={{ position: [0, 0, 400], fov: 60 }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
      }}
    >
      <TorusScene />
    </Canvas>
  </div>
  )
  
};

export default DevAnimation;