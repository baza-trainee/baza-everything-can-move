'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { Center } from '@react-three/drei';
import Model from './ModelCopy';

export default function Scene() {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Оновлення ширини екрану при зміні розміру
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Встановлюємо поточну позицію скролу
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Розрахунок зміщення залежно від ширини екрану та позиції скролу
  const calculateTranslateX = () => {
    if (screenWidth > 1400) {
      return Math.max(-40, 70 - scrollY / 2); // Для великих екранів
    } else if (screenWidth > 1024) {
      return Math.max(-40, 40 - scrollY / 2); // Для середніх екранів
    }  else if (screenWidth > 768) {
      return Math.max(-40, 20 - scrollY / 2); // Для маленьких екранів
    }
  };

  const calculateTranslateY = () => {
    if (screenWidth > 1200) {
      return Math.min(123, scrollY / 2); // Для великих екранів
    } 
    else if (screenWidth > 768) {
      return Math.min(120, scrollY / 3); // Для середніх екранів
    } else {
      // return Math.min(50, scrollY / 4); // Для маленьких екранів
    }
  };

  const translateX = calculateTranslateX();
  const translateY = calculateTranslateY();

  return (
    <>
      <div
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          transition: 'transform 1.9s ease-out',
        }}
        className="absolute  -top-24 z-10 h-[700px] w-[100%] lg:w-[60%] xl:-top-64 left-[28%] 2xl:left-[30%] 2xl:w-[50%]"
      >
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          <directionalLight position={[-5, -5, 5]} intensity={5} />
          <Suspense fallback={null}>
            <Center position={[-0.5, -0.5, 0]}>
              <Model />
            </Center>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
