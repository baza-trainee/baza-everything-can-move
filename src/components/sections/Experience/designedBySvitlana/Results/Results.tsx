'use client';

import React, { useEffect, useState, useRef } from 'react';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import { ICONS } from '@/constants/icons/icons';
import styles from './results.module.css';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import ResultsTags1 from './ResultsTags1';
// import clsx from 'clsx';

const Results: React.FC = () => {

  const tags_group1 = useRef<HTMLDivElement | null >(null);
  // const tags_group2 = useRef<HTMLDivElement | null >(null);
  // const tags_group3 = useRef<HTMLDivElement | null >(null);

  const { x, y } = useFollowPointer(tags_group1);
  // const { x, y } = useFollowPointer(tags_group2);
  // const { x, y } = useFollowPointer(tags_group3);


// console.log(x.get());

  const [hovered, setHovered] = useState<boolean>(false);
  // const [Xdirection, setXdirection] = useState<string>('');
  // const [Ydirection, setYdirection] = useState<string>('');
  const [mouseX, setmouseX] = useState<number>(0);
  const [mouseY, setmouseY] = useState<number>(0);
  // const [mouseXprev, setmouseXprev] = useState<number>(0);
  // const [mouseYprev, setmouseYprev] = useState<number>(0);

  useEffect(() => {
    const resultsBlock = document.getElementById('resultsBlock');
    const tagGroups = document.querySelectorAll(`#${styles.tagGroup}`);
    if (!resultsBlock) return;
    if (!tagGroups) return;


    const tagGroup1 = tagGroups[0] as HTMLDivElement;
    // const tagGroup2 = tagGroups[1] as HTMLDivElement;
    // const tagGroup3 = tagGroups[2] as HTMLDivElement;

    // const handleMouseOver = (event:MouseEvent): void => {
    //   setHovered(true);
    // }
    const handleMouseOver = (event:MouseEvent): void => {
      // setmouseXprev(mouseX)
      // setmouseYprev(mouseY)
      setmouseX(event.clientX)
      setmouseY(event.clientY)
      // const XDistance = (mouseX-mouseXprev).toString()
      // const YDistance = (mouseYprev-mouseY).toString()
      // if (mouseX < mouseXprev) {
      //   setXdirection('left');
      // } else if (mouseX > mouseXprev) {
      //  setXdirection('right');
      // }
      // if (mouseY < mouseYprev) {
      //   setYdirection('top');
      // } else if (mouseY > mouseYprev) {
      //   setYdirection('bottom');
      // }
      
      // tagGroup1.style.left = `${mouseX}px`
      // console.log(mouseX);
      // console.log(XDistance);

    }
      // const screenWidthHalf = window.innerWidth/2;
      // const screenHeightHalf = window.innerHeight/2;
      // const XDistance = (mouseX-mouseXprev).toString()
  // const YDistance = (mouseYprev-mouseY).toString()
  // if(Xdirection === 'right'){
  //   tagGroup1.style.left = `${XDistance}px`
  // }
  // if(Xdirection === 'left'){
    // const moveLeft = screenWidthHalf
    // console.log(mouseX);

    
    // const coeficientArray =[]
    // for(let i = 0; i < 7; i++) {
      // const coeficient = Math.ceil(Math.random() * 9);
    //   coeficientArray.push(coeficient)
    // }
    // const coeficientsArray = Array(6).fill(coeficient)
    // const NegPosCoeficient = Math.random() < 0.5 ? -1 : 1;
    // console.log(coeficient);
    // console.log(coeficientArray);
    // tagGroup1.style.left = `${mouseX/100*7}px`
    // tagGroup1.style.top = `${mouseY/100*7}px`
    // tagGroup2.style.left = `${mouseX/100*5}px`
    // tagGroup2.style.top = `${mouseY/100*8}px`
    // tagGroup3.style.left = `${mouseX/100*4}px`
    // tagGroup3.style.top = `${mouseY/100*10}px`

// console.log(XDistance);
    
    const handleMouseOut = (): void => setHovered(false);

      if (resultsBlock) {
    resultsBlock.addEventListener('mouseover', handleMouseOver);
    // resultsBlock.addEventListener('mousemove', handleMouseMove);
    resultsBlock.addEventListener('mouseout', handleMouseOut);
    }
      return () => {
    resultsBlock.removeEventListener('mouseover', handleMouseOver);
    // resultsBlock.removeEventListener('mousemove', handleMouseMove);
    resultsBlock.removeEventListener('mouseout', handleMouseOut);
      };
  },[hovered, mouseX, mouseY]);


  return (
    <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0} isAlwaysOpen={true} className="2xl:relative" isNoContainer={true} >
      <div id='resultsBlock' className='flex flex-col 2xl:flex-row gap-[26px] w-full pb-20 lg:pb-[100px] 2xl:pb-[200px]'>

        <div className='px-5 lg:px-[26px] 2xl:px-20'>
          <div className="flex items-center justify-start gap-[14px] pb-8 pt-[22px] lg:gap-[69px] lg:pt-[10px] 2xl:gap-[3px] 2xl:pt-[131px]">
            <AnimatedTitle title="Результати" />
            <ICONS.VIOLET_WHITE_STAR_SM className="lg:hidden" />
            <ICONS.VIOLET_WHITE_STAR_LG className="hidden lg:block 2xl:hidden" />
            <ICONS.WHITE_VIOLET_STAR_2XL className="hidden 2xl:block 2xl:translate-y-[-47px]" />
          </div>
          <div className="2xl:relative 2xl:flex 2xl:flex-row 2xl:items-center">
            <p className="w-[318px] pb-1 text-m font-regular leading-6 lg:w-[578px] lg:pb-2 2xl:w-[498px] 2xl:pb-6 2xl:text-l 2xl:leading-s-36 2xl:tracking-tighter">
              Ми тримаємо фокус на уроках та покращенні процесів. Долаючи <br className="lg:block 2xl:hidden" /> труднощі ми розвивали в собі нові навички й покращували вже надбані.
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

        <div id={styles.tags} className='will-change-transform flex justify-start items-center relative w-full h-auto'>
          <div className='h-[355px] w-full relative uppercase'>

          <ResultsTags1/>
        <div id={styles.tags} className='will-change-transform flex justify-start items-center relative w-full h-auto'>
          <div className='h-[355px] w-full relative uppercase'>

            <motion.div id={styles.tagGroup} ref={tags_group1} style={{x,y}}>
              <div id={styles.tagGroup1_1} className='inline-block absolute translate-x-[86px] translate-y-[5px] rotate-[4deg]'>
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Взаємодія
                </div>
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
            </motion.div>

            {/* <motion.div id={styles.tagGroup} className="pointer-events-none h-full w-full will-change-transform" ref={tags_group2} style={{x,y}}>
              <div
                id={styles.tagGroup2_1}
                className="absolute inline-block translate-x-[84px] translate-y-[85px] rotate-[0.04deg]"
              >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Гнучкість
                </div>
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
            </motion.div> */}

            {/* <motion.div id={styles.tagGroup} className="pointer-events-none h-full w-full will-change-transform" ref={tags_group3} style={{x,y}}>
              <div
                id={styles.tagGroup3_1}
                className="absolute inline-block translate-x-[30px] translate-y-[210px] rotate-[1.56deg]"
              >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Системність
                </div>
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
            </motion.div> */}
          </div>
        </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Results;
 