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
        <div className="mb-6 w-[280px] lg:mb-0 lg:w-[540px]">
          <p className="text-md font-semibold uppercase leading-o-120 tracking-s-2 text-black lg:text-lg lg:text-s-gray">
            Проєкт створено для взаємної підтримки двох соціальних груп.
          </p>
        </div>
      </Container>
      {/* stars div */}
      <div className="relative mx-auto mb-5 h-[246px] w-[375px] lg:mb-4 lg:h-[413px] lg:w-[630px]">
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
      <Container className="flex flex-col gap-6 lg:flex-row lg:gap-[90px]">
        <div className="flex gap-[6px]">
          <div className="mt-[6px]">
            {' '}
            <ICONS_PURPOSE.RECTANGLE />
          </div>

          <p className="leading-s-150 font-third-family font-medium text-black">
            Випускників ІТ-курсів,&nbsp;
            <span className="font-regular">
              які хочуть застосувати на практиці отримані теоретичні знання.
            </span>
          </p>
        </div>
        <div className="flex gap-[6px]">
          <div className="mt-[6px]">
            <ICONS_PURPOSE.RECTANGLE />
          </div>
          <p className="leading-s-150 font-third-family font-medium text-black">
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
