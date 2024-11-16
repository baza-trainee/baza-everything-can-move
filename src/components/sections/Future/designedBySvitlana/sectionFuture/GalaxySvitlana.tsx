import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Galaxy from '../../common/Galaxy';

export default function GalaxySvitlana() {
  return (
    <section>
      <div className="container">
      <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 10, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 6, 6]} intensity={1.2} />
        <Galaxy
          radius={2.5}
          colors={{ insideColor: '#ffa575', outsideColor: '#311599' }}
          // position={[0, 10, 0]}
          size = {0.05}
          spinMultiplier = {1.5}
          range={1.2}
          rangeY={0.2}
        />
        <OrbitControls enableDamping={true} />
      </Canvas>
    </div>
      </div>
    </section>
   
  );
}
