// import { Canvas } from '@react-three/fiber';
import BirdSimulation from './Birds/Birds';
import Container from '@/components/ui/DesignBySvitlna/Container';

const BirdsComponent = () => {
  return (
    <section className="overflow-hidden pb-[110px] pt-[123px]">
      <Container className="flex flex-col gap-10 lg:gap-0 lg:-space-y-[60px] 2xl:flex-row 2xl:gap-[130px] 2xl:-space-y-0">
        <BirdSimulation />
      </Container>
    </section>
  );
};

export default BirdsComponent;
