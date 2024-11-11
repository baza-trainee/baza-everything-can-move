'use client';

import React from 'react'
import { achievements } from '@/constants/achievements';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';



// (alias) const Card: ({ title, description, src, url, color, i }: {
//     title: any;
//     description: any;
//     src: any;
//     url: any;
//     color: any;
//     i: any;
// }) => React.JSX.Element

export default function CardsParallax() {

    //  const canvasRef = useRef<HTMLDivElement | null >(null);
      const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start start', 'end end']

  })

  return (

    <main className=''>
        <main ref={container} className=''></main>
      {
        
        achievements.map( (achievement, i) => {
        const targetScale = 1 - ( (achievements.length - i) * 0.05);
          return <Card key={`p_${i}`} {...achievement} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>

        })

      }

    </main>

  )

}
