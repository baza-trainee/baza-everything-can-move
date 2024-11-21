import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitleAnimation from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleAnimation';

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
        <p className="mb-[60px] text-m font-regular leading-o-120 lg:block">
          Всі проєкти можна переглянути на сайті Baza Trainee Ukraine.
        </p>
      </Container>
    </section>
  );
};

export default ProjectsSectionSecond;
