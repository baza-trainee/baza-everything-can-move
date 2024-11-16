"use client";
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, AnimationMixer } from 'three'; // Імпортуємо Group і AnimationMixer з 'three'

// Завантаження моделі
useGLTF.preload('/models/robot_playground.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/robot_playground.glb'); // Отримуємо сцену і анімації з GLTF

  // Використовуємо useAnimations для керування анімаціями
  const { actions } = useAnimations(animations, group);

  // Запуск анімації при завантаженні
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play(); // Якщо є анімації, програємо першу
    }
  }, [animations, actions]);

  // Додаємо анімацію руху
  useFrame((state) => {
    if (group.current) {
      // Рух по осі X
      group.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <group ref={group} scale={[2, 2, 2]}>
      <primitive object={scene} />
    </group>
  );
}
