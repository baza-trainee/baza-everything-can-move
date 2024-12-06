'use client';

import { cn } from '@/lib/utils';

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
  containerClassName,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
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
    //translateZ(100px)
    containerRef.current.style.transform = ` rotateY(${x}deg) rotateX(${y}deg) `;
    containerRef.current.style.willChange = 'transform';
    containerRef.current.style.zIndex = '10';
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    containerRef.current.style.zIndex = '';
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(containerClassName, className)}
        style={{
          perspective: '1000px',
          ...style,
          zIndex: isMouseEntered ? 10 : 1,
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex items-center justify-center transition-all duration-200 ease-linear'
            // className
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
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
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  scale = 1,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  scale?: number;
  [key: string]: unknown;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const handleAnimations = useCallback(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)  scale(${scale})`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) `;
    }
  }, [
    isMouseEntered,
    rotateX,
    rotateY,
    rotateZ,
    translateX,
    translateY,
    translateZ,
    scale,
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
