'use client'

import { useEffect} from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
// import Bubbles3D from './Bubbles3D';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import { ICONS } from '@/constants/icons/icons';
import styles from "./results.module.css";
// import clsx from 'clsx';

// interface MouseOverProps {
//   onMouseOver: (event: React.MouseEvent<HTMLDivElement>) => void;
// }

const Results = () => {


  useEffect(() => {
    const tags = document.querySelector(`#${styles.tags}`)
    const resultsBlock = document.querySelector(`#${styles.resultsBlock}`)
    if (!tags) return;
    if (!resultsBlock) return;
    // const MAX_DISTANCE = 200

    // function clamp(v, min, max) {
    //   return Math.min(Math.max(v, min), max)
    // }
    // function remap(v, a, b, c, d) {
    //   return ((v - a) / (b - a)) * (d - c) + c
    // }
//     resultsBlock.addEventListener('mousemove', mouseOverHandler);
// function mouseOverHandler(onMouseOver:MouseOverProps ){

// }
      // const mouseX = e.clientX
      // const mouseY = e.clientY
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
  },[]);
  
  return (
    <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0} isContainer={true} className='2xl:relative'>
      <div id={styles.resultsBlock}  className='flex flex-col 2xl:flex-row gap-[26px]'>
        <div>
          <div className='flex justify-start items-center gap-[14px] pb-8 lg:gap-[69px] 2xl:gap-[3px] pt-[22px] lg:pt-[10px] 2xl:pt-[131px]'>
            <SectionTitle  className='text-left' secondDesign={true}>Результати</SectionTitle>
            <ICONS.VIOLET_WHITE_STAR_SM className='lg:hidden'/>
            <ICONS.VIOLET_WHITE_STAR_LG className='hidden lg:block 2xl:hidden'/>
            <ICONS.WHITE_VIOLET_STAR_2XL className='hidden 2xl:block 2xl:translate-y-[-47px]'/>
          </div>
          <div className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:relative'>
            <p className='text-m leading-6 font-regular w-[318px] lg:w-[578px] 2xl:w-[498px] pb-1 lg:pb-2 2xl:pb-6 2xl:text-l 2xl:leading-s-36 2xl:tracking-tighter'>Ми тримаємо фокус на уроках та покращенні процесів. Долаючи<br className='lg:block 2xl:hidden'/> труднощі ми розвивали в собі нові навички й покращували вже надбані.</p>
            <ICONS.ARROW_2XL className='hidden 2xl:block 2xl:translate-x-[-170px] 2xl:translate-y-[-15px]'/>
          </div>
          <ICONS.VIOLET_WHITE_STAR_LG  className='hidden 2xl:block'/>
          <div className='flex flex-row pt-1 lg:pt-2 pl-10 gap-[52px] lg:pl-[110px] lg:gap-[112px] 2xl:hidden'>
            <ICONS.WHITE_VIOLET_STAR_SM className='lg:hidden'/>
            <ICONS.ARROW_SM className='lg:hidden'/>
            <ICONS.WHITE_VIOLET_STAR_LG className='hidden lg:block 2xl:hidden'/>
            <ICONS.ARROW_LG className='hidden lg:block 2xl:hidden'/>
          </div>
        </div>
        <div id={styles.tags} className='will-change-transform flex justify-start items-center relative w-full h-auto'>
          <div className='h-[355px] w-full relative uppercase'>
            <div id={styles.tagGroup1} className='will-change-transform pointer-events-none w-full h-full'>
              <div id={styles.tagGroup1_1} className='inline-block absolute translate-x-[86px] rotate-[8deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Взаємодія</div>
              </div>
              <div id={styles.tagGroup1_2} className='inline-block absolute translate-x-[195px] translate-y-[235px] -rotate-[4deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Лідерство</div>
              </div>
              <div id={styles.tagGroup1_3} className='inline-block absolute translate-x-[25px] translate-y-[140px] -rotate-[5deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Стратегія</div>
              </div>
            </div>
            <div id={styles.tagGroup2} className='will-change-transform pointer-events-none w-full h-full'>
              <div id={styles.tagGroup2_1} className='inline-block absolute translate-x-[84px] translate-y-[85px] rotate-[0.04deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Гнучкість</div>
              </div>
              <div id={styles.tagGroup2_2} className='inline-block absolute translate-x-[146px] translate-y-[55px] rotate-[12deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Колаборація</div>
              </div>
              <div id={styles.tagGroup2_3} className='inline-block absolute translate-x-[63px] translate-y-[270px] rotate-[6deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Креативність</div>
              </div>
            </div>
            <div id={styles.tagGroup3} className='will-change-transform pointer-events-none w-full h-full'>
              <div id={styles.tagGroup3_1} className='inline-block absolute translate-x-[30px] translate-y-[210px] rotate-[1.56deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-black text-white hover:bg-s-light-purple duration-300 rounded border border-white'>Системність</div>
              </div>
              <div id={styles.tagGroup3_2} className='inline-block absolute translate-x-[155px] translate-y-[172px]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-white text-black hover:bg-s-light-purple hover:text-white duration-300 rounded'>Емпатія</div>
              </div>
              <div id={styles.tagGroup3_3} className='inline-block absolute translate-x-[5px] translate-y-[45px] -rotate-[12deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-black text-white hover:bg-s-light-purple duration-300 rounded border border-white'>Аналітика</div>
              </div>
              <div id={styles.tagGroup3_4} className='inline-block absolute translate-x-[175px] translate-y-[125px] rotate-[6deg]'>
                <div className='pointer-events-auto font-medium text-md leading-5 py-[9.65px] px-[24.5px] bg-black text-white hover:bg-s-light-purple duration-300 rounded border border-white'>Ефективність</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  )
}

export default Results