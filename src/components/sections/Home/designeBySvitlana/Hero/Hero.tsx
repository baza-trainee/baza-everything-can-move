import { SubTitle } from '@/components/ui/DesignBySvitlna/SubTitle/SubTitle';
import React from 'react';
// import SceneCopy from './Scene';
//import styles from './Hero.module.css';
import SceneMain from './SceneMain';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';

export default function Hero() {
  return (
    //hero
    <section className="pb-[400px] pt-[104px] 2xl:pb-[280px]">
      {/* //items-top */}
      <div className="relative flex flex-wrap">
        <Container>
          <div className="max-w-[535px]">
            <div className="flex items-center">
              <AnimatedTitle
                title="як ми"
                className="mr-8 text-xl !leading-[150%] lg:mr-12 lg:text-2xl 2xl:text-4xl"
                wordClasses={['text-white']}
              />
              <SubTitle />
            </div>
            <AnimatedTitle
              title="анімацію робили"
              className="text-xl !leading-[150%] lg:text-2xl 2xl:text-4xl"
              wordClasses={['text-s-purple']}
            />
          </div>
        </Container>
        <SceneMain />
        {/* <div className="absolute bottom-[-10rem] left-1/2 z-10 hidden opacity-100 transition-opacity duration-500 lg:block">
          <div className="icon-scroll scroll-to-second-section mb-6 h-10 w-6 cursor-pointer rounded-[20px] border border-white xl:mb-12">
            <span className="mx-auto my-2 block h-2 w-0.5 animate-[scroll_3s_ease_infinite] rounded-full bg-white"></span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
