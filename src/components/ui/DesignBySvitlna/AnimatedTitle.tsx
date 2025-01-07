'use client';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

type AnimatedTitleProps = {
  title: string;
  className?: string;
  wordClasses?: string[];
  colorBg?: string;
};

function AnimatedTitle({
  title,
  className = '',
  wordClasses = ['text-s-purple'],
  colorBg = 'black',
}: AnimatedTitleProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const arrColors = [
    'text-white',
    'text-s-purple',
    'text-s-light-purple',
    'text-s-title-home',
    'text-s-soft-gray',
    'text-s-plum',
    'text-s-lavender',
  ];

  const colors = (color: string | undefined): string[] => {
    if (!color || typeof color !== 'string') return [];
    return arrColors.filter(
      (el) => !el.toLowerCase().includes(color.trim().toLowerCase())
    );
  };

  const getRandomColor = () => {
    const filteredColors = colors(colorBg);
    if (filteredColors.length === 0) return null;
    return filteredColors[Math.floor(Math.random() * filteredColors.length)];
  };

  const getRandomChar = () => {
    return String.fromCharCode(Math.random() * (127 - 33) + 33);
  };

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
    }
  }, [inView, isAnimating]);

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

            const isTargetCharInitiative =
              title === 'Соціальні ініціативи' && globalCharIndex === 3;
            const isTargetCharStart =
              title === 'Старт' && globalCharIndex === 2;
            return (
              <span
                key={`${index}-${i}`}
                className={cn('relative', colorClass)}
              >
                {isVisible && !isFinal ? getRandomChar() : char}
                {isTargetCharInitiative && (
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
                {isTargetCharStart && (
                  <svg
                    className="absolute left-[50%] top-0 z-[-1] hidden h-[54px] w-[54px] -translate-x-2/4 lg:block"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.3994 10.8611L38.9055 4.31587L37.7829 14.2115L37.7026 14.9193L38.3956 14.7542L48.0837 12.447L42.4909 20.6874L42.0909 21.2768L42.7812 21.4527L52.4318 23.912L43.6501 28.6094L43.022 28.9454L43.5515 29.422L50.9538 36.0845L40.995 36.1628L40.2827 36.1684L40.5301 36.8364L43.9883 46.1758L35.1338 41.6171L34.5005 41.291L34.4091 41.9974L33.1309 51.8742L27.4092 43.7227L27 43.1397L26.5908 43.7227L20.8691 51.8742L19.5909 41.9974L19.4995 41.291L18.8662 41.6171L10.0117 46.1758L13.4699 36.8364L13.7173 36.1684L13.005 36.1628L3.04621 36.0845L10.4485 29.422L10.978 28.9454L10.3499 28.6094L1.56821 23.912L11.2188 21.4527L11.9091 21.2768L11.5091 20.6874L5.91632 12.447L15.6044 14.7542L16.2974 14.9193L16.2171 14.2115L15.0945 4.31587L22.6006 10.8611L23.1375 11.3293L23.3953 10.6653L27 1.38142L30.6047 10.6653L30.8625 11.3293L31.3994 10.8611Z"
                      stroke="white"
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
          'traking-s-2 font-second-family text-xlg font-semibold uppercase leading-o-150 lg:text-3xl lg:leading-o-120 2xl:text-3xl',
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
4. `colorBg`: in this case using only for WHITE bg


Examples:
<AnimatedTitle 
  title="Future Plans" 
  className="text-center 2xl:text-start mb-4"
  wordClasses={['text-white', 'text-s-purple']}
  colorBg='white'
/>
*/
