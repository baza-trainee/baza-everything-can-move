'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './results.module.css';
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
// import clsx from 'clsx';

const ResultsTags1: React.FC = () => {

  const tags_group1 = useRef<HTMLDivElement | null >(null);
 
  const [hovered, setHovered] = useState<boolean>(false);
  const parentElem = tags_group1.current?.parentElement?.parentElement;
  if(!parentElem) return;
   const { x, y } = useFollowPointer(tags_group1, parentElem);
  // const [Xdirection, setXdirection] = useState<string>('');
  // const [Ydirection, setYdirection] = useState<string>('');
  const [mouseX, setmouseX] = useState<number>(0);
  const [mouseY, setmouseY] = useState<number>(0);
  // const [mouseXprev, setmouseXprev] = useState<number>(0);
  // const [mouseYprev, setmouseYprev] = useState<number>(0);

  useEffect(() => {
    // const tagGroups = document.querySelectorAll(`#${styles.tagGroup}`);
    // if (!tagGroups) return;

    // const tagGroup1 = tagGroups[0] as HTMLDivElement;
    // const handleMouseOver = (event:MouseEvent): void => {
    //   setHovered(true);
    // }
    // const handleMouseOver = (event:MouseEvent): void => {
      // setmouseXprev(mouseX)
      // setmouseYprev(mouseY)
      // setmouseX(event.clientX)
      // setmouseY(event.clientY)
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

    // }
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
    
  },[hovered, mouseX, mouseY]);


  return (

    <motion.div id={styles.tagGroup} ref={tags_group1} style={{x,y}}>
      <div id={styles.tagGroup1_1} className='inline-block absolute translate-x-[86px] translate-y-[5px] rotate-[4deg]'>
        <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
          Взаємодія
        </div>
      </div>
      <div id={styles.tagGroup1_2} className="absolute inline-block translate-x-[195px] translate-y-[235px] -rotate-[4deg]" >
        <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
          Лідерство
        </div>
      </div>
      <div id={styles.tagGroup1_3} className="absolute inline-block translate-x-[25px] translate-y-[140px] -rotate-[5deg]" >
        <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
          Стратегія
        </div>
      </div>
    </motion.div>

  );
};

export default ResultsTags1;
 