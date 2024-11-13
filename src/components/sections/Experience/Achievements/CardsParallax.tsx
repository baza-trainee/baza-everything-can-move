'use client';

import React from 'react'
import { achievements } from '@/constants/achievements';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'


 const CardsParallax:React.FC = () => {

    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time:number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className='relative mt-[8vh] mb-16'>
      {
        achievements.map( (achievement, i) => {
          // console.log(i);
        const targetScale = 1 - ( (achievements.length - i) * 0.05);
          return <Card key={`p_${i}`} {...achievement} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}

export default CardsParallax;
