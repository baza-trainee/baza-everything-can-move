import React from 'react'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import BubblesBlock from './Bubbles/BubblesBlock';
import Achievements from './Achievements/Achievements';

export interface ExperienceSectionProps {
  title: string,
  subtitle: string
//   children: React.ReactNode
//   AnimationComponent: React.FC<{ animationRef: React.RefObject<HTMLDivElement> }>;
}

const ExperienceSection = ({title, subtitle}:ExperienceSectionProps) => {
  return (
    <div>
        <SectionTitle>{title}</SectionTitle>
        <SubTitle>{subtitle}</SubTitle>
        <BubblesBlock/>
        <Achievements/>
    </div>
  )
}

export default ExperienceSection