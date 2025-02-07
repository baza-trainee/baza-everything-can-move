import Container from '@/components/ui/DesignBySvitlna/Container';
import React from 'react';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

function SectionInitiative() {
  return (
    <section className="py-[80px] lg:py-[100px] 2xl:mt-[30px] 2xl:py-[80px]">
      <Container>
        <div className="mx-auto max-w-[522px] grid-cols-2 2xl:grid 2xl:w-full 2xl:max-w-full 2xl:gap-x-[140px] 2xl:pl-7">
          <div className="mb-4 text-center 2xl:order-2 2xl:text-left">
            <AnimatedTitle
              title="Соціальні ініціативи"
              wordClasses={['text-white', 'text-s-purple']}
              className="text-center 2xl:text-left"
            />
          </div>
          <video
            className="row-span-2 mb-[60px] mt-[60px] w-full rounded-2xl lg:mt-[80px] 2xl:mb-auto 2xl:mt-[105px] 2xl:w-[575px]"
            src="/assets/videos/video.mov"
            loop
            autoPlay
            muted
            controls
            playsInline
            webkit-playsinline
          />
          <div className="font-third-family text-m leading-o-150 2xl:order-3 2xl:text-l">
            <p className="mb-2">
              Сміливо змінюємо сучасний шлях входу в ІТ та плануємо
              трансформувати його й надалі шляхом добрих справ. Благодійні
              проєкти, розробки та реалізації сайтів, мобільних застосунків,
              підтримка добрих справ.
            </p>
            <p>
              Ми віримо в силу спільних зусиль для створення позитивних змін у
              суспільстві. 
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionInitiative;
