// for header
import { Canvas } from '@react-three/fiber';
import ModelLogo2 from './ModelLogo2';

import { Suspense } from 'react';
//import { Center } from '@react-three/drei';

function SceneLogo2() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} key="logo-header">
      <directionalLight position={[-5, -5, 5]} intensity={7} color="white" />
      <Suspense fallback={null}>
        {/* <Center position={[-0.5, -0.5, 0]}> */}
        <ModelLogo2 />
        {/* </Center> */}
      </Suspense>
    </Canvas>
  );
}

export default SceneLogo2;
