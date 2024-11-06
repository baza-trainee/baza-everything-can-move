import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type Props = { className?: string };

function ButtonContact({ className }: Props) {
  return (
    <a
      href="http://baza-skill.com.ua/ua"
      aria-label="Кнопка контакт"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        className,
        styles.button,
        'uppercase',
        '2xl:h-[132px] 2xl:w-[132px]',
        // 'lg:h-[100px] lg:w-[100px]',
        'h-[100px] w-[100px]',
        'flex items-center justify-center'
      )}
    >
      <span>contact</span>
    </a>
  );
}

export default ButtonContact;
