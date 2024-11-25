'use client';
import React from 'react';
import GoalSectiont from '../../GoalSection/GoalSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { PARTNERS_ARR } from '@/constants/partnersArr';
import MovingPartnersCards from './MovingPartnersCards';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SubTitle from '@/components/ui/SubTitle';

const PartnersSection: React.FC = () => {
  return (
    <section className="pb-[100px] 2xl:pb-[120px]">
      <div className="container">
        <GoalSectiont />
        <ContainerWithCorners className="pt-8 2xl:pt-0">
          <SectionTitle className="mb-1"> Наші партнери</SectionTitle>
          <SubTitle className="mb-8"> Долучайтесь</SubTitle>

          <MovingPartnersCards items={PARTNERS_ARR} speed="slow" />
        </ContainerWithCorners>
      </div>
    </section>
  );
};

export default PartnersSection;