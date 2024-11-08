'use client';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import React, { useRef, useEffect, useState } from 'react';

export interface FutureSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  AnimationComponent: React.FC<{ animationRef: React.RefObject<HTMLDivElement> }>;
}

function FutureSection({ title, subtitle, AnimationComponent, children }: FutureSectionProps) {
  const animationRef = useRef<HTMLDivElement>(null);
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
    if (title === 'РОЗВИТОК' && isFullyVisible && isScrollingInChild) {
      // Блокуємо прокрутку на батьківському елементі
      if (sectionRef.current) {
        sectionRef.current.style.overflow = 'hidden';
      }
      // або на всій сторінці
      document.body.style.overflow = 'hidden';
    } else {
      if (sectionRef.current) {
        sectionRef.current.style.overflow = '';
      }
      document.body.style.overflow = '';
    }
  }, [title, isFullyVisible, isScrollingInChild]);

  // Handle child scroll state updates
  const handleChildScrollUpdate = (scrollInfo: { isTop: boolean; isBottom: boolean }) => {
    setIsScrollingInChild(!(scrollInfo.isTop || scrollInfo.isBottom));
  };

  return (
    <ContainerWithCorners  className="mt-[54px] lg:mt-[80px] xl:mt-[40px]">
      <SectionTitle>{title}</SectionTitle>
      <SubTitle>{subtitle}</SubTitle>
      <div ref={sectionRef} className="flex flex-col lg:flex-row py-[32px] justify-items-center lg:items-center">
        <div className="grow" ref={animationRef}>
          <AnimationComponent animationRef={animationRef} />
        </div>
        {title === 'РОЗВИТОК' ? (
          <div  >
            {React.cloneElement(children as React.ReactElement, { onScrollUpdate: handleChildScrollUpdate })}
          </div>
        )
           : <div>{children}</div>}
      </div>
    </ContainerWithCorners>
  );
}

export default FutureSection;


