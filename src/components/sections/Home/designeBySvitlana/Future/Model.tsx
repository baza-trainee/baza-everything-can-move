"use client";

import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Group } from "three";

export default function Model() {
  const group = useRef<Group>(null);

  // Завантажуємо STL-файл за допомогою STLLoader
  const geometry = useLoader(STLLoader, "/models/Smile.stl");

  return (
    <group ref={group}>
      <mesh geometry={geometry}>
        {/* Налаштовуємо матеріал */}
        <meshStandardMaterial color="#fff" />
      </mesh>
    </group>
  );
}
