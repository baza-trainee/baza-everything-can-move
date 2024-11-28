import React from 'react';
import { subTitlesOurCustomers } from '@/constants/data/subTitlesArr';
import SubTitleAnimation from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleAnimation1';

const Test: React.FC = () => {
  return (
    <section className="bg-s-gray py-20 font-second-family lg:py-[100px] 2xl:py-0">
      <SubTitleAnimation
        classNameGeneral="mb-9 lg:mb-6 2xl:mb-8 "
        color="black"
        subTitleArr={subTitlesOurCustomers}
      >
        наші замовники
      </SubTitleAnimation>
    </section>
  );
};

export default Test;
