'use client';
import React from 'react';

import SectionTitle from '@/components/ui/SectionTitle';

import { PARTNERS_ARR } from '@/constants/partnersArr';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

const PartnersSection: React.FC = () => {
  return (
    <div className="container">
      <section className="pb-[100px] lg:pb-20">
        <div className="mb-8 text-white 2xl:mb-0">corner</div>
        <SectionTitle className="mb-1"> Наші партнери</SectionTitle>
        <h2 className="mb-8 text-white">долучайтесь</h2>

        <InfiniteMovingCards items={PARTNERS_ARR} speed="slow" />

        <div className="text-white">corner</div>
      </section>
    </div>
  );
};

export default PartnersSection;
