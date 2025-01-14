import ContainerWithCorners from '@/components/ui/DesignByOlga/ContainerWithCorners';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import ButtonJoin from './ButtonJoin';
import Description from './Description';

function SectionJoin() {
  return (
    <section className="pb-[240px]">
      <div className="container">
        <ContainerWithCorners className="pb-[46px]">
          <SectionTitle>Долучитися</SectionTitle>
          <div className="lg:flex lg:items-center lg:justify-between">
            <ButtonJoin />
            <Description />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionJoin;
