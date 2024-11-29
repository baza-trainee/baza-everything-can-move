import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import { motion } from 'framer-motion';

const PurposeSection: React.FC = () => {
  return (
    <section className="lg-[100px] bg-white py-20 font-second-family">
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
      {/* stars div 1 */}
      <div className="relative mx-auto mb-5 h-[246px] w-[375px] lg:mb-4 lg:h-[413px] lg:w-[630px] 2xl:hidden">
        {/* first star */}
        <div className="absolute left-8 top-10 h-[168px] w-[168px] lg:left-11 lg:top-16 lg:h-[282px] lg:w-[282px]">
          <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-gray lg:h-[282px] lg:w-[282px]" />
          <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[84px]">
            <motion.div
              whileInView={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
            >
              <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-s-light-purple lg:h-[84px] lg:w-[84px]" />
            </motion.div>
          </div>
        </div>
        {/* second star */}
        <div className="absolute left-[180px] top-[18px] h-[168px] w-[168px] lg:left-[300px] lg:top-[30px] lg:h-[282px] lg:w-[282px]">
          <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-light-purple lg:h-[282px] lg:w-[282px]" />
          <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[84px]">
            <motion.div
              whileInView={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
            >
              <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-white lg:h-[84px] lg:w-[84px]" />
            </motion.div>
          </div>
        </div>
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
        {/* stars div 2*/}
        <div className="mx-auto hidden 2xl:relative 2xl:block 2xl:h-[413px] 2xl:w-[630px]">
          {/* first star */}
          <div className="absolute left-8 top-10 h-[168px] w-[168px] lg:left-11 lg:top-16 lg:h-[282px] lg:w-[282px]">
            <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-gray lg:h-[282px] lg:w-[282px]" />
            <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[84px]">
              <motion.div
                whileInView={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                }}
              >
                <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-s-light-purple lg:h-[84px] lg:w-[84px]" />
              </motion.div>
            </div>
          </div>
          {/* second star */}
          <div className="absolute left-[180px] top-[18px] h-[168px] w-[168px] lg:left-[300px] lg:top-[30px] lg:h-[282px] lg:w-[282px]">
            <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-light-purple lg:h-[282px] lg:w-[282px]" />
            <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[84px]">
              <motion.div
                whileInView={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                }}
              >
                <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-white lg:h-[84px] lg:w-[84px]" />
              </motion.div>
            </div>
          </div>
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
