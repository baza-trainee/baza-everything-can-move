// import { Canvas } from '@react-three/fiber';
//import BirdSimulation from './Birds/Birds';
import Container from '@/components/ui/DesignBySvitlna/Container';
import Flocking from './Birds/Flocking';

const BirdsComponent = () => {
  return (
    <section className="pb-[110px]">
      <Container className="h-[400px] w-full">
        <Flocking />
      </Container>
    </section>
  );
};

export default BirdsComponent;
