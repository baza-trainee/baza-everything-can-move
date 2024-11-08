'use client';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import React, { useRef, useEffect, useState } from 'react';
import DevelopmentText from './TextSections/DevelopmentText';
import BrainAnimation from './AnimatedSections/BrainAnimation';

function SectionDevelopment() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isScrollingInChild, setIsScrollingInChild] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // Check for section full visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFullyVisible(entry.isIntersecting),
      { threshold: 1.0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle scroll lock based on visibility and scrolling status
  useEffect(() => {
    if (isFullyVisible && isScrollingInChild) {
      // Lock scroll on the parent and document
      if (sectionRef.current) {
        sectionRef.current.style.overflow = 'hidden';
      }
      document.body.style.overflow = 'hidden';
    } else {
      // Unlock scroll
      if (sectionRef.current) {
        sectionRef.current.style.overflow = '';
      }
      document.body.style.overflow = '';
    }
  }, [isFullyVisible, isScrollingInChild]);

  // Handle child scroll state updates
  const handleChildScrollUpdate = (scrollInfo: { isTop: boolean; isBottom: boolean }) => {
    setIsScrollingInChild(!(scrollInfo.isTop || scrollInfo.isBottom));
  };

  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mb-[100px] lg:mb-[80px] xl:mb-[64px]">
          <SectionTitle>Розвиток</SectionTitle>
          <SubTitle>Розвивайся з Базою</SubTitle>
          <div
            ref={sectionRef}
            className="flex flex-col justify-items-center py-[32px] lg:flex-row lg:items-center"
          >
            <div className="grow">
              <BrainAnimation />{' '}
            </div>
            <DevelopmentText onScrollUpdate={handleChildScrollUpdate} />
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionDevelopment;
