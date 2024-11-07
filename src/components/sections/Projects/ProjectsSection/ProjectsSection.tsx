import React from 'react';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import Slider from './Slider/Slider';
import LinkMoreInfo from '@/components/ui/SwiperFoto/components/LinkMoreInfo';



export default function ProjectsSection() {
  return (
    <section className="pb-[100px] pt-[54px] lg:pb-20 lg:pt-20 2xl:pb-16 2xl:pt-10">
      <div className="container">
        <ContainerWithCorners className="pb-12 pt-10 lg:pb-0 2xl:pb-12 2xl:pt-0">
          <SectionTitle className="mb-3">Проєкти</SectionTitle>
          <SubTitle className="mb-8"> Результати Бази</SubTitle>
          <Slider />
          <LinkMoreInfo
            className="ml-auto mt-8 w-max"
            title="Відкрити всі"
            href="https://baza-trainee.tech/uk/projects"
          />
        </ContainerWithCorners>
      </div>
    </section>
  );
}
