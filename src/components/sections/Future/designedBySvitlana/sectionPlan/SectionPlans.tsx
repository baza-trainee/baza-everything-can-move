import React from 'react';
import PlanAnimation from './PlanAnimation';
import BackgroundComponent from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTilte';

function SectionPlans() {
  return (
    <BackgroundComponent text="Плани" bg="s-gray" isAlwaysOpen={true}>
      <div className="relative 2xl:h-[728px]">
        <AnimatedTitle title="Прагнення" />
        <div className="max-w-[596] 2xl:max-w-[552px]">
          <div className="text-third-family text-s leading-o-150 2xl:text-l">
            <p className="font-light 2xl:font-normal my-4 max-w-[596px] italic">
              “Ми, прагнемо створювати позитивні зміни у світі через благодійні
              проєкти. Наша мета — не лише допомагати рухатись далі тим, хто
              цього потребує, але й надихати інших долучатися до добрих справ,
              навіть не обовʼязково в аналогічному форматі.”
            </p>
            <p className="font-semibold">
              <span className="font-medium text-s-purple 2xl:font-semibold">
                Ольга,
              </span>
              <span className="font-normal"> засновниця </span>
              <span className="font-medium text-s-purple 2xl:font-semibold">
                Baza Trainee Ukraine
              </span>
            </p>
          </div>
        </div>
        <PlanAnimation />
      </div>
    </BackgroundComponent>
  );
}

export default SectionPlans;
