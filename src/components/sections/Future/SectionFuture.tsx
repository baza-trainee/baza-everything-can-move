import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import GalaxyAnimation from './AnimatedSections/GalaxyAnimation';
import FutureHeroText from './TextSections/FutureText';


function SectionFuture() {

  return (
    <ContainerWithCorners  className="mt-[54px] lg:mt-[80px] xl:mt-[40px]">
      <SectionTitle>Майбутнє</SectionTitle>
      <SubTitle>Плануй з нами</SubTitle>
      <div className="flex flex-col lg:flex-row py-[32px] justify-items-center lg:items-center">
        <div className="grow">
        <GalaxyAnimation/>
       </div>
    <FutureHeroText/>
      </div>
    </ContainerWithCorners>
  );
}

export default SectionFuture