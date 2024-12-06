'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Model from './Model';

export default function Scene() {
  const [scrollY, setScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Перевірка ширини екрану
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 769);
    };

    // Ініціалізація перевірки та підписка на зміни розміру екрану
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isLargeScreen) {
        setScrollY(window.scrollY); // Встановлюємо поточну позицію скролу
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLargeScreen]);

  // Розрахунок зміщення залежно від позиції скролу
  const translateX = isLargeScreen ? Math.max(-70, 20 - scrollY / 2) : 0;
  const translateY = isLargeScreen ? Math.min(130, scrollY / 2) : 0;

  return (
    <>
      <div
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          transition: 'transform 1.9s ease-out',
        }}
        className="h-[700px] 2xl:w-[50%] lg:w-[80%] w-[100%] z-10 left-[30%] absolute"
      >
        <Canvas className="w-[100%] h-[60%]">
          <directionalLight position={[1, 16, 12]} intensity={0} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
