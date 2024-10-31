'use client'
import SectionSubtitle from '@/components/ui/SectionSubtitle';
import SectionTitle from '@/components/ui/SectionTitle';
import {useRef} from 'react'
export interface FutureSectionProps {
  title: string,
  subtitle: string
  children: React.ReactNode
  AnimationComponent: React.FC<{ animationRef: React.RefObject<HTMLDivElement> }>;
}

function FutureSection({ title, subtitle, AnimationComponent, children }: FutureSectionProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  return (
    <div className='pb-4 relative mt-[40px]'>
      <img src="/assets/icons/corner.svg" alt="corner" width='16' height='16' loading="lazy" decoding="async" data-nimg="1" className='absolute bottom-0 left'/>
      <img src="/assets/icons/corner.svg" alt="corner" width='16' height='16' loading="lazy" decoding="async" data-nimg="1" className='absolute top-0 right-0 rotate-180'/>
      <SectionTitle className='text-xl'>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>      
      <div className='flex my-[32px]'>
      <div className='grow' ref={animationRef} >
          <AnimationComponent animationRef={animationRef} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FutureSection