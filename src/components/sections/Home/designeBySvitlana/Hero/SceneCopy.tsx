import { Canvas } from '@react-three/fiber';
import ModelCopy from './ModelCopy';
import { Suspense } from 'react';
import { Center } from '@react-three/drei';

function SceneCopy() {
  return (
    <div className="absolute -top-44 left-[30%] z-10 h-[700px] w-[100%] p-0 lg:w-[80%] 2xl:w-[50%]">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} key="robot-copy">
        <directionalLight position={[-5, -5, 5]} intensity={5} />
        <Suspense fallback={null}>
          <Center position={[-0.5, -0.5, 0]}>
            <ModelCopy />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SceneCopy;
