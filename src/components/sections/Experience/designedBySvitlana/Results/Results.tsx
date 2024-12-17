'use client';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
// import Bubbles3D from './Bubbles3D';
import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import { ICONS } from '@/constants/icons/icons';
import styles from './results.module.css';
// import clsx from 'clsx';


const Results = () => {
  useEffect(() => {
    const resultsBlock = document.getElementById('resultsBlock');
    if (!resultsBlock) return;

    //  console.log(resultsBlock);

    //       resultsBlock.onmouseover = function() {

    //  }

    //  resultsBlock.addEventListener('click', () =>{

    // resultsBlock.addEventListener('mouseover', mouseOverHandler);
    // resultsBlock.addEventListener('mouseout', () => {
    //   resultsBlock.removeEventListener('mouseover', mouseOverHandler);
    // });
    //  })

    //     function mouseOverHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    //       const screenWidthHalf = window.innerWidth/2;
    //       const screenHeightHalf = window.innerHeight/2;
    //       let Xdirection = ""
    //       let Ydirection = ""
    //       const mouseX = e.clientX
    //       const mouseY = e.clientY
    //       if (mouseX < screenWidthHalf) {
    //         Xdirection = "left"
    //       } else if (mouseX > screenWidthHalf) {
    //         Xdirection = "right"
    //       }
    //       if (mouseY < screenHeightHalf) {
    //         Ydirection = "top"
    //       } else if (mouseY > screenHeightHalf) {
    //         Ydirection = "bottom"
    //       }
    //       console.log('Xdirection', Xdirection);
    //       console.log('Ydirection', Ydirection);
    // }

    // const tags = document.querySelector(`#${styles.tags}`)
    // const resultsBlock = document.querySelector(`#${styles.resultsBlock}`)
    // if (!tags) return;
    // if (!resultsBlock) return;
    // const MAX_DISTANCE = 200

    // function clamp(v, min, max) {
    //   return Math.min(Math.max(v, min), max)
    // }
    // function remap(v, a, b, c, d) {
    //   return ((v - a) / (b - a)) * (d - c) + c
    // }

    // const rect = tags.getBoundingClientRect()
    // const tagsX = rect.left + rect.width / 2
    // const tagsY = rect.top + rect.height / 2

    // const x = boxX - mouseX
    // const y = boxY - mouseY
    // const distance = Math.sqrt(x * x + y * y)

    // const progress = distance / MAX_DISTANCE
    // const clampedProgress = clamp(progress, 0, 1)
    // const inverseProgress = 1 - clampedProgress
    // const scale = remap(inverseProgress, 0, 1, 1, 2)

    // tags.style.transform = `scale(${scale})`
  }, []);

const Results:React.FC = () => {
  
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const resultsBlock = document.getElementById('resultsBlock');
    const tagGroups = document.querySelectorAll(`#${styles.tagGroup}`);
    if (!resultsBlock) return;
    if (!tagGroups) return;

    const tagGroup1 = tagGroups[0]
    // const tagGroup2 = tagGroups[1]
    // const tagGroup3 = tagGroups[2]
    // console.log(tagGroup1);
    // console.log(tagGroup2);
    // console.log(tagGroup3);

    const handleMouseOver = (event:MouseEvent): void => {
      setHovered(true);
      const screenWidthHalf = window.innerWidth/2;
      const screenHeightHalf = window.innerHeight/2;
      // let Xdirection = ""
      // let Ydirection = ""
      const mouseX = event.clientX
      const mouseY = event.clientY
      if (mouseX < screenWidthHalf) {
        // Xdirection = "left";
        tagGroup1.classList.add('transition-transform');
      } else if (mouseX > screenWidthHalf) {
        // Xdirection = "right"
      }
      if (mouseY < screenHeightHalf) {
        // Ydirection = "top"
      } else if (mouseY > screenHeightHalf) {
        // Ydirection = "bottom"
      }
      // console.log('Xdirection', Xdirection); 
      // console.log('Ydirection', Ydirection); 
    }
    const handleMouseOut = (): void => setHovered(false);

      if (resultsBlock) {
    resultsBlock.addEventListener('mouseover', handleMouseOver);
    resultsBlock.addEventListener('mouseout', handleMouseOut);
    }
      return () => {
    resultsBlock.removeEventListener('mouseover', handleMouseOver);
    resultsBlock.removeEventListener('mouseout', handleMouseOut);
      };
  },[hovered]);




  return (

    <Background
      text="РЕЗУЛЬТАТИ"
      bg="s-gray"
      xl={0}
      isAlwaysOpen={true}
      className="2xl:relative"
    >
      <div
        id={styles.resultsBlock}
        className="flex flex-col gap-[26px] 2xl:flex-row"
      >



    <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0}  isAlwaysOpen={false} className='2xl:relative'>

      <div id='resultsBlock' className='flex flex-col 2xl:flex-row gap-[26px]'>

        <div>
          <div className="flex items-center justify-start gap-[14px] pb-8 pt-[22px] lg:gap-[69px] lg:pt-[10px] 2xl:gap-[3px] 2xl:pt-[131px]">
            <SectionTitle className="text-left" secondDesign={true}>
              Результати
            </SectionTitle>
            <ICONS.VIOLET_WHITE_STAR_SM className="lg:hidden" />
            <ICONS.VIOLET_WHITE_STAR_LG className="hidden lg:block 2xl:hidden" />
            <ICONS.WHITE_VIOLET_STAR_2XL className="hidden 2xl:block 2xl:translate-y-[-47px]" />
          </div>
          <div className="2xl:relative 2xl:flex 2xl:flex-row 2xl:items-center">
            <p className="w-[318px] pb-1 text-m font-regular leading-6 lg:w-[578px] lg:pb-2 2xl:w-[498px] 2xl:pb-6 2xl:text-l 2xl:leading-s-36 2xl:tracking-tighter">
              Ми тримаємо фокус на уроках та покращенні процесів. Долаючи
              <br className="lg:block 2xl:hidden" /> труднощі ми розвивали в
              собі нові навички й покращували вже надбані.
            </p>
            <ICONS.ARROW_2XL className="hidden 2xl:block 2xl:translate-x-[-170px] 2xl:translate-y-[-15px]" />
          </div>
          <ICONS.VIOLET_WHITE_STAR_LG className="hidden 2xl:block" />
          <div className="flex flex-row gap-[52px] pl-10 pt-1 lg:gap-[112px] lg:pl-[110px] lg:pt-2 2xl:hidden">
            <ICONS.WHITE_VIOLET_STAR_SM className="lg:hidden" />
            <ICONS.ARROW_SM className="lg:hidden" />
            <ICONS.WHITE_VIOLET_STAR_LG className="hidden lg:block 2xl:hidden" />
            <ICONS.ARROW_LG className="hidden lg:block 2xl:hidden" />
          </div>
        </div>
        <div
          id={styles.tags}
          className="relative flex h-auto w-full items-center justify-start will-change-transform"
        >
          <div className="relative h-[355px] w-full uppercase">
            <div
              id={styles.tagGroup1}
              className="pointer-events-none h-full w-full will-change-transform"
            >
              <div
                id={styles.tagGroup1_1}
                className="absolute inline-block translate-x-[86px] rotate-[8deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Взаємодія
                </div>

        <div id={styles.tags} className='will-change-transform flex justify-start items-center relative w-full h-auto'>
          <div className='h-[355px] w-full relative uppercase'>
            <div id={styles.tagGroup} className='will-change-transform pointer-events-none w-full h-full'>
              <div id={styles.tagGroup1_1} className='inline-block absolute translate-x-[86px] rotate-[8deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Взаємодія</div>
              </div>
              <div
                id={styles.tagGroup1_2}
                className="absolute inline-block translate-x-[195px] translate-y-[235px] -rotate-[4deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Лідерство
                </div>
              </div>
              <div
                id={styles.tagGroup1_3}
                className="absolute inline-block translate-x-[25px] translate-y-[140px] -rotate-[5deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Стратегія
                </div>
              </div>
            </div>
            <div
              id={styles.tagGroup2}
              className="pointer-events-none h-full w-full will-change-transform"
            >
              <div
                id={styles.tagGroup2_1}
                className="absolute inline-block translate-x-[84px] translate-y-[85px] rotate-[0.04deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Гнучкість
                </div>
            <div id={styles.tagGroup} className='will-change-transform pointer-events-none w-full h-full'>
              <div id={styles.tagGroup2_1} className='inline-block absolute translate-x-[84px] translate-y-[85px] rotate-[0.04deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Гнучкість</div>
              </div>
              <div
                id={styles.tagGroup2_2}
                className="absolute inline-block translate-x-[146px] translate-y-[55px] rotate-[12deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Колаборація
                </div>
              </div>
              <div
                id={styles.tagGroup2_3}
                className="absolute inline-block translate-x-[63px] translate-y-[270px] rotate-[6deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Креативність
                </div>
              </div>
            </div>
            <div
              id={styles.tagGroup3}
              className="pointer-events-none h-full w-full will-change-transform"
            >
              <div
                id={styles.tagGroup3_1}
                className="absolute inline-block translate-x-[30px] translate-y-[210px] rotate-[1.56deg]"
              >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Системність
                </div>
            <div id={styles.tagGroup} className='will-change-transform pointer-events-none w-full h-full'>
              <div id={styles.tagGroup3_1} className='inline-block absolute translate-x-[30px] translate-y-[210px] rotate-[1.56deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-black text-white hover:bg-s-light-purple duration-300 rounded border border-white'>Системність</div>
              </div>
              <div
                id={styles.tagGroup3_2}
                className="absolute inline-block translate-x-[155px] translate-y-[172px]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Емпатія
                </div>
              </div>
              <div
                id={styles.tagGroup3_3}
                className="absolute inline-block translate-x-[5px] translate-y-[45px] -rotate-[12deg]"
              >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Аналітика
                </div>
              </div>
              <div
                id={styles.tagGroup3_4}
                className="absolute inline-block translate-x-[175px] translate-y-[125px] rotate-[6deg]"
              >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Ефективність
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Results;
