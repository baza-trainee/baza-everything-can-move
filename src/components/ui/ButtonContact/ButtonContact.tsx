'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type Props = { className?: string };

function ButtonContact({ className }: Props) {
  return (
    <motion.a
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      href="http://baza-skill.com.ua/ua"
      aria-label="Кнопка контакт"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        className,
        styles.button,
        'uppercase',
        '2xl:h-[132px] 2xl:w-[132px]',
        'flex items-center justify-center'
      )}
    >
      <span>contact</span>
    </motion.a>
  );
}

export default ButtonContact;
