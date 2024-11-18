'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Model from './Model';

export default function Scene() {
  return (
    <>
      <div className="h-[700px] 2xl:w-[50%] lg:w-[60%] w-[100%] transform 2xl:translate-x-[70%] lg:translate-x-[55%] 2xl:translate-y-[10%] translate-y-[-7%] translate-x-[-10%] absolute">
        <Canvas className="w-[100%] h-[100%] absolute z-10">
          <directionalLight position={[3, 0, 1]} intensity={0} />
          <Suspense fallback={null}></Suspense>
          <Model />
          <Model />
        </Canvas>
      </div>
    </>
  );
}
