//import { Canvas } from '@react-three/fiber';
//import { Suspense } from 'react';
//import BirdSimulation from './Birds/Birds';
import Container from '@/components/ui/DesignBySvitlna/Container';
import NewNew from './Birds/NewNew';
// import NewBirdScene from './Birds/NewBirdScene';
//import BirdSimulation from './Birds/BirdSimulation';
//import Flocking from './Birds/Flocking';

const BirdsComponent = () => {
  return (
    <section className="overflow-hidden pb-[110px] pt-[23px]">
      <Container className="h-[400px] w-full">
        {/* <Flocking /> */}

        {/* <NewBirdScene /> */}
        <NewNew />
        {/* <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <directionalLight position={[0, 1, 1]} intensity={2} />
          <Suspense fallback={null}>
            {' '}
            <BirdSimulation />
          </Suspense>
        </Canvas> */}
      </Container>
    </section>
  );
};

export default BirdsComponent;
