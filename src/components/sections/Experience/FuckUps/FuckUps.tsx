import React from 'react'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import WiresAnimationComponent from './WiresAnimation'

export interface FuckUpsSectionProps {
  title: string,
  subtitle: string
}

const FuckUpSection = ({title, subtitle}:FuckUpsSectionProps) => {
  return (
    <div>
        <div className='container'>
            <SectionTitle>{title}</SectionTitle>
            <SubTitle>{subtitle}</SubTitle>
        </div>
        <WiresAnimationComponent />
    </div>
  )
}

export default FuckUpSection