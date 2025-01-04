'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group } from 'three';

useGLTF.preload('/models/robot7.glb');

export default function ModelRobot() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF('/models/robot7.glb');

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);

    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [animations, actions]);

  return (
    <group ref={group} rotation={[0.1, 0, 0]} scale={[2, 2, 1]}>
      <primitive object={scene} />
    </group>
  );
}
