import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Galaxy from './../../common/Galaxy';

export default function GalaxyOlga() {
  return (
    <div className="h-[340px] w-[100%] lg:px-[10%]">
      <Canvas camera={{ position: [4, 6, 4], fov: 75 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 8, 5]} intensity={1.8} />
        <Galaxy
          radius={5}
          colors={{ insideColor: '#283001', outsideColor: '#c3ff0a' }}
        />
        <OrbitControls enableDamping={true} />
      </Canvas>
    </div>
  );
}
