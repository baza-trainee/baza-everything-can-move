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
    <ContainerWithCorners className='mt-[40px]'>
      <SectionTitle className='text-xl'>{title}</SectionTitle>
      <SubTitle>{subtitle}</SubTitle>
      <div className='flex py-[32px]'>
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