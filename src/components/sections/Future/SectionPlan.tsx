import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import PlanAnimation from './AnimatedSections/PlanAnimation';
import PlanText from './TextSections/PlanText';



function SectionPlan() {

  return (
    <ContainerWithCorners  className="mt-[54px] lg:mt-[80px] xl:mt-[40px]">
      <SectionTitle>Наші плани</SectionTitle>
      <SubTitle>Планування це База</SubTitle>
      <div className="flex flex-col lg:flex-row py-[32px] justify-items-center lg:items-center">
        <div className="grow">
    <PlanAnimation/>
       </div>
    <PlanText/>
      </div>
    </ContainerWithCorners>
  );
}

export default SectionPlan