import React from 'react';
import Container from '../../../../ui/DesignBySvitlna/Container';
import PlanAnimation from './PlanAnimation';

function SectionPlans() {
  return (
    <section>
      <Container>
        <div className="relative h-[828px]">
          <h3>Плани</h3>
          <PlanAnimation />
          <div className="max-w-[596] 2xl:max-w-[552px]">
            <div className="text-third-family text-l leading-o-150">
              <p className="mb-2 italic 2xl:mb-1">
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
        </div>
      </Container>
    </section>
  );
}

export default SectionPlans;
