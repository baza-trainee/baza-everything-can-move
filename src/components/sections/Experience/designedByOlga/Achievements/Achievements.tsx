import React from 'react';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import CardsParallax from './CardsParallax';
import ContainerWithCorners from '@/components/ui/DesignByOlga/ContainerWithCorners';

export interface AchievementsSectionProps {
  title: string;
  subtitle: string;
}

const Achievements = ({ title, subtitle }: AchievementsSectionProps) => {
  return (
    <div className="container pb-[100px] lg:pb-20 2xl:pb-10">
      <ContainerWithCorners className="pb-10 lg:pb-0">
        <SectionTitle>{title}</SectionTitle>
        <SubTitle>{subtitle}</SubTitle>
        <CardsParallax />
      </ContainerWithCorners>
    </div>
  );
};

export default Achievements;
