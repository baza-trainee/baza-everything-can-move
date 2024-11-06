'use client'
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import { useRef } from 'react'
export interface FutureSectionProps {
  title: string,
  subtitle: string
  children: React.ReactNode
  AnimationComponent: React.FC<{ animationRef: React.RefObject<HTMLDivElement> }>;
}

function FutureSection({ title, subtitle, AnimationComponent, children }: FutureSectionProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  return (
    <ContainerWithCorners className='mt-[54px] lg:mt-[80px]xl:mt-[40px]'>
      <SectionTitle>{title}</SectionTitle>
      <SubTitle>{subtitle}</SubTitle>
      <div className='flex flex-col lg:flex-row py-[32px] justify-items-center lg:items-center'>
        <div className='grow' ref={animationRef} >
          <AnimationComponent animationRef={animationRef} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </ContainerWithCorners>
  )
}

export default FutureSection
