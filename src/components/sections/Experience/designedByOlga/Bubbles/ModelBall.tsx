'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group } from 'three';

// useGLTF.preload('/models/robot_playground.glb');
useGLTF.preload('/models/ball.glb');

export default function ModelBall() {
  const group = useRef<Group>(null);
  // const { scene, animations } = useGLTF('/models/robot_playground.glb');
  const { scene, animations } = useGLTF('/models/ball.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // console.log(actions);

    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [animations, actions]);

  return (
    // <group ref={group} scale={[1.5, 1.5, 1]}>
    <group ref={group} scale={[1.7, 1.7, 1]}>
      <primitive object={scene} />
    </group>
  );
}