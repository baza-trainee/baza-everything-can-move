'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { Group } from 'three';

useGLTF.preload('/models/ball3D+anim.glb');

export default function ModelRobot() {
  const group = useRef<Group>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const { scene, animations } = useGLTF('/models/ball3D+anim.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0 && actions[animations[0].name]) {
      if (isAnimating) {
        actions[animations[0].name]?.play();
      } else {
        actions[animations[0].name]?.stop();
      }
    }
  }, [isAnimating, animations, actions]);

  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <group
      ref={group}
      onClick={toggleAnimation}
      rotation={[0.1, 0, 0]}
      scale={[2, 2, 1]}
    >
      <primitive object={scene} />
    </group>
  );
}
