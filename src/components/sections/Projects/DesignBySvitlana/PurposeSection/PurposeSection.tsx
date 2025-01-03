import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import BackgroundComponent from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import StarsComponent from './StarsComponent';

const PurposeSection: React.FC = () => {
  return (
    <BackgroundComponent
      text="Мета"
      xl={276}
      lg={463}
      bg="white"
      isAlwaysOpen
      isNoContainer={true}
    >
      <div className="bg-white pb-20 font-second-family lg:pb-[100px]">
        <Container>
          <AnimatedTitle
            title="Наша мета"
            className="mb-6 lg:mb-[6px]"
            wordClasses={['text-s-purple', 'text-s-purple']}
            colorBg="white"
          />
          <div className="mb-6 w-[280px] lg:mb-0 lg:w-[540px] 2xl:w-[609px]">
            <p className="text-md font-semibold uppercase leading-o-120 tracking-s-2 text-black lg:text-lg lg:font-medium lg:text-s-gray 2xl:text-l 2xl:font-regular 2xl:normal-case 2xl:leading-o-150 2xl:tracking-normal 2xl:text-black">
              Проєкт створено для взаємної підтримки двох соціальних груп.
            </p>
          </div>
        </Container>
        {/* stars div for mobile and tablet1 */}
        <div className="relative mx-auto mb-5 h-[246px] w-[335px] lg:mb-4 lg:h-[413px] lg:w-[630px] 2xl:hidden">
          <StarsComponent />
        </div>
        {/* ------------------- */}
        {/* */}
        <div className="flex flex-col gap-6 px-[18px] lg:flex-row lg:justify-center lg:gap-[90px] lg:px-6 2xl:gap-3 2xl:pl-20 2xl:pr-[54px]">
          <div className="flex w-[280px] gap-[6px] lg:w-[280px] 2xl:mt-[210px] 2xl:w-[300px]">
            <div className="mt-[6px] 2xl:mt-3">
              <ICONS_PURPOSE.RECTANGLE />
            </div>

            <p className="font-third-family text-m font-medium leading-o-150 text-black 2xl:text-l 2xl:font-semibold">
              Випускників ІТ-курсів,&nbsp;
              <span className="font-regular 2xl:block">
                які хочуть застосувати на практиці отримані теоретичні знання.
              </span>
            </p>
          </div>
          {/* stars div for desktop 2*/}
          <div className="mx-auto hidden 2xl:relative 2xl:block 2xl:h-[413px] 2xl:w-[630px]">
            <StarsComponent />
          </div>
          {/* ------------------- */}
          <div className="flex w-[280px] gap-[6px] lg:w-[330px] 2xl:mt-[35px] 2xl:w-[333px]">
            <div className="mt-[6px] 2xl:mt-3">
              <ICONS_PURPOSE.RECTANGLE />
            </div>
            <p className="font-third-family text-m font-medium leading-o-150 text-black 2xl:text-l 2xl:font-semibold">
              Організації соціальної сфери,&nbsp;
              <span className="font-regular">
                які дозволяють команді розробити проєкт неспішно (але якісно).
              </span>
            </p>
          </div>
        </div>
      </div>
    </BackgroundComponent>
  );
};

export default PurposeSection;
