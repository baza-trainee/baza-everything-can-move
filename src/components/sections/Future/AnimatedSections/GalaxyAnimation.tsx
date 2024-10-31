'use client'
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Galaxy() {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    const pointCount = 20000;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const radius = Math.pow(Math.random(), 1.3) * 5; // Slightly increase radius for more dispersion
      const branch = i % 3;
      const branchAngle = branch * ((2 * Math.PI) / 3); // Number of galaxy arms
      const spinAngle = radius * 1.3; // Rotation around center

      const randomX = (Math.random() - 0.3) * 1.3; // Increase the range for more dispersion
      const randomY = (Math.random() - 0.3) * 1.3; // Increase the range for more dispersion
      const randomZ = (Math.random() - 0.3) * 1.3; // Increase the range for more dispersion

      const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const y = randomY * 0.1; // Slight spread along Y-axis
      const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      positions.set([x, y, z], i * 3);

      const insideColor = new THREE.Color(0x9aff75);
      const outsideColor = new THREE.Color(0x366346);
      const color = insideColor.lerp(outsideColor, radius / 5);
      colors.set([color.r, color.g, color.b], i * 3);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    if (pointsRef.current) {
      pointsRef.current.geometry = geometry;
      pointsRef.current.material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
    }
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.9; // Increase rotation speed
    }
  });

  return <points ref={pointsRef} />;
}

export default function GalaxyAnimation() {
  return (
    <div className="h-[100%] w-[100%] px-[10%]">
      <Canvas dpr={0.8} camera={{ position: [0, 10, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 4, 4]} intensity={1.5} />
        <Galaxy />
        <OrbitControls enableDamping={true} />
      </Canvas>
    </div>
  );
}


