import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import { motion } from 'framer-motion';

const PurposeSection: React.FC = () => {
  return (
    <section className="bg-white py-20 font-second-family">
      <Container>
        <SectionTitle secondDesign className="mb-6">
          Наша мета
        </SectionTitle>
        <div className="mb-6 w-[280px]">
          <p className="text-md font-semibold uppercase leading-o-120 tracking-s-2 text-black">
            Проєкт створено для взаємної підтримки двох соціальних груп.
          </p>
        </div>
      </Container>
      {/* first star */}
      <div className="">
        <div className="relative h-[168px] w-[168px]">
          <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-gray" />
          <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'linear',
              }}
            >
              <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-s-light-purple" />
            </motion.div>
          </div>
        </div>
        {/* second star */}
        <div className="relative h-[168px] w-[168px]">
          <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-light-purple" />
          <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'linear',
              }}
            >
              <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
