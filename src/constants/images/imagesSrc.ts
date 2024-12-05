import type { StaticImageData } from 'next/image';

import kolyskova from '@/assets/images/Projects/kolyskova.png';
import balakun from '@/assets/images/Projects/balakun.png';
import organik from '@/assets/images/Projects/organik.png';
import song from '@/assets/images/Projects/1001song.png';
import bazaSkill from '@/assets/images/Projects/baza_skill.png';
import bazaTrainee from '@/assets/images/Projects/baza_trainee_ukraine.png';
import klouns from '@/assets/images/Projects/klouns.png';
import militari from '@/assets/images/Projects/militari.png';
import zavriki from '@/assets/images/Projects/zavriki.png';
import zerno from '@/assets/images/Projects/zerno.png';
import hvostiki from '@/assets/images/Projects/hvostiki.png';

interface ImagesHomeProjects {
  pos: string;
  src: StaticImageData;
  link: string;
  name: string;

  widthDesktop: number;
  heightDesktop: number;
  topDesktop: number | string;
  leftDesktop: number | string;
  scaleDesktop: number;

  translateZ: number;

  widthTablet: number;
  heightTablet: number;
  topTablet: number | string;
  leftTablet: number | string;
  scaleTablet: number;
}

export type ImagesHomeProjectsProps = ImagesHomeProjects[];

export const IMAGES_HOME_PROJECTS: ImagesHomeProjectsProps = [
  //OLGA
  {
    pos: '1.c',
    src: song,
    link: 'https://1000and1songs.com/',
    name: 'Платформа “1000 і 1 пісня”',

    widthDesktop: 120,
    heightDesktop: 64,
    topDesktop: 215,
    leftDesktop: 489,
    scaleDesktop: 4.26,

    translateZ: 90,

    widthTablet: 180,
    heightTablet: 92,
    topTablet: 0,
    leftTablet: 272,
    scaleTablet: 1.95,
  },
  {
    pos: '2.c',
    name: 'Baza Skill',
    link: 'https://baza-skill.com.ua/ua',
    src: bazaSkill,
    widthDesktop: 120,
    heightDesktop: 64,
    topDesktop: 77,
    leftDesktop: 522,
    scaleDesktop: 4.26,

    translateZ: 90,

    widthTablet: 120,
    heightTablet: 64,
    topTablet: 160,
    leftTablet: 452,
    scaleTablet: 2.93,
  },
  {
    pos: '3.l',
    name: 'Baza Trainee Ukraine',
    link: 'https://baza-trainee.tech/uk',
    src: bazaTrainee,

    widthDesktop: 180,
    heightDesktop: 92,
    topDesktop: 34,
    leftDesktop: 325,
    scaleDesktop: 2.85,

    translateZ: 90,

    widthTablet: 120,
    heightTablet: 64,
    topTablet: 80,
    leftTablet: 30,
    scaleTablet: 2.93,
  },

  {
    pos: '2.l',
    name: 'Платформа “Balakun”',
    link: 'https://balakach.vercel.app/',
    src: balakun,
    widthDesktop: 340,
    heightDesktop: 164,
    topDesktop: 36,
    leftDesktop: 0,
    scaleDesktop: 1.5,

    translateZ: 90,

    widthTablet: 180,
    heightTablet: 92,
    topTablet: 66,
    leftTablet: 432,
    scaleTablet: 1.95,
  },

  {
    pos: '3.r',
    name: 'Органік Україна',
    link: 'https://baza-trainee.github.io/organic-ukraine/',
    src: organik,
    widthDesktop: 180,
    heightDesktop: 92,
    topDesktop: 0,
    leftDesktop: 605,
    scaleDesktop: 2.85,

    translateZ: 90,

    widthTablet: 340,
    heightTablet: 164,
    topTablet: 145,
    leftTablet: -10,
    scaleTablet: 1.035,
  },

  {
    pos: '2.r',
    name: 'Бюро лікарняних клоунів',
    link: 'https://boop.in.ua/ua',
    src: klouns,
    widthDesktop: 120,
    heightDesktop: 64,
    topDesktop: 137,
    leftDesktop: 602,
    scaleDesktop: 4.26,

    translateZ: 90,

    widthTablet: 180,
    heightTablet: 92,
    topTablet: 36,
    leftTablet: 92,
    scaleTablet: 1.95,
  },
  {
    pos: '1.r',
    name: '“Мілітарі” платформа',
    link: 'https://engforuarmy.org/en',
    src: militari,
    widthDesktop: 500,
    heightDesktop: 240,
    topDesktop: 103,
    leftDesktop: 635,
    scaleDesktop: 1.025,

    translateZ: 90,

    widthTablet: 180,
    heightTablet: 92,
    topTablet: 230,
    leftTablet: 410,
    scaleTablet: 1.95,
  },
  {
    pos: '1.l',
    name: 'Платформа “Колискова”',
    link: 'https://www.kolyskova.com/#/map',
    src: kolyskova,
    widthDesktop: 500,
    heightDesktop: 240,
    topDesktop: 146,
    leftDesktop: 56,
    scaleDesktop: 1.025,

    translateZ: 90,

    widthTablet: 340,
    heightTablet: 164,
    topTablet: 92,
    leftTablet: 192,
    scaleTablet: 1.035,
  },
];

export interface SvitlanaProjectsImagesType {
  src: string | StaticImageData;
  name: string;
  link?: string;
  top?: number;
  left?: number;
}

export interface ProjectsImagesProps {
  images: SvitlanaProjectsImagesType[];
}

export const PROJECTS_SVITLANA_IMAGES = [
  {
    link: '',
    name: 'Проєкт zerno',
    src: zerno,
    top: 669,
    left: 93,
  },
  {
    link: '',
    name: 'Проєкт хвостики ',
    src: hvostiki,
    top: 252,
    left: 141,
  },
  {
    link: '',
    name: 'Проєкт читозаврик',
    src: zavriki,
    top: 727,
    left: 952,
  },
  {
    link: '',
    name: 'eng for uarmy',
    src: militari,
    top: 330,
    left: 1013,
  },
  {
    link: '',
    name: '1000 і 1 пісня',
    src: song,
    top: 146,
    left: 600,
  },
];
