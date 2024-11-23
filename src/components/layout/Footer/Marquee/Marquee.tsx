'use client'

import { motion } from 'framer-motion';
import styles from "./marquee.module.css";
import { useDesignStore } from '@/useDesignStore';
import {ICONS} from '@/constants/icons/icons';
import clsx from 'clsx';


const Marquee = () => {
  
  const { designType } = useDesignStore();

  const marqueeAnimation = {
    x: ["0%", "-100%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
        <div className={clsx('flex shrink-0 grow-0 basis-auto items-center overflow-x-hidden w-full', designType === 'designByOlga' && 'py-3', designType === 'designBySvitlana' && 'py-[14px] 2xl:py-[18px]')}>
            <motion.div animate={marqueeAnimation}>
              <div className={clsx('flex shrink-0 grow-0 basis-auto items-center min-w-min', designType === 'designByOlga' && 'gap-x-6', designType === 'designBySvitlana' && 'gap-x-[18px] 2xl:gap-x-6')}>
                <p id={`${designType}` === 'designByOlga' ? `${styles.strokeOlgaDesign}` : `${styles.strokeSvitlanaDesign}`} className={clsx('font-font3 inline-block', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                <ICONS.EMPTY_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
                <p className={clsx('font-font3 inline-block text-white', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                <ICONS.VIOLET_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
                <p id={`${designType}` === 'designByOlga' ? `${styles.strokeOlgaDesign}` : `${styles.strokeSvitlanaDesign}`} className={clsx('font-font3 inline-block', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                 <ICONS.EMPTY_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
                <p className={clsx('font-font3 inline-block text-white', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                 <ICONS.VIOLET_STAR className={clsx('mr-2', designType === 'designByOlga' && 'hidden')}/>
              </div>
            </motion.div>
                            
            <motion.div animate={marqueeAnimation}>
              <div className={clsx('flex shrink-0 grow-0 basis-auto items-center min-w-min ml-[24px]', designType === 'designByOlga' && 'gap-x-6', designType === 'designBySvitlana' && 'gap-x-[18px] 2xl:gap-x-6')}>
                <p id={`${designType}` === 'designByOlga' ? `${styles.strokeOlgaDesign}` : `${styles.strokeSvitlanaDesign}`} className={clsx('font-font3 inline-block', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                 <ICONS.EMPTY_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
                <p className={clsx('font-font3 inline-block text-white', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                <ICONS.VIOLET_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
                <p id={`${designType}` === 'designByOlga' ? `${styles.strokeOlgaDesign}` : `${styles.strokeSvitlanaDesign}`} className={clsx('font-font3 inline-block', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                 <ICONS.EMPTY_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
                <p className={clsx('font-font3 inline-block text-white', designType === 'designByOlga' && 'text-[48px] leading-[72px] font-medium', designType === 'designBySvitlana' && 'text-lg leading-[38.4px] font-regular 2xl:text-[40px] 2xl:leading-s-48')}>BAZA TRAINEE UKRAINE</p>
                <ICONS.VIOLET_STAR className={clsx(designType === 'designByOlga' && 'hidden')}/>
              </div>
            </motion.div>
        </div>
  )
}

export default Marquee;
