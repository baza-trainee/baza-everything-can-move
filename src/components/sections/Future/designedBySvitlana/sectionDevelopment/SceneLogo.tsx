import { Canvas } from '@react-three/fiber';
import ModelLogo from './ModelLogo';

import { Suspense } from 'react';

function SceneLogo() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} key="logo-section">
      <directionalLight position={[-5, -5, 5]} intensity={5} />
      <Suspense fallback={null}>
        <ModelLogo />
      </Suspense>
    </Canvas>
  );
}

export default SceneLogo;
