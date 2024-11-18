//import { Canvas } from '@react-three/fiber';
//import BirdSimulation from './Birds/Birds';
import Container from '@/components/ui/DesignBySvitlna/Container';
import NewBirdScene from './Birds/NewBirdScene';
//import BirdSimulation from './Birds/BirdSimulation';
//import Flocking from './Birds/Flocking';

const BirdsComponent = () => {
  return (
    <section className="overflow-hidden pb-[110px] pt-[23px]">
      <Container className="h-[400px] w-full">
        {/* <Flocking /> */}

        <NewBirdScene />
      </Container>
    </section>
  );
};

export default BirdsComponent;
