'use client';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import React, { useRef } from 'react';
import DevelopmentText from './TextSections/DevelopmentText';
import BrainAnimation from './AnimatedSections/BrainAnimation';



function SectionDevelopment() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <ContainerWithCorners className="mb-[100px] lg:mb-[80px] 2xl:mb-[64px]">
          <SectionTitle>Розвиток</SectionTitle>
          <SubTitle>Розвивайся з Базою</SubTitle>
          <div className="scrollbar-hidden flex h-full max-h-full flex-col justify-items-center py-[32px] lg:flex-row lg:items-center">
            <div className="grow">
              <BrainAnimation />
            </div>
            <DevelopmentText />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}




export default SectionDevelopment;




