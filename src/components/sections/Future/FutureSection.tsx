import SectionSubtitle from '@/components/ui/SectionSubtitle/SectionSubtitle';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react'
export interface FutureSectionProps {
  title: string,
  subtitle: string
  children: React.ReactNode
  // animationComponent: React.FC<{ animationRef: React.RefObject<HTMLDivElement> }>; 
}

function FutureSection({ title, subtitle, children }: FutureSectionProps) {
  return (
    <div className='py-4'>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>      
      <div className='flex my-[32px]'>
        <div className='grow'>
hfsohfovsho
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FutureSection