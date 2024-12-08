'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group } from 'three';

useGLTF.preload('/models/robot_playground.glb');

export default function ModelCopy() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/robot_playground.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);

    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [animations, actions]);

  return (
    <group ref={group} scale={[1.5, 1.5, 1]}>
      <primitive object={scene} />
    </group>
  );
}
