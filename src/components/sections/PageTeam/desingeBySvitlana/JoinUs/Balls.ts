'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export type BallsProps = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  color: string;
  isDragging: boolean;
  src: string;
  link: string;
  radius: number;
  imgeSize: number;
}[];

export const useBallsState = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });
  const ballsArray: BallsProps = [
    {
      id: 1,
      x: 140,
      y: 250,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#363535',
      isDragging: false,
      src: '/assets/icons/Ball1.svg',
      link: '',
      radius: isMobile ? 70 : 124,
      imgeSize: isMobile ? 140 : 248,
    },
    {
      id: 2,
      x: 250,
      y: 250,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#363535',
      isDragging: false,
      src: '/assets/icons/Ball2.svg',
      link: '',
      radius: isMobile ? 70 : 124,
      imgeSize: isMobile ? 140 : 248,
    },
    {
      id: 3,
      x: 600,
      y: 300,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#8F8DED',
      isDragging: false,
      src: '/assets/icons/Facebook.svg',
      link: 'https://www.facebook.com/BazaTraineeUkraine',
      radius: isMobile ? 80 : 140,
      imgeSize: isMobile ? 48 : 82,
    },
    {
      id: 4,
      x: 450,
      y: 350,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#8F8DED',
      isDragging: false,
      src: '/assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all',
      radius: isMobile ? 80 : 140,
      imgeSize: isMobile ? 48 : 82,
    },
    {
      id: 5,
      x: 500,
      y: 300,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#8F8DED',
      isDragging: false,
      src: '/assets/icons/Telegram.svg',
      link: 'https://t.me/+CBXkAJlsCy83ZDYy',
      radius: isMobile ? 80 : 140,
      imgeSize: isMobile ? 48 : 82,
    },
  ];

  const [balls, setBalls] = useState<BallsProps>(ballsArray);
  return { balls, setBalls };
};
