'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import { Suspense } from 'react';
export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 120 }} // Початкова позиція камери
      style={{ width: '100%', height: '70vh'  }}
      className='transform -translate-y-5 -rotate-[30deg]'// Розтягування Canvas на весь екран
    >
      {/* Джерела світла */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Контроль камери */}
      <OrbitControls />

      {/* Завантаження моделі */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
