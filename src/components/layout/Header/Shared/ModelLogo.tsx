'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group } from 'three';

useGLTF.preload('/models/trainee11.glb');

export default function ModelLogo() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/trainee11.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [animations, actions]);

  return (
    <group ref={group} scale={[2, 2, 1]}>
      <primitive object={scene} />
    </group>
  );
}
