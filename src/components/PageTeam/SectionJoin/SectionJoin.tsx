import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import ButtonJoin from './ButtonJoin';
import Description from './Description';

function SectionJoin() {
  return (
    <section className="">
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