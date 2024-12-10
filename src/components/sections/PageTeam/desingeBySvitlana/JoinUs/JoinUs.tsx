import BackgroundComponent from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import SubTitleBtn from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleBtn';
import { motion } from 'framer-motion';

import React, { ReactNode, useRef } from 'react';
import Ball from './Ball';

function JoinUs() {
  const dragArea = useRef(null);

  const MotionDiv = ({ children }: { children: ReactNode }) => {
    return (
      <motion.div
        className="absolute"
        dragElastic
        dragConstraints={dragArea}
        drag
      >
        {children}
      </motion.div>
    );
  };
  return (
    <BackgroundComponent
      isAlwaysOpen
      text="соціальні мережі"
      bg="white"
      className="relative z-20 h-[772px] lg:h-[975px] 2xl:h-[788px]"
    >
      <motion.div
        aria-hidden
        ref={dragArea}
        className="absolute -top-[100px] left-0 h-[772px] w-full lg:h-[975px] 2xl:h-[788px]"
      ></motion.div>
      <motion.div className="font-third-family font-semibold text-black">
        <h2 className="flex text-xlg uppercase leading-o-150 tracking-custom-tight text-s-purple lg:flex-col lg:text-3xl 2xl:flex-row 2xl:gap-12">
          <span> Приєднуйся </span>
          <div className="flex gap-12">
            <span className="hidden lg:block"> до </span>
            <span className="hidden lg:block">нас</span>
          </div>
        </h2>

        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <p className="text-md uppercase leading-o-120 tracking-custom-tight lg:text-lg lg:font-medium">
            хочеш?
          </p>
          <SubTitleBtn
            color="black"
            subTitleArr={[
              'приєднатися до команди',
              'здобувати досвід',
              'створювати продукти',
              'бути спонсором',
              'бути замовником',
            ]}
          />
        </div>
        <p className="mt-6 font-second-family text-m font-regular leading-o-150 2xl:text-l">
          Підписуйся, слідкуй за нами та пиши!
        </p>
      </motion.div>
      <MotionDiv>
        <Ball typeBall="stars" colorSchemaStars="white" />
      </MotionDiv>
      <MotionDiv>
        <Ball typeBall="stars" colorSchemaStars="purple" />
      </MotionDiv>
      <MotionDiv>
        <Ball
          typeBall="socialLink"
          colorSchemaStars="purple"
          linkSocial="facebook"
        />
      </MotionDiv>
      <MotionDiv>
        <Ball
          typeBall="socialLink"
          colorSchemaStars="purple"
          linkSocial="linkedin"
        />
      </MotionDiv>
      <MotionDiv>
        <Ball
          typeBall="socialLink"
          colorSchemaStars="purple"
          linkSocial="telegram"
        />
      </MotionDiv>
    </BackgroundComponent>
  );
}

export default JoinUs;
