'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export interface SubTitleAnimationProps {
  children: React.ReactNode;
  className?: string;

  color: 'black' | 'white';
}
const SubTitleAnimation = ({
  children,
  className,
  color,
}: SubTitleAnimationProps) => {
  return (
    <div
      // if center add items-center
      className={clsx(
        '',
        color === 'black' && 'text-black',
        color === 'white' && 'text-white',
        className
      )}
    >
      <h3
        className={clsx(
          // mb-3  lg:mb-0 lg:mr-6
          'font-second-family text-md font-semibold uppercase leading-o-120 tracking-s-2 lg:text-lg lg:font-medium'
        )}
      >
        {children}
      </h3>
      {/* if center add justify-center */}
    </div>
  );
};

export default SubTitleAnimation;
