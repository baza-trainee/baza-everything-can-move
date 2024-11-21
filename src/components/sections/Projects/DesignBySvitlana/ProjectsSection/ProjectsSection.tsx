import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitleAnimation from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleAnimation';
import { PROJECTS_SVITLANA_IMAGES } from '@/constants/images/imagesSrc';
import SectionImagesManager from './SectionImagesManager';

const ProjectsSectionSecond: React.FC = () => {
  return (
    <section className="py-20 font-second-family lg:py-[100px]">
      <Container className="flex flex-col items-center">
        <SectionTitle secondDesign className="mb-4 lg:mb-8">
          проєкти
        </SectionTitle>
        <SubTitleAnimation className="mb-9 text-white lg:mb-8">
          наші замовники
        </SubTitleAnimation>

        <SectionImagesManager images={PROJECTS_SVITLANA_IMAGES} />
        <p className="mb-8">Pagination</p>
        <div className="mb-10 w-[273px] text-center">
          <p className="font-third-family text-m font-regular leading-o-120 lg:block">
            Всі проєкти можна переглянути на сайті Baza Trainee Ukraine.
          </p>
        </div>
        <button>Button</button>
      </Container>
    </section>
  );
};

export default ProjectsSectionSecond;
