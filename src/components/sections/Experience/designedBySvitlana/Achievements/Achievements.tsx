import React from 'react'
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import NumberFlow from "@number-flow/react";
import { achievementsBySvitlana } from '@/constants/achievements';

const Achievements = () => {
  return (
    <div className='py-20 lg:pt-[200px] pb-[96px] 2xl:pb-[100px]'> 

      <div className='flex flex-col items-center 2xl:flex-row 2xl:justify-center 2xl:items-center gap-8 lg:gap-10 2xl:gap-6'>
        <SectionTitle className='text-center' secondDesign={true}>Досягнення</SectionTitle>
        <Image
          src="/assets/images/Experience/star.png"
          alt="star"
          width={83}
          height={83}
          className="h-[96px] w-[96px] lg:h-[87px] lg:w-[87px] 2xl:h-[96px] 2xl:w-[96px]"
        />
      </div>
      <div>
        {
          achievementsBySvitlana.map( (achievement, i) => {
            return <NumberFlow key={`p_${i}`} value={achievement.numberValue} {...achievement}/>
          })
        }
      </div>

    </div>
  )
}

export default Achievements