'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function IrregularWaveMesh({ speed = 1, intensity = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * speed;
    const { geometry } = meshRef.current;
    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      const zOffset =
        Math.sin(x * 2 + time) * Math.cos(y * 2 + time) * intensity;
      const irregularity = Math.sin(x + y + time * 0.5) * 0.3;
      position.setZ(i, zOffset + irregularity);
    }
    position.needsUpdate = true;
  });

  // `ShaderMaterial` для створення градієнтного ефекту
  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial
        uniforms={{
          color1: { value: new THREE.Color('#8f8ded') },
          color2: { value: new THREE.Color('#d3fd50') },
          time: { value: 0 },
        }}
        vertexShader={`
          uniform float time;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 2.0 + time) * 0.5;
            pos.z += sin(pos.y * 2.0 + time) * 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;

          void main() {
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `}
        wireframe={true}
      />
    </mesh>
  );
}

export default function PlanAnimation() {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        backgroundColor: '#000',
        borderRadius: '50%',
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <planeGeometry args={[3, 3, 64, 64]} />
        <IrregularWaveMesh speed={1} intensity={1.2} />
      </Canvas>
    </motion.div>
  );
}
