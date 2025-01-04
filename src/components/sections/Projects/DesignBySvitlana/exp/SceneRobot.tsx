import { Canvas } from '@react-three/fiber';
import ModelRobot from './ModelRobot';
import { Suspense } from 'react';
import { Center } from '@react-three/drei';

function SceneRobot() {
  return (
    <div className="z-10 h-[400px] w-[100%] p-0 lg:w-[80%] 2xl:w-[50%]">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        {/* <directionalLight position={[-5, -5, 5]} intensity={5} /> */}
        <directionalLight position={[0, 0, 5]} intensity={3} />
        <Suspense fallback={null}>
          <Center position={[-0.5, -0.5, 0]}>
            <ModelRobot />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SceneRobot;
