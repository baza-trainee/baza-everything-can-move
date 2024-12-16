'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedTitleProps = {
  title: string;
  className?: string;
  wordClasses?: string[];
};

function AnimatedTitle({
  title,
  className = '',
  wordClasses = ['text-s-purple'],
}: AnimatedTitleProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const colors = [
    'text-t-soft-gray',
    'text-t-silver',
    'text-s-purple',
    'text-t-dark-purple',
    'text-t-plum',
    'text-t-light-purple',
    'text-t-lavender',
    'text-t-pinkish-purple',
    'text-t-indigo',
    'text-t-pink',
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomChar = () => {
    return String.fromCharCode(Math.random() * (127 - 33) + 33);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
        }
      },
      { threshold: 1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isAnimating]);

  useEffect(() => {
    if (charIndex < title.length && isAnimating) {
      const timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isAnimating, title]);

  const renderStyledText = () => {
    const words = title.split(' ');
    let charCounter = 0;

    return words.map((word, index) => {
      const wordStart = charCounter;
      const wordEnd = charCounter + word.length;

      charCounter += word.length + 1; // +1 для пробілу

      return (
        <span
          key={index}
          className={cn(
            !isAnimating && (wordClasses[index] || ''),
            'transition-all duration-300 ease-in-out'
          )}
        >
          {word.split('').map((char, i) => {
            const globalCharIndex = wordStart + i;
            const isVisible = charIndex > wordStart + i;
            const isFinal = charIndex >= wordEnd;

            const colorClass = isFinal
              ? wordClasses[index] || ''
              : isVisible
                ? getRandomColor()
                : 'opacity-0';

            const isTargetChar =
              title === 'Соціальні ініціативи' && globalCharIndex === 3;

            return (
              <span
                key={`${index}-${i}`}
                className={cn('relative', colorClass)}
              >
                {isVisible && !isFinal ? getRandomChar() : char}
                {isTargetChar && (
                  <svg
                    className="absolute left-[50%] top-[-15px] h-[24px] w-[24px] -translate-x-2/4 lg:h-[37px] lg:w-[37px]"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7686 7.94883L27.9201 3.45679L27.1496 10.2482L27.0694 10.956L27.7623 10.7909L34.4113 9.20747L30.573 14.8629L30.1729 15.4523L30.8632 15.6282L37.4865 17.316L31.4596 20.5399L30.8315 20.8759L31.3609 21.3524L36.4412 25.9249L29.6064 25.9787L28.8941 25.9843L29.1415 26.6523L31.5148 33.062L25.438 29.9333L24.8047 29.6072L24.7133 30.3137L23.8361 37.0921L19.9092 31.4977L19.5 30.9147L19.0908 31.4977L15.1639 37.0921L14.2867 30.3137L14.1953 29.6072L13.562 29.9333L7.48516 33.062L9.85853 26.6523L10.1059 25.9843L9.39358 25.9787L2.55883 25.9249L7.63907 21.3524L8.16852 20.8759L7.54041 20.5399L1.51352 17.316L8.1368 15.6282L8.82706 15.4523L8.42704 14.8629L4.5887 9.20747L11.2377 10.7909L11.9306 10.956L11.8504 10.2482L11.0799 3.45679L16.2314 7.94883L16.7683 8.41698L17.0261 7.75295L19.5 1.38142L21.9739 7.75295L22.2317 8.41698L22.7686 7.94883Z"
                      fill="white"
                      stroke="#8F8DED"
                    />
                  </svg>
                )}
              </span>
            );
          })}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  return (
    <div ref={ref}>
      <div
        className={cn(
          'traking-s-2 text-xlg uppercase leading-o-120 lg:text-[80px]',
          className
        )}
      >
        {renderStyledText()}
      </div>
    </div>
  );
}

export default AnimatedTitle;

/*
AnimatedTitle Component Usage:

Props:
1. `title` (string, required): The animated text to display.
2. `className` (string, optional): Tailwind classes for overall title styling.
3. `wordClasses` (string[], optional): Tailwind classes for styling individual words in the title.

Examples:
<AnimatedTitle 
  title="Future Plans" 
  className="text-center 2xl:text-start mb-4"
  wordClasses={['text-white', 'text-s-purple']}
/>
*/
