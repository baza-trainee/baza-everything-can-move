import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import PlanAnimation from './AnimatedSections/PlanAnimation';
import PlanText from './TextSections/PlanText';

function SectionPlan() {
  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mb-[100px] lg:mb-[80px] 2xl:mb-[64px]">
          <SectionTitle>Наші плани</SectionTitle>
          <SubTitle>Планування це База</SubTitle>
          <div className="flex flex-col justify-items-center py-[32px] lg:flex-row lg:items-center">
            <div className="grow">
              <PlanAnimation />
            </div>
            <PlanText />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionPlan;
