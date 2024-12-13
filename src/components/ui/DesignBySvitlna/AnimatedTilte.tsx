'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { cn } from '@/lib/utils';

// interface AnimatedTitleProps {
//   title: string;
//   className?: string;
//   colorList?: string[]; // Масив кольорів для випадкових кольорів
// }

// const AnimatedTitle = ({ title, className, colorList = ['text-white'] }: AnimatedTitleProps) => {
//   const [currentIndex, setCurrentIndex] = useState(-1); // Індекс символу, що анімується
//   const [isAnimating, setIsAnimating] = useState(false); // Чи відбувається анімація
//   const titleRef = useRef<HTMLHeadingElement | null>(null); // Референс на заголовок

//   const timeout = 100; // Затримка між символами
//   const finalClass = 'text-white'; // Фінальний колір для символів

//   const colors = [
//     'text-t-soft-gray',
//     'text-t-silver',
//     'text-s-purple',
//     'text-t-dark-purple',
//     'text-t-plum',
//     'text-t-light-purple',
//     'text-t-lavender',
//     'text-t-pinkish-purple',
//     'text-t-indigo',
//     'text-t-yellow',
//     'text-t-turquoise',
//     'text-t-soft-pink',
//   ];

//   const getRandomChar = () => String.fromCharCode(Math.random() * (127 - 33) + 33);

//   const getRandomClass = () => colors[Math.floor(Math.random() * colors.length)];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isAnimating) {
//           setIsAnimating(true);
//           setCurrentIndex(0); // Починаємо анімацію
//         }
//       },
//       { threshold: 1 } // Спрацьовує, коли 100% елемента видно
//     );

//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }

//     return () => {
//       if (titleRef.current) {
//         observer.unobserve(titleRef.current);
//       }
//     };
//   }, [isAnimating]);

//   useEffect(() => {
//     if (isAnimating && currentIndex < title.length) {
//       const timeoutId = setTimeout(() => {
//         setCurrentIndex((prev) => prev + 1);
//       }, timeout);

//       return () => clearTimeout(timeoutId);
//     }
//   }, [isAnimating, currentIndex, title.length]);

//   return (
//     <h1 ref={titleRef} className={cn('tracking-s-2 text-xl uppercase leading-[1.2]', className)}>
//       {title.split('').map((char, index) => (
//         <span
//           key={index}
//           className={cn(
//             index > currentIndex && 'invisible', // Приховуємо символи, які ще не почали анімацію
//             index <= currentIndex && getRandomClass(), // Під час анімації застосовуємо випадкові кольори
//             index === currentIndex && finalClass // Фінальний білий колір
//           )}
//         >
//           {index <= currentIndex ? char : getRandomChar()}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default AnimatedTitle;

// import { useState, useEffect, useRef } from 'react';

// const colors = [
//       'text-t-soft-gray',
//       'text-t-silver',
//       'text-s-purple',
//       'text-t-dark-purple',
//       'text-t-plum',
//       'text-t-light-purple',
//       'text-t-lavender',
//       'text-t-pinkish-purple',
//       'text-t-indigo',
//       'text-t-yellow',
//       'text-t-turquoise',
//       'text-t-soft-pink',
//     ];

//     function getRandomColor() {
//       return colors[Math.floor(Math.random() * colors.length)];
//     }

//     function getRandomChar() {
//       return String.fromCharCode(Math.random() * (127 - 33) + 33);
//     }

//     function getRandomColoredString(n) {
//       const chars = [];
//       for (let i = 0; i < n; i++) {
//         chars.push(
//           <span key={i} className={`${getRandomColor()} animate-pulse`}>
//             {getRandomChar()}
//           </span>
//         );
//       }
//       return chars;
//     }

//     export default function AnimatedTitle({title}: {title:string}) {
//       const timeout = 100;

//       const [text, setText] = useState('');
//       const [titleP, setTitleP] = useState(0);
//       const [animated, setAnimated] = useState(false);
//       const ref = useRef(null);

//       useEffect(() => {
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting && !animated) {
//               setAnimated(true);
//             }
//           },
//           { threshold: 0.5 } // Спрацьовує, коли 50% елемента в полі зору
//         );

//         if (ref.current) {
//           observer.observe(ref.current);
//         }

//         return () => {
//           if (ref.current) {
//             observer.unobserve(ref.current);
//           }
//         };
//       }, [animated]);

//       useEffect(() => {
//         if (!animated) return;

//         const interval = setInterval(() => {
//           if (titleP < title.length) {
//             setText((prev) => prev + title[titleP]);
//             setTitleP((prev) => prev + 1);
//           } else {
//             clearInterval(interval); // Зупинка анімації після завершення
//           }
//         }, timeout);

//         return () => clearInterval(interval);
//       }, [animated, titleP]);

//       return (
//         <p ref={ref} className="traking-s-2 text-center text-xlg uppercase leading-o-120 lg:text-start lg:text-[80px] 2xl:text-center">
//           {text}
//           {titleP < title.length && getRandomColoredString(titleP)}
//         </p>
//       );
//     }

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedTitleProps = {
  title: string; // Заголовок, який потрібно анімувати
  className?: string; // Класи Tailwind для стилізації всього заголовка
  wordClasses?: string[]; // Класи для стилізації кожного слова
};

function AnimatedTitle({
  title,
  className = '', // Стандартне значення для класу заголовка
  wordClasses = ['text-s-purple'], // Класи для кожного слова
}: AnimatedTitleProps) {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Відстеження, чи триває анімація
  const ref = useRef<HTMLDivElement>(null); // Для відстеження області видимості заголовка

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
      { threshold: 1 } // Анімація почнеться, коли 50% заголовка буде видно
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isAnimating]);

  useEffect(() => {
    if (charIndex < title.length && isAnimating) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + title[charIndex]);
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
            const isVisible = charIndex > wordStart + i;
            const isFinal = charIndex >= wordEnd;

            const colorClass = isFinal
              ? wordClasses[index] || '' // Кінцевий колір
              : isVisible
                ? getRandomColor() // Випадковий колір під час анімації
                : 'opacity-0';

            return (
              <span key={`${index}-${i}`} className={`${colorClass}`}>
                {isVisible && !isFinal ? getRandomChar() : char}
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