import React from 'react';
import PlanAnimation from './PlanAnimation';
import Background from '@/components/ui/DesignBySvitlna/Background';

function SectionPlans() {
  return (
    <Background text='Плани' bg='s-gray' >
        <div className="relative 2xl:h-[828px]">
          <h3>Плани</h3>
          <div className="max-w-[596] 2xl:max-w-[552px]">
            <div className="text-third-family text-s lg:text-l leading-o-150">
              <p className="mb-3 italic 2xl:mb-2">
                “Ми, прагнемо створювати позитивні зміни у світі через
                благодійні проєкти. Наша мета — не лише допомагати рухатись далі
                тим, хто цього потребує, але й надихати інших долучатися до
                добрих справ, навіть не обовʼязково в аналогічному форматі.”
              </p>
              <p className="font-semibold">
                <span className="text-s-purple">Ольга</span>, засновниця{' '}
                <span className="text-s-purple">Baza Trainee Ukraine</span>
              </p>
            </div>
          </div>
          <PlanAnimation />
        </div>
    </Background>
  );
}

export default SectionPlans;
