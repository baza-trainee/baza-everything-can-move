import { motion, MotionCanvas, LayoutCamera } from 'framer-motion/three';
import { Shadow, Stats } from '@react-three/drei'; //softShadows, 
import { useThree, useFrame } from '@react-three/fiber';




export function Scene({ isFullscreen:boolean }) {
  return (
        <MotionCanvas dpr= { [1, 2]}>
        
      <LayoutCamera
        initial={false} animate={
          isFullscreen
            ? {
                x: 10,
                y: 5,
                z: 10,
               
                fov: 30
              }
            : { x: 15, y: 0.25, z: 0, fov: 10 }
        }
      />
      <Lights isFullscreen={isFullscreen} />
      <Geometry />
    </MotionCanvas>
  );
}