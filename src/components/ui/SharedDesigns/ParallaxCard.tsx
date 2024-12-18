'use client';
//from big to small
//import type { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
//import Image from 'next/image';

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from 'react';

export const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  translateX = '0px',
  translateY = '0px',
  scale = 1,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  translateX?: string;
  translateY?: string;
  scale?: number;
  style?: React.CSSProperties;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 22;
    const y = (e.clientY - top - height / 2) / 22;
    //translateZ(100px) scale(${scale})
    containerRef.current.style.transform = ` rotateY(${x}deg) rotateX(${y}deg)   `;
    containerRef.current.style.willChange = 'transform';
    containerRef.current.style.zIndex = '10';
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);

    if (!containerRef.current) return;
    //scale(1)
    containerRef.current.style.transform = `translateX(${translateX}) translateY(${translateY} `;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    //scale(${scale})
    containerRef.current.style.transform = ` rotateY(0deg) rotateX(0deg) translateX(0px) translateY(0px)  `;
    containerRef.current.style.zIndex = '';
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      {/* <div
        //className={cn(containerClassName, className)}
        style={
          {
            // perspective: '1000px',
            // zIndex: isMouseEntered ? 10 : 1,
            // width: isMouseEntered ? widthEnd : widthStart,
          }
        }
      > */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'flex items-center justify-center transition-all duration-500 ease-linear',
          className
        )}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          zIndex: isMouseEntered ? 10 : 1,
          scale: isMouseEntered ? 1 : scale,
          ...style,
        }}
      >
        {children}
      </div>
      {/* </div> */}
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        '[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]', //h-96 w-96
        className
      )}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = '0px',
  translateY = '0px',
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,

  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: string;
  translateY?: string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;

  [key: string]: unknown;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const handleAnimations = useCallback(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transition = '0.5s ease-linear';
      ref.current.style.transform = ` translateX(${translateX}) translateY(${translateY}) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)  `;
    } else {
      ref.current.style.transform = ` translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)  `;
    }
  }, [
    isMouseEntered,
    rotateX,
    rotateY,
    rotateZ,
    translateX,
    translateY,
    translateZ,
  ]);

  useEffect(() => {
    handleAnimations();
  }, [handleAnimations, isMouseEntered]);

  return (
    <Tag
      ref={ref}
      // w-fit
      className={cn('transition duration-200 ease-linear', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

//  a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};
