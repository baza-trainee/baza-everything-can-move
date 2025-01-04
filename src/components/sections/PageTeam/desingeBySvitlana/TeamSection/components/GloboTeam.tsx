'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Drag from './Drag';
import { useMouseStore } from '../ui/useMouseStore';

function GloboTeam() {
  const { mouseX, mouseY } = useMouseStore();
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

  const points = generateFibonacciSpherePoints(900, 3);

  return (
    <div className="pointer-events-none relative mx-auto mt-10 h-[300px] w-full lg:mt-14 lg:h-[510px] 2xl:-mt-20">
      <Canvas
        className="pointer-events-none absolute left-1/2 h-[300px] w-[300px] -translate-x-1/2 lg:h-[510px] lg:w-[510px]"
        camera={{ position: [0, 0, 8] }}
      >
        <Center position={[0, 0, 0]} scale={1.55}>
          <PointsComponent points={points} mouseX={mouseX} mouseY={mouseY} />
          <OrbitControls
            enableDamping
            dampingFactor={0.1}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Center>
      </Canvas>
      <Drag className="pointer-events-none absolute left-1/2 top-[70px] -translate-x-1/2" />
    </div>
  );
}

function PointsComponent({
  points,
  mouseX,
}: {
  points: number[][];
  mouseX: number;
  mouseY: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const normalizedX = (mouseX / window.innerWidth) * 2 - 1;

      pointsRef.current.rotation.y = normalizedX * 0.5;
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
