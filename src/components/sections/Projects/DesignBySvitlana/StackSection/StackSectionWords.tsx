import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TechCard from './TechCard';
import { STACK_ARR } from '@/constants/stackArr';
// import DigitalRain from './DigitalRain';
import DigitalRainWords from './DigitalRainWords';

const StackSectionWords: React.FC = () => {
  return (
    <section className="relative h-[1680px] w-full font-third-family font-regular lg:h-[894px] 2xl:h-[834px]">
      {/* Container */}
      {/* <div className="my-auto w-full px-5 lg:px-6 2xl:px-20"> */}
      <div
        className="absolute top-0 h-20 w-full"
        style={{
          background: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 57.08%, rgba(0, 0, 0, 0.257173) 80.1%, rgba(0, 0, 0, 0) 98.1%)`,
        }}
      ></div>
      <DigitalRainWords />
      <div
        className="absolute bottom-0 h-20 w-full"
        style={{
          background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.5) 57.08%, rgba(0, 0, 0, 0.257173) 80.1%, rgba(0, 0, 0, 0) 98.1%)`,
        }}
      ></div>
      <Container className="absolute left-1/2 top-0 -translate-x-1/2 pb-40 pt-20 lg:pb-[100px] lg:pt-20 2xl:pb-[200px]">
        {/* shadow for title with text */}
        <div
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.6814) 71.6%, rgba(0, 0, 0, 0.4) 100%)`,
          }}
          className="absolute left-0 top-[87px] -z-10 h-[220px] w-[375px] rounded-[40%] lg:h-[264px] lg:w-[530px] 2xl:left-5 2xl:top-[91px] 2xl:h-[315px] 2xl:w-[602px]"
        ></div>
        {/* title with text */}
        <div className="mb-10 text-center lg:text-left 2xl:mb-12">
          <div
            className="mb-6 lg:mb-[6px] 2xl:w-[544px]"
            // style={{ backdropFilter: 'blur(200px)' }}
          >
            <SectionTitle secondDesign>
              <span className="text-white">стек</span> технологій
            </SectionTitle>
          </div>

          <div className="w-[320px] text-m leading-o-150 lg:w-[494px] 2xl:w-[483px] 2xl:text-l">
            <p>
              Ми використовуємо технологічні знання для створення програмних
              рішень, які ефективно вирішують задачі проєктів.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[45px] lg:flex-row lg:flex-wrap lg:justify-center lg:gap-[29px] 2xl:flex-row 2xl:gap-[45px]">
          {STACK_ARR.map((item, ind) => (
            <TechCard key={`icon-${ind}`} oneStack={item} />
          ))}
        </div>
      </Container>

      {/* </div> */}
    </section>
  );
};

export default StackSectionWords;
