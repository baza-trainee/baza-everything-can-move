'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';
import Drag from './Drag';

function GloboTeam() {
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  const generateFibonacciSpherePoints = (numPoints: number, radius: number) => {
    const points = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const x = radius * Math.sin(inclination) * Math.cos(azimuth);
      const y = radius * Math.sin(inclination) * Math.sin(azimuth);
      const z = radius * Math.cos(inclination);

      points.push([x, y, z]);
    }

    return points;
  };
  const sizes = {
    canvasSize: isMobile ? '300px' : '510px',
    pointsRadius: isMobile ? 3 : 4.8,
  };

  const points = generateFibonacciSpherePoints(900, sizes.pointsRadius);

  return (
    <div className="relative mx-auto mt-10 h-full w-full lg:mt-14 2xl:-mt-20">
      <Canvas
        className="absolute left-1/2 -translate-x-1/2"
        style={{ height: sizes.canvasSize, width: sizes.canvasSize }}
        camera={{ position: [0, 0, 8] }}
      >
        <PointsComponent points={points} />
        <OrbitControls
          enableDamping
          dampingFactor={0.1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <Drag className="pointer-events-none absolute left-1/2 top-[70px] -translate-x-1/2" />
    </div>
  );
}

function PointsComponent({ points }: { points: number[][] }) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const material = pointsRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = elapsedTime;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flat())}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        uniforms={{
          u_time: { value: 0 },
          u_color: { value: new THREE.Color('white') },
          u_size: { value: 2.0 },
        }}
      />
    </points>
  );
}

const vertexShader = `
  uniform float u_time;
  uniform float u_size;
  varying float v_opacity;

  void main() {
    float flicker = abs(sin(u_time + position.x * 10.0 + position.y * 10.0));
    v_opacity = 0.5 + flicker * 0.5;
   
    gl_PointSize = u_size * (1.0 + flicker);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 u_color;
  varying float v_opacity;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    gl_FragColor = vec4(u_color, v_opacity);
  }
`;

export default GloboTeam;