import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { SubTitle } from './SubTitle/SubTitle';

type BgProps = {
  children: ReactNode;
  className?: string;
  bg?: 's-gray' | 'white';
  lg?: number;
  xl?: number;
  text?: string;
};

function Background({
  children,
  text,
  bg = 's-gray',
  lg = 125,
  xl = 1143,
  className,
}: BgProps) {
  const xlClassMap: Record<number, string> = {
    276: '2xl:left-[276px]',
    1143: '2xl:left-[1143px]',
    170: '2xl:left-[170px]',
    503: '2xl:left-[503px]',
    840: '2xl:left-[840px]',
    125: 'lg:left-[125px]',
    843: 'lg:left-[843px]',
  };

  return (
    <section className={cn(`bg-${bg} xl:rounded-t-3xl`, className)}>
      <Container className="relative">
        {children}
        <div
          className={cn(
            `absolute -top-[40px] h-[45px] w-[215px] rounded-t-2xl pt-[26px] bg-${bg} left-4 ${bg === 'white' ? 'pl-[37px]' : 'pl-[46px]'}`,
            xlClassMap[xl] || '',
            xlClassMap[lg] || ''
          )}
        >
          <SubTitle
            text={text}
            className={cn(
              'h-[36px] w-[132px] text-xs lg:h-[36px] lg:w-[132px] lg:text-xs',
              bg === 'white'
                ? 'rotate-[-7deg] border-s-gray text-s-gray'
                : 'rotate-[7deg]'
            )}
          />
        </div>
      </Container>
    </section>
  );
}

export default Background;


// how to use 
// all number of position left for lg and 2xl are in xlClassMap

{/* <Background text='Плани' bg='s-gray' lg={125} xl={503}> */}