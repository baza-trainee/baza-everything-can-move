import React from 'react';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import TechCard from './TechCard';
import { STACK_ARR } from '@/constants/stackArr';

const StackSection: React.FC = () => {
  return (
    <section className="w-full pb-40 pt-20 font-third-family font-regular lg:pb-[100px] lg:pt-20 2xl:pb-[200px]">
      {/* Container */}
      {/* <div className="my-auto w-full px-5 lg:px-6 2xl:px-20"> */}
      <Container>
        <div className="mb-10 text-center lg:text-left 2xl:mb-12">
          <div className="mb-6 lg:mb-[6px] 2xl:w-[544px]">
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

export default StackSection;
