'use client';

import React from 'react';
import Image from 'next/image';
import NumberFlow from '@number-flow/react';
import { achievementsBySvitlana } from '@/constants/achievements';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import { useInView } from 'react-intersection-observer';
import Container from '@/components/ui/DesignBySvitlna/Container';

interface AchievementProps {
  numberValue: number;
  textValue: string;
  text: string;
}

const Achievement: React.FC<AchievementProps> = ({
  numberValue,
  textValue,
  text,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="flex max-w-[308px] flex-col items-center justify-stretch pb-[64px] lg:w-1/2 2xl:w-1/4"
    >
      <NumberFlow
        value={inView ? numberValue : 0}
        trend={0}
        suffix="+"
        transformTiming={{ duration: 750, easing: 'ease' }}
        spinTiming={{ duration: 750, easing: 'ease' }}
        opacityTiming={{ duration: 350, easing: 'ease-out' }}
        className="p-0 text-center font-second-family text-[76px] font-semibold leading-[91.2px]"
      />
      <p className="inline-block pb-4 text-center font-second-family text-lg font-medium leading-[38.4px] text-s-purple uppercase">
        {textValue}
      </p>
      <p className="inline-block w-[264px] text-center font-third-family text-m font-regular leading-s-24">
        {text}
      </p>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <div className="py-20 pb-[96px] lg:pt-[200px] 2xl:pb-[100px]">
      <Container>
        <div className="flex flex-col items-center gap-8 pb-[70px] lg:gap-10 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:gap-6 2xl:pb-[100px]">
          <AnimatedTitle title="Досягнення" className="text-center" />
          <Image
            src="/assets/images/Experience/star.png"
            alt="star"
            width={83}
            height={83}
            className="h-[96px] w-[96px] lg:h-[87px] lg:w-[87px] 2xl:h-[96px] 2xl:w-[96px]"
          />
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-between ">
          {achievementsBySvitlana.map((achievement, i) => (
            <Achievement
              key={`p_${i}`}
              numberValue={achievement.numberValue}
              textValue={achievement.textValue}
              text={achievement.text}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Achievements;
