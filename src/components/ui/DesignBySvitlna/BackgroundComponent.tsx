import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { Rectangle } from './SubTitle/SubTitle';
import { motion } from 'framer-motion';

type BgProps = {
  children: ReactNode;
  className?: string;
  bg?: 's-gray' | 'white';
  lg?: number;
  xl?: number;
  text?: string;
};

function BackgroundComponent({
  children,
  text,
  bg = 'white',
  lg = 125,
  xl = 1142,
  className,
}: BgProps) {
  const xlClassMap: Record<number, string> = {
    276: '2xl:left-[276px]',
    1142: '2xl:left-[1142px]',
    180: '2xl:left-[180px]',
    500: '2xl:left-[500px]',
    840: '2xl:left-[840px]',
    125: 'lg:left-[125px]',
    463: 'lg:left-[463px]',
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.section
      className={cn(`bg-${bg} shadow-3xl  pt-[100px]`, className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="relative">
        <motion.div
          className={cn(
            `absolute -top-[140px] h-[80px] w-[215px] z-2 shadow-3xl rounded-t-2xl pt-[26px] bg-${bg} left-4 ${
              bg === 'white' ? 'pl-[37px]' : 'pl-[46px]'
            }`,
            xlClassMap[xl] || '',
            xlClassMap[lg] || ''
          )}
        >
          <div
            onClick={toggleOpen}
            className={cn(
              'relative h-[36px] w-[132px] text-xs border-[1px] border-solid transition-colors cursor-pointer',
              bg === 'white'
                ? 'rotate-[-7deg] border-s-gray text-s-gray hover:bg-s-gray hover:text-white'
                : 'rotate-[7deg] border-white text-white hover:bg-white hover:text-s-gray'
            )}
          >
            <Rectangle className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
            <Rectangle className="right-0 top-0 -translate-y-1/2 translate-x-1/2" />
            <Rectangle className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
            <Rectangle className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <div className="flex h-full items-center justify-center font-second-family font-medium uppercase leading-s-100 tracking-custom-tight">
              {text}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default BackgroundComponent;

// how to use
// all number of position left for lg and 2xl are in xlClassMap


  /* <Background text='Плани' bg='s-gray' lg={125} xl={503}> */

