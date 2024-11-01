'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  pathStatisticDesktop,
  pathStatisticMobile,
  pathStatisticTablet,
} from './pathIconStatistic';
import clsx from 'clsx';

type Props = { className: string };

function BackgroundSvg({ className }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia('(max-width: 767px)');
    const mediaQueryTablet = window.matchMedia(
      '(min-width: 768px) and (max-width: 1024px)'
    );

    const handleMediaChange = () => {
      setIsMobile(mediaQueryMobile.matches);
      setIsTablet(mediaQueryTablet.matches);
    };

    handleMediaChange();

    mediaQueryMobile.addEventListener('change', handleMediaChange);
    mediaQueryTablet.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueryMobile.removeEventListener('change', handleMediaChange);
      mediaQueryTablet.removeEventListener('change', handleMediaChange);
    };
  }, []);
  return (
    <motion.svg
      className={clsx(className)}
      viewBox={
        isMobile ? '0 0 375 672' : isTablet ? '0 0 768 622' : '0 0 1440 634'
      }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        opacity="0.6"
        stroke="#6B6A6A"
        strokeOpacity="0.6"
        strokeWidth="2"
        animate={{
          stroke: ['#6b6a6a', '#68753f', '#6b6a6a'],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        }}
        d={
          isMobile
            ? pathStatisticMobile
            : isTablet
              ? pathStatisticTablet
              : pathStatisticDesktop
        }
      />
    </motion.svg>
  );
}

export default BackgroundSvg;
