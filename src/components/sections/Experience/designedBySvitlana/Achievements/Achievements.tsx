'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import Image from 'next/image';
import NumberFlow from '@number-flow/react';
import { achievementsBySvitlana } from '@/constants/achievements';

const Achievements: React.FC = () => {
  const [pageUploaded, setPageUploaded] = useState(false);
  useEffect(() => {
    setPageUploaded(true);
  }, []);

  return (
    <div className="container py-20 pb-[96px] lg:pt-[200px] 2xl:pb-[100px]">
      <div className="flex flex-col items-center gap-8 pb-[70px] lg:gap-10 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:gap-6 2xl:pb-[100px]">
        <SectionTitle className="text-center" secondDesign={true}>
          Досягнення
        </SectionTitle>
        <Image
          src="/assets/images/Experience/star.png"
          alt="star"
          width={83}
          height={83}
          className="h-[96px] w-[96px] lg:h-[87px] lg:w-[87px] 2xl:h-[96px] 2xl:w-[96px]"
        />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-evenly">
        {achievementsBySvitlana.map((achievement, i) => {
          return (
            <div
              key={`p_${i}`}
              className="flex w-full flex-col items-center justify-start pb-[64px] lg:w-1/2 2xl:w-1/4"
            >
              <NumberFlow
                value={pageUploaded ? achievement.numberValue : 0}
                trend={0}
                suffix="+"
                className="p-0 text-center font-second-family text-[76px] font-semibold leading-[91.2px]"
              />
              <p className="inline-block pb-4 text-center font-second-family text-lg font-medium leading-[38.4px] text-s-purple">
                {achievement.textValue}
              </p>
              <p className="inline-block w-[264px] text-center font-third-family text-m font-regular leading-s-24">
                {achievement.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
