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

export const Balls: BallsProps = [
  {
    id: 1,
    x: 200,
    y: 150,
    vx: 0,
    vy: 0,
    angle: 0,
    color: '#363535',
    isDragging: false,
    src: '/assets/icons/Ball1.svg',
    link: '',
    radius: 70,
    imgeSize: 140,
  },
  {
    id: 2,
    x: 250,
    y: 150,
    vx: 0,
    vy: 0,
    angle: 0,
    color: '#363535',
    isDragging: false,
    src: '/assets/icons/Ball2.svg',
    link: '',
    radius: 70,
    imgeSize: 140,
  },
  {
    id: 3,
    x: 300,
    y: 200,
    vx: 0,
    vy: 0,
    angle: 0,
    color: '#8F8DED',
    isDragging: false,
    src: '/assets/icons/Facebook.svg',
    link: 'https://www.facebook.com/BazaTraineeUkraine',
    radius: 80,
    imgeSize: 45,
  },
  {
    id: 4,
    x: 400,
    y: 250,
    vx: 0,
    vy: 0,
    angle: 0,
    color: '#8F8DED',
    isDragging: false,
    src: '/assets/icons/linkedin.svg',
    link: 'https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all',
    radius: 80,
    imgeSize: 45,
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
    radius: 80,
    imgeSize: 45,
  },
];
