import React, { useRef } from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitleAnimation from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleAnimation';
import { PROJECTS_SVITLANA_IMAGES } from '@/constants/images/imagesSrc';
import SectionImagesManager from './SectionImagesManager';
import { useInView } from 'framer-motion';

const ProjectsSectionSecond: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log('isInView', isInView);
  return (
    <section ref={ref} className="py-20 font-second-family lg:py-[100px]">
      <Container className="flex flex-col items-center">
        <SectionTitle secondDesign className="mb-4 lg:mb-8">
          категорії
        </SectionTitle>
        <SubTitleAnimation className="mb-9 text-white lg:mb-8">
          наші замовники
        </SubTitleAnimation>
        {isInView && <SectionImagesManager images={PROJECTS_SVITLANA_IMAGES} />}

        <button>Button</button>
      </Container>
    </section>
  );
};

export default ProjectsSectionSecond;
