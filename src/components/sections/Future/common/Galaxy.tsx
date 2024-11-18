'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

type GalaxyProps = {
  size?: number;
  radius?: number;
  spinMultiplier?: number;
  colors?: {
    insideColor: string; // HEX or named color
    outsideColor: string; // HEX or named color
  };
  position?: [number, number, number];
  range?: number;
  rangeY?: number;
};

function Galaxy({
  size = 0.05,
  radius = 2.5,
  spinMultiplier = 2.5,
  colors = { insideColor: '#283001', outsideColor: '#c3ff0a' },
  range = 1.5,
  rangeY = 1.5,
}: GalaxyProps) {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    const pointCount = 20000;
    const positions = new Float32Array(pointCount * 3);
    const colorsArray = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const pointRadius = Math.pow(Math.random(), 1.5) * radius;
      const branch = i % 3;
      const branchAngle = branch * ((2 * Math.PI) / 3);
      const spinAngle = pointRadius * spinMultiplier;

      const randomX = (Math.random() - 0.5) * range;
      const randomY = (Math.random() - 0.5) * rangeY;
      const randomZ = (Math.random() - 0.5) * range;

      const x = Math.cos(branchAngle + spinAngle) * pointRadius + randomX;
      const y = randomY * 2;
      const z = Math.sin(branchAngle + spinAngle) * pointRadius + randomZ;

      positions.set([x, y, z], i * 3);

      const insideColor = new THREE.Color(colors.insideColor);
      const outsideColor = new THREE.Color(colors.outsideColor);
      const color = insideColor
        .clone()
        .lerp(outsideColor, Math.pow(pointRadius / radius, 2));
      colorsArray.set([color.r, color.g, color.b], i * 3);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    if (pointsRef.current) {
      pointsRef.current.geometry = geometry;
      pointsRef.current.material = new THREE.PointsMaterial({
        size,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
    }
  }, [radius, spinMultiplier, colors, size, range]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return <points ref={pointsRef} />;
}

export default Galaxy;
