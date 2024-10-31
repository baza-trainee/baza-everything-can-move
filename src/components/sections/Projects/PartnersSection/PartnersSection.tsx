'use client';
import React from 'react';

import SectionTitle from '@/components/ui/SectionTitle';

import { PARTNERS_ARR } from '@/constants/partnersArr';

import MovingPartnersCards from './MovingPartnersCards';

import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';

const PartnersSection: React.FC = () => {
  return (
    <section className="pb-[100px] lg:pb-20">
      <div className="container">
        <ContainerWithCorners className="pt-8 2xl:pt-0">
          <SectionTitle className="mb-1"> Наші партнери</SectionTitle>
          <h2 className="mb-8 text-white">долучайтесь</h2>

          <MovingPartnersCards items={PARTNERS_ARR} speed="slow" />
        </ContainerWithCorners>
      </div>
    </section>
  );
};

export default PartnersSection;
