import React from 'react';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import Slider from './Slider/Slider';

// type ProjectsSectionProps = {};

export default function ProjectsSection() {
  return (
    <section className="pb-[100px] pt-[54px] lg:pb-20 lg:pt-20 2xl:pb-16 2xl:pt-10">
      <div className="container">
        <ContainerWithCorners className="pb-12 pt-10 lg:pb-0 2xl:pt-0">
          <SectionTitle className="mb-3">Проєкти</SectionTitle>
          <SubTitle className="mb-8"> Результати Бази</SubTitle>
          <Slider />
        </ContainerWithCorners>
      </div>
    </section>
  );
}
