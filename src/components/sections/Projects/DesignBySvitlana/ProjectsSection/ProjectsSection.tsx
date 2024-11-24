import React, { useRef } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SubTitleAnimation from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleAnimation';
import { PROJECTS_SVITLANA_IMAGES } from '@/constants/images/imagesSrc';
import SectionImagesManager from './SectionImagesManager';
import { useInView } from 'framer-motion';

const ProjectsSectionSecond: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 font-second-family lg:py-[100px]">
      <div className="ml-auto mr-auto flex w-full flex-col items-center px-[20px] lg:w-full lg:px-0 2xl:max-w-[1440px] 2xl:px-20">
        {/* <Container className="flex flex-col items-center"> */}
        <SectionTitle secondDesign className="mb-4 lg:mb-8">
          категорії
        </SectionTitle>
        <SubTitleAnimation className="mb-9 text-white lg:mb-8">
          наші замовники
        </SubTitleAnimation>
        {isInView && <SectionImagesManager images={PROJECTS_SVITLANA_IMAGES} />}

        <button>Button</button>
        {/* </Container> */}
      </div>
    </section>
  );
};

export default ProjectsSectionSecond;
