import React from 'react';
import PlanAnimation from './PlanAnimation';
import BackgroundComponent from '@/components/ui/DesignBySvitlna/BackgroundComponent';

function SectionPlans() {
  return (
    <BackgroundComponent text='Плани' bg='s-gray' isAlwaysOpen={true} >
        <div className="relative 2xl:h-[728px]">
        <h2 className="traking-s-2 text-xlg lg:text-[80px] leading-o-120 uppercase">
        Прагнення
        </h2>
          <div className="max-w-[596] 2xl:max-w-[552px] ">
            <div className="text-third-family text-s  2xl:text-l leading-o-150 ">
              <p className="my-4 italic font-light 2xl:font-normal max-w-[596px]">
                “Ми, прагнемо створювати позитивні зміни у світі через
                благодійні проєкти. Наша мета — не лише допомагати рухатись далі
                тим, хто цього потребує, але й надихати інших долучатися до
                добрих справ, навіть не обовʼязково в аналогічному форматі.”
              </p>
              <p className="font-semibold">
                <span className="text-s-purple font-medium 2xl:font-semibold">Ольга,</span> 
                <span className='font-normal'>{' '}засновниця{' '}</span> 
                <span className="text-s-purple font-medium 2xl:font-semibold">Baza Trainee Ukraine</span>
              </p>
            </div>
          </div>
          <PlanAnimation />
        </div>
    </BackgroundComponent>
  );
}

export default SectionPlans;
