import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Galaxy from '../../common/Galaxy';

function GalaxySvitlana() {
  return (
        <div className="absolute h-full w-[75%] right-0 bottom-0">
          <Canvas camera={{ position: [2, 7, 2], fov: 50 }}>
            <ambientLight  intensity={0.7} />
            <directionalLight position={[0, 10, 0]} intensity={1.8} />
            <Galaxy
              radius={4}
              colors={{ insideColor: '#ffa575', outsideColor: '#311599' }}
              size={0.04}
              spinMultiplier={4}
              range={1.5}
              rangeY={0.5}
            />
            <OrbitControls enableDamping={true} />
          </Canvas>
        </div>
  );
}

export default  GalaxySvitlana;
