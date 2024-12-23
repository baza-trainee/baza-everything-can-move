import React from 'react';

import SubTitleAnimation from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleAnimation';
import { PROJECTS_SVITLANA_IMAGES } from '@/constants/images/imagesSrc';
import SectionImagesManager from './SectionImagesManager';
import { subTitlesOurCustomers } from '@/constants/data/subTitlesArr';
import SubTitleBtn from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleBtn';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

const ProjectsSectionSecond: React.FC = () => {
  return (
    <section className="py-20 font-second-family lg:py-[100px] 2xl:py-0">
      <div className="ml-auto mr-auto flex w-full flex-col items-center px-[20px] lg:w-full lg:px-0 2xl:relative 2xl:h-[1059px] 2xl:w-[1440px] 2xl:max-w-[1440px] 2xl:px-0">
        <AnimatedTitle
          title="категорії"
          className="mb-4 lg:mb-[14px] 2xl:mt-[496px]"
          wordClasses={['text-s-purple']}
        />
        {/* ----------------------------------- */}
        <div className="mb-9 flex flex-col items-center lg:mb-6 lg:flex-row 2xl:mb-8">
          <SubTitleAnimation className="mb-3 lg:mb-0 lg:mr-6" color="white">
            наші замовники
          </SubTitleAnimation>
          <SubTitleBtn
            className="justify-center lg:justify-normal"
            subTitleArr={subTitlesOurCustomers}
            color="white"
          />
        </div>
        {/* ----------------------------------- */}
        <SectionImagesManager images={PROJECTS_SVITLANA_IMAGES} />
        {/* <button>Button</button> */}
      </div>
    </section>
  );
};

export default ProjectsSectionSecond;
