import { ICONS_STACK } from './icons/iconsSrc';

export interface Stack {
  Icon: React.FC;
  name: string;
}
export type StackArrProps = Stack[];

export const STACK_ARR: StackArrProps = [
  {
    name: 'React.JS',
    Icon: ICONS_STACK.REACT_LOGO,
  },
  {
    name: 'TypeScript',
    Icon: ICONS_STACK.TS_LOGO,
  },
  {
    name: 'Tailwind',
    Icon: ICONS_STACK.TW_LOGO,
  },
  {
    name: 'CSS',
    Icon: ICONS_STACK.CSS_LOGO,
  },
  {
    name: 'Next.js',
    Icon: ICONS_STACK.NEXT_LOGO,
  },
];
