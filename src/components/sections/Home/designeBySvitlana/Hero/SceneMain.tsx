'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { Center } from '@react-three/drei';
import ModelMain from './ModelMain';

export default function SceneMain() {
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
  // const calculateTranslateX = () => {
  //   if (screenWidth > 1400) {
  //     return Math.max(-40, 70 - scrollY / 2); // Для великих екранів
  //   } else if (screenWidth > 1024) {
  //     return Math.max(-40, 40 - scrollY / 2); // Для середніх екранів
  //   } else if (screenWidth > 768) {
  //     return Math.max(-40, 20 - scrollY / 2); // Для маленьких екранів
  //   }
  const calculateTranslateX = () => {
    if (screenWidth > 1700) {
      return Math.max(-120, 0 - scrollY / 2);
    } else if (screenWidth > 1400) {
      return Math.max(-100, 0 - scrollY / 2); // Для великих екранів
    } else if (screenWidth > 1024) {
      return Math.max(-50, 0 - scrollY / 2); // Для середніх екранів
    } else if (screenWidth >= 950) {
      return Math.max(-35, 0 - scrollY / 2); // Для маленьких екранів
    } else if (screenWidth >= 768) {
      return Math.max(-25, 0 - scrollY / 2); // Для маленьких екранів
    }
  };

  const calculateTranslateY = () => {
    // if (screenWidth > 1200) {
    //   return Math.min(123, scrollY / 2); // Для великих екранів
    // } else if (screenWidth > 768) {
    //   return Math.min(120, scrollY / 3); // Для середніх екранів
    // } else {
    //   // return Math.min(50, scrollY / 4); // Для маленьких екранів
    // }
    if (screenWidth >= 1440) {
      return Math.min(160, scrollY / 2);
    } else if (screenWidth >= 1200) {
      return Math.min(155, scrollY / 2); // Для великих екранів
    } else if (screenWidth >= 768) {
      return Math.min(155, scrollY / 3); // Для середніх екранів
    } else {
      // return Math.min(50, scrollY / 4); // Для маленьких екранів
    }
  };

  const translateX = calculateTranslateX();
  const translateY = calculateTranslateY();
  // console.log('Y-', translateY);

  return (
    <>
      <div
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          //transform: `translateY(${translateY}px)`,
          transition: 'transform 1.9s ease-out',
        }}
        // className="absolute -top-24 left-[28%] z-10 h-[700px] w-[100%] lg:w-[60%] xl:-top-64 2xl:left-[30%] 2xl:w-[50%]"
        className="absolute right-0 top-8 h-[500px] w-full lg:top-10 lg:h-[520px] lg:w-[716px] 2xl:-top-24 2xl:h-[573px] 2xl:w-[716px]"
      >
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
          {/* <directionalLight position={[-5, -5, 5]} intensity={5} /> */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[-3, 5, 7]} intensity={3} />
          <Suspense fallback={null}>
            <Center position={[-0.5, -0.5, 0]}>
              <ModelMain />
            </Center>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
