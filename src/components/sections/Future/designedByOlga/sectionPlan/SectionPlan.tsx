import ContainerWithCorners from '@/components/ui/DesignByOlga/ContainerWithCorners';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import PlanAnimation from './PlanAnimation';
import PlanText from './PlanText';

function SectionPlan() {
  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mb-[240px]">
          <SectionTitle>Наші плани</SectionTitle>
          <SubTitle>Планування це База</SubTitle>
          <div className="flex flex-col justify-items-center py-[32px] lg:flex-row lg:items-center">
            <div className="grow p-[12px] lg:p-0">
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
