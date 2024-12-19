import Container from '@/components/ui/DesignBySvitlna/Container';
import React from 'react';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

function SectionInitiative() {
  return (
    <section className='py-[80px] lg:py-[100px] 2xl:py-[80px] 2xl:mt-[30px]'>
      <Container>
        <div className='max-w-[522px] mx-auto 2xl:pl-7 2xl:w-full 2xl:max-w-full 2xl:grid grid-cols-2 2xl:gap-x-[140px]'>
        <div className="2xl:order-2 mb-4 text-center 2xl:text-left">
        <AnimatedTitle title="Соціальні ініціативи" wordClasses={['text-white','text-s-purple']} className='text-center 2xl:text-left'/>
        </div>
        <video className='w-full 2xl:w-[575px]  rounded-2xl mt-[60px] mb-[60px] 2xl:mt-[105px] 2xl:mb-auto lg:mt-[80px] row-span-2' src="/assets/videos/video.mov" loop autoPlay controls/>
          <div className="font-third-family text-m leading-o-150 2xl:text-l 2xl:order-3">
          <p className='mb-2'  >
            Сміливо змінюємо сучасний шлях входу в ІТ та плануємо трансформувати
            його й надалі шляхом добрих справ. Благодійні проєкти, розробки та
            реалізації сайтів, мобільних застосунків, підтримка добрих справ.
          </p>
          <p>
          Ми віримо в силу спільних зусиль для створення позитивних змін у суспільстві. 
          </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionInitiative;
