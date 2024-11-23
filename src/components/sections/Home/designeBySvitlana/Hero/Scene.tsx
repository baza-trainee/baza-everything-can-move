'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Model from './Model';

export default function Scene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Встановлюємо поточну позицію скролу
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Розрахунок зміщення залежно від позиції скролу
  const translateX = Math.max(-70, 20 - scrollY / 2); // Початкова позиція: -10%, зміщення до -70%
  const translateY = Math.min(180, scrollY / 2); // Початкова позиція: 0%, зміщення до 180%

  return (
    <>
      <div
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          transition: 'transform 1.9s ease-out',
        }}
        className="h-[700px] 2xl:w-[50%] lg:w-[60%] w-[100%]"
      >
        <Canvas className="w-[100%] h-[100%] z-10">
          <directionalLight position={[3, 0, 1]} intensity={0} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
