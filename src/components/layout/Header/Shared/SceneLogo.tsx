import { Canvas } from '@react-three/fiber';
import ModelLogo from './ModelLogo';

import { Suspense } from 'react';
//import { Center } from '@react-three/drei';

function SceneLogo() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} key="logo-section">
      <directionalLight position={[-5, -5, 5]} intensity={5} />
      <Suspense fallback={null}>
        {/* <Center position={[-0.5, -0.5, 0]}> */}
        <ModelLogo />
        {/* </Center> */}
      </Suspense>
    </Canvas>
  );
}

export default SceneLogo;
