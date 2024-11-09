import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import GalaxyAnimation from './AnimatedSections/GalaxyAnimation';
import FutureHeroText from './TextSections/FutureText';

function SectionFuture() {
  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mt-[54px] lg:mt-[80px] xl:mt-[64px] mb-[100px] lg:mb-[80px] xl:mb-[64px]">
          <SectionTitle>Майбутнє</SectionTitle>
          <SubTitle>Плануй з нами</SubTitle>
          <div className="flex flex-col justify-items-center py-[32px] lg:flex-row lg:items-center">
            <div className="grow">
              <GalaxyAnimation />
            </div>
            <FutureHeroText />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionFuture;
