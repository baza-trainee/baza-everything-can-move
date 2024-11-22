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
        className={`h-[700px] 2xl:w-[50%] lg:w-[60%] w-[100%] transition-transform duration-[1700ms] ease-in ${
          scrolled
            ? 'translate-x-[-70%] translate-y-[180%]' // При скролі: зсув вниз і вліво
            : '2xl:translate-x-[25%] lg:translate-x-[55%] translate-x-[-10%] translate-y-[0%]' // Початкова позиція
        }`}
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
