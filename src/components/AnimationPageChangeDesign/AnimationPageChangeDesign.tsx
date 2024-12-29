'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, PropsWithChildren } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useDesignStore } from '@/useDesignStore';
import Image from 'next/image';

function AnimationPageChangeDesign() {
  const { isChangingDesign } = useDesignStore();

  return (
    <>
      <AnimatePresence key="animtionChangeDesign">
        {isChangingDesign && (
          <motion.div
            initial={{ x: '-200%' }}
            animate={{
              x: '0%',
            }}
            exit={{ x: '200%' }}
            transition={{ duration: 2 }}
            className="fixed top-0 z-[99999999] flex h-screen w-full items-center justify-between bg-black text-olga-green-extra"
          >
            <Image
              className="lg:[700px] fixed left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 2xl:w-[1054px]"
              src={'/assets/icons/Frame.svg'}
              alt="frame"
              height={598}
              width={1054}
            />
            <div className="fixed right-7 h-screen w-[2px] bg-white" />
            <div className="fixed right-7 top-1/2 flex h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-between rounded-full bg-s-purple px-3">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 11L1 6L6 1" stroke="black" strokeLinecap="round" />
              </svg>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 11L6 6L1 1" stroke="black" strokeLinecap="round" />
              </svg>
            </div>
            <Canvas camera={{ position: [0, 0, 1] }}>
              <Stars />
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimationPageChangeDesign;
function Stars(props: PropsWithChildren) {
  const ref =
    useRef<
      THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
    >(null);
  const [sphere] = useState(() => generatePointsInSphere(5000, 1.5));
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function generatePointsInSphere(count: number, radius: number): Float32Array {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.random() * 2 * Math.PI;
    const costheta = Math.random() * 2 - 1;
    const u = Math.random();
    const theta = Math.acos(costheta);
    const r = radius * Math.cbrt(u);

    points[i * 3] = r * Math.sin(theta) * Math.cos(phi);
    points[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = r * Math.cos(theta);
  }
  return points;
}
