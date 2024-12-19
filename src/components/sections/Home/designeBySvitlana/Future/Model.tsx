import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef } from 'react';
import * as THREE from 'three';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/logo1-home.glb'); // Вказати правильний шлях
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  // Ініціалізація AnimationMixer для анімацій
  if (gltf.animations.length && !mixerRef.current) {
    mixerRef.current = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      mixerRef.current?.clipAction(clip).play();
    });
  }

  // Оновлення анімації в кожному кадрі
  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
    gltf.scene.rotation.y += delta * Math.PI / 2;
  });

  return (
    <primitive
      object={gltf.scene}
      scale={[5, 5, 6]} // Збільшити модель у 2 рази
      rotation={[0, Math.PI / 10, 0, -10]} // Розворот: [x, y, z] у радіанах
    />
  );
};

export default Model;
