'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Model from './Model';

export default function Scene() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Якщо прокрутка більше ніж 300px, змінюємо стан
      if (window.scrollY >= 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`h-[700px] 2xl:w-[50%] lg:w-[60%] w-[100%] fixed transition-transform duration-500 ${
          scrolled
            ? 'translate-x-[-20%]' // Коли прокручено на 300px
            : '2xl:translate-x-[55%] lg:translate-x-[55%] translate-x-[-10%]' // Початкова позиція
        }`}
      >
        <Canvas className="w-[100%] h-[100%]  z-10">
          <directionalLight position={[3, 0, 1]} intensity={0} />
          <Suspense fallback={null}>
            <Model />
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
