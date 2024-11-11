import React from 'react'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';

export interface FuckUpsSectionProps {
  title: string,
  subtitle: string
}

const FuckUpSection = ({title, subtitle}:FuckUpsSectionProps) => {
  return (
    <div>
        <SectionTitle>{title}</SectionTitle>
        <SubTitle>{subtitle}</SubTitle>
    </div>
  )
}

export default FuckUpSection