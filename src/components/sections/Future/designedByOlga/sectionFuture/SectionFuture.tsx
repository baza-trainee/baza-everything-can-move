import ContainerWithCorners from '@/components/ui/DesignByOlga/ContainerWithCorners';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import FutureHeroText from './FutureText';
import GalaxyOlga from './GalaxyOlga';

function SectionFuture() {
  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mb-[240px] mt-[80px] lg:mt-[240px]">
          <SectionTitle>Майбутнє</SectionTitle>
          <SubTitle>Плануй з нами</SubTitle>
          <div className="flex flex-col justify-items-center py-[32px] lg:flex-row lg:items-center">
            <div className="grow">
              <GalaxyOlga />
            </div>
            <FutureHeroText />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionFuture;
