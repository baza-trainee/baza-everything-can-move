/* eslint-disable rule-name */

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ICONS } from '@/constants/icons/icons';

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
    'text-t-yellow',
    'text-t-turquoise',
    'text-t-soft-pink',
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
      }, 75);
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
                  <ICONS.WHITE_STAR className="absolute left-[50%] top-[-15px] h-[24px] w-[24px] -translate-x-2/4 lg:h-[37px] lg:w-[37px]" />
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
