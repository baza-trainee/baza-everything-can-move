'use client';

import { useState, useRef, PropsWithChildren } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarsBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
}

export default StarsBackground;

function Stars(props: PropsWithChildren) {
  const ref =
    useRef<
      THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
    >(null);
  const [sphere] = useState(() => generatePointsInSphere(300, 1.5));
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 35;
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
