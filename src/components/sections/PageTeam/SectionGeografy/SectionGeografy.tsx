import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import SectionMap from './SectionMap';
import SectionDescription from './SectionDescription';

function SectionGeografy() {
  const countries =
    'США УКРаїна словаччина франція нідерланди чехія Іспанія данія угорщина латвія естонія Великобританія литва ірландія грузія німеччина молдова ізраїль польща канада італія швеція туреччина';
  return (
    <section className="py-[120px]">
      <div className="container">
        <ContainerWithCorners className="py-[48px] lg:pt-0">
          <div>
            <SectionTitle>ГЕОГРАФІЯ учасників</SectionTitle>
            <SubTitle>База в світі</SubTitle>
          </div>
          <div className="mt-8 flex flex-col gap-10 lg:flex-col-reverse">
            <SectionMap rowCounties={countries} />
            <SectionDescription />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionGeografy;
