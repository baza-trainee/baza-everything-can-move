'use client'

import { motion } from 'framer-motion';
import "./marquee.css";



const Marquee = () => {

    const marqueeAnimation = {
        x: ["0%", "-100%"],
        transition: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        },
      };

  return (
        <div className='flex shrink-0 grow-0 basis-auto items-center overflow-x-hidden w-full'>
            <motion.div animate={marqueeAnimation}>
              <div className='flex shrink-0 grow-0 basis-auto items-center gap-x-6 min-w-min'>
                <p id='stroke' className='text-[40px] leading-s-48 font-font3 font-regular inline-block'>BAZA TRAINEE UKRAINE</p>
                <p className='text-[40px] leading-s-48 font-font3 font-regular text-white inline-block'>BAZA TRAINEE UKRAINE</p>
                <p id='stroke' className='text-[40px] leading-s-48 font-font3 font-regular inline-block'>BAZA TRAINEE UKRAINE</p>
                <p className='text-[40px] leading-s-48 font-font3 font-regular text-white inline-block'>BAZA TRAINEE UKRAINE</p>
                </div>
            </motion.div>
            <motion.div animate={marqueeAnimation}>
              <div className='flex shrink-0 grow-0 basis-auto items-center gap-x-6 min-w-min'>
                <p className='w-[24px]'></p>
                <p id='stroke' className='text-[40px] leading-s-48 font-font3 font-regular inline-block'>BAZA TRAINEE UKRAINE</p>
                <p className='text-[40px] leading-s-48 font-font3 font-regular text-white inline-block'>BAZA TRAINEE UKRAINE</p>
                <p id='stroke' className='text-[40px] leading-s-48 font-font3 font-regular inline-block'>BAZA TRAINEE UKRAINE</p>
                <p className='text-[40px] leading-s-48 font-font3 font-regular text-white inline-block'>BAZA TRAINEE UKRAINE</p>
                </div>
            </motion.div>
        </div>
  )
}

export default Marquee;
