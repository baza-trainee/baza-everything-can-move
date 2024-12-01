import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import StarsComponent from './StarsComponent';

const PurposeSection: React.FC = () => {
  return (
    <section className="bg-white py-20 font-second-family lg:py-[100px]">
      <Container>
        <SectionTitle secondDesign className="mb-6 lg:mb-[6px]">
          Наша мета
        </SectionTitle>
        <div className="mb-6 w-[280px] lg:mb-0 lg:w-[540px] 2xl:w-[609px]">
          <p className="text-md font-semibold uppercase leading-o-120 tracking-s-2 text-black lg:text-lg lg:font-medium lg:text-s-gray 2xl:text-l 2xl:font-regular 2xl:normal-case 2xl:leading-o-150 2xl:tracking-normal 2xl:text-black">
            Проєкт створено для взаємної підтримки двох соціальних груп.
          </p>
        </div>
      </Container>
      {/* stars div for mobile and tablet1 */}
      <div className="relative mx-auto mb-5 h-[246px] w-[375px] lg:mb-4 lg:h-[413px] lg:w-[630px] 2xl:hidden">
        <StarsComponent />
      </div>
      {/* ------------------- */}
      <Container className="flex flex-col gap-6 lg:flex-row lg:gap-[90px] 2xl:gap-3">
        <div className="flex gap-[6px] 2xl:mt-[210px] 2xl:w-[325px]">
          <div className="mt-[6px] 2xl:mt-3">
            <ICONS_PURPOSE.RECTANGLE />
          </div>

          <p className="leading-s-150 font-third-family text-m font-medium text-black 2xl:text-l 2xl:font-semibold">
            Випускників ІТ-курсів,&nbsp;
            <span className="font-regular">
              які хочуть застосувати на практиці отримані теоретичні знання.
            </span>
          </p>
        </div>
        {/* stars div for desktop 2*/}
        <div className="mx-auto hidden 2xl:relative 2xl:block 2xl:h-[413px] 2xl:w-[630px]">
          <StarsComponent />
        </div>
        {/* ------------------- */}
        <div className="flex gap-[6px] 2xl:mt-[35px] 2xl:w-[292px]">
          <div className="mt-[6px] 2xl:mt-3">
            <ICONS_PURPOSE.RECTANGLE />
          </div>
          <p className="leading-s-150 font-third-family text-m font-medium text-black 2xl:text-l 2xl:font-semibold">
            Організації соціальної сфери,&nbsp;
            <span className="font-regular">
              які дозволяють команді розробити проєкт неспішно (але якісно).
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PurposeSection;
