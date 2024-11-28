'use client'

import React, {useEffect, useState} from 'react'
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import NumberFlow from '@number-flow/react'
import { achievementsBySvitlana } from '@/constants/achievements'


const Achievements:React.FC = () => {
  const [pageUploaded, setPageUploaded] = useState(false);
  useEffect(() => {
    setPageUploaded(true)
  },[])

  return (
    <div className='py-20 lg:pt-[200px] pb-[96px] 2xl:pb-[100px] container'> 

      <div className='flex flex-col items-center 2xl:flex-row 2xl:justify-center 2xl:items-center gap-8 lg:gap-10 2xl:gap-6 pb-[70px] 2xl:pb-[100px]'>
        <SectionTitle className='text-center' secondDesign={true}>Досягнення</SectionTitle>
        <Image
          src="/assets/images/Experience/star.png"
          alt="star"
          width={83}
          height={83}
          className="h-[96px] w-[96px] lg:h-[87px] lg:w-[87px] 2xl:h-[96px] 2xl:w-[96px]"
        />
      </div>
      <div className='flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-evenly'>
        {
          achievementsBySvitlana.map( (achievement, i) => {
            return (
              <div key={`p_${i}`} className='flex flex-col items-center justify-start pb-[64px] w-full lg:w-1/2 2xl:w-1/4'>
                <NumberFlow value={pageUploaded ? achievement.numberValue : 0} trend={0} suffix='+' className='text-[76px] leading-[91.2px] font-semibold font-second-family p-0 text-center'/>
                <p className='inline-block text-lg leading-[38.4px] font-medium font-second-family text-s-purple text-center pb-4'>{achievement.textValue}</p>
                <p className='inline-block text-m leading-s-24 font-regular font-third-family text-center w-[264px]'>{achievement.text}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Achievements