'use client';

import React, { useEffect, useState, useRef } from 'react';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import { ICONS } from '@/constants/icons/icons';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
// import ResultsTags1 from './ResultsTags1';
// import TagsBlock1 from './TagsBlock1';
// import TagsBlock2 from './TagsBlock2';
// import TagsBlock3 from './TagsBlock3';
// import clsx from 'clsx';

const Results: React.FC = () => {

  const tags_group1 = useRef<HTMLDivElement | null >(null);
  const tags_group2 = useRef<HTMLDivElement | null >(null);
  const tags_group3 = useRef<HTMLDivElement | null >(null);

  // const [hovered, setHovered] = useState<boolean>(false);
  // const [Xdirection, setXdirection] = useState<string>('');
  // const [Ydirection, setYdirection] = useState<string>('');
  const [mouseX, setmouseX] = useState<number>(0);
  const [mouseY, setmouseY] = useState<number>(0);
  // const [mouseXprev, setmouseXprev] = useState<number>(0);
  // const [mouseYprev, setmouseYprev] = useState<number>(0);

  useEffect(() => {
    const tags = document.getElementById('tags');
    if (!tags) return;
    if (!tags_group1) return;
    if (!tags_group2) return;
    if (!tags_group3) return;

    const randomIndexX1 = Math.random() > 0.5 ? '': '-';
    const randomIndexY1 = Math.random() > 0.5 ? '': '-';
    const randomIndexX2 = Math.random() > 0.5 ? '': '-';
    const randomIndexY2 = Math.random() > 0.5 ? '': '-';
    const randomIndexX3 = Math.random() > 0.5 ? '': '-';
    const randomIndexY3 = Math.random() > 0.5 ? '': '-';

    const handleMouseOver = (event:MouseEvent): void => {

      if(!tags_group1.current) return;
      if(!tags_group2.current) return;
      if(!tags_group3.current) return;
      setmouseX(event.clientX)
      setmouseY(event.clientY)
      tags_group1.current.style.left = `${randomIndexX1}${8}%`;
      tags_group1.current.style.top = `${randomIndexY1}${8}%`;
      tags_group2.current.style.left = `${randomIndexX2}${8}%`;
      tags_group2.current.style.top = `${randomIndexY2}${8}%`;
      tags_group3.current.style.left = `${randomIndexX3}${8}%`;
      tags_group3.current.style.top = `${randomIndexY3}${8}%`;
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

    // const coeficientArray =[]
    // for(let i = 0; i < 7; i++) {
      // const coeficient = Math.ceil(Math.random() * 9);
    //   coeficientArray.push(coeficient)
    // }
    // const coeficientsArray = Array(6).fill(coeficient)
    // const NegPosCoeficient = Math.random() < 0.5 ? -1 : 1;
    // tagGroup1.style.left = `${mouseX/100*7}px`
    // tagGroup1.style.top = `${mouseY/100*7}px`
    // tagGroup2.style.left = `${mouseX/100*5}px`
    // tagGroup2.style.top = `${mouseY/100*8}px`
    // tagGroup3.style.left = `${mouseX/100*4}px`
    // tagGroup3.style.top = `${mouseY/100*10}px`
    // const handleMouseOut = (): void => setHovered(false);

      if (tags) {
    tags.addEventListener('mouseover', handleMouseOver);
    }
      return () => {
    tags.removeEventListener('mouseover', handleMouseOver);
      };
  },[mouseX, mouseY]);


  return (
    <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0} isAlwaysOpen={true} className="2xl:relative" isNoContainer={true} isNoMaxWidth={true}>
      <div className='flex flex-col 2xl:flex-row gap-[26px] w-full pb-20 lg:pb-[100px] 2xl:pb-[200px]'>

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

        <div  className='flex justify-center items-center w-full h-[355px] mt-20 relative overflow-visible'>
          {/* <TagsBlock1 hovered={hovered} mouseX={mouseX} mouseY={mouseY}/> */}
          {/* <TagsBlock2 hovered={hovered} mouseX={mouseX} mouseY={mouseY}/> */}
          {/* <TagsBlock3 hovered={hovered} mouseX={mouseX} mouseY={mouseY}/> */}

          <div id='tags' className='w-full uppercase h-[355px] absolute duration-1000 overflow-visible'>

            <div ref={tags_group1} className='w-full uppercase h-[355px] absolute duration-1000 overflow-visible'>
              <div className='absolute inline-block top-[0px] left-[calc(50%-80px)] rotate-[4deg]'>
                <div className="rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white"> Взаємодія </div>
              </div>
              <div className="absolute inline-block left-[calc(50%)]  top-[235px] -rotate-[4deg]" >
                <div className="rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white"> Лідерство </div>
              </div>
              <div className="absolute inline-block left-[calc(50%-150px)]  top-[140px] -rotate-[5deg]" >
                <div className="rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">Стратегія </div>
              </div>
            </div>

            <div className='w-full uppercase h-[355px] absolute duration-1000 overflow-visible' ref={tags_group2} >
              <div className="absolute inline-block translate-x-[84px] translate-y-[85px] rotate-[0.04deg]">
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white"> Гнучкість  </div>
              </div>
              <div className="absolute inline-block translate-x-[146px] translate-y-[55px] rotate-[12deg]">
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white"> Колаборація </div>
              </div>
              <div className="absolute inline-block translate-x-[63px] translate-y-[270px] rotate-[6deg]">
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white"> Креативність </div>
              </div>
            </div>

            <div className='w-full uppercase h-[355px] absolute duration-1000 overflow-visible' ref={tags_group3}>
              <div className="absolute inline-block translate-x-[30px] translate-y-[210px] rotate-[1.56deg]" >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">  Системність </div>
              </div>
              <div className="absolute inline-block translate-x-[155px] translate-y-[172px]" >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white"> Емпатія </div>
              </div>
              <div className="absolute inline-block translate-x-[5px] translate-y-[45px] -rotate-[12deg]" >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple"> Аналітика </div>
              </div>
              <div className="absolute inline-block translate-x-[175px] translate-y-[125px] rotate-[6deg]" >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple"> Ефективність </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Results;
 