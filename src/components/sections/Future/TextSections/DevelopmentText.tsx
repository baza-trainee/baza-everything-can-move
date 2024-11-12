'use client';
import React, { useRef, useEffect, useState } from 'react';
import { TEXTS } from '../../../../constants/text';

// interface DevelopmentTextProps {
//   onScrollUpdate?: (scrollInfo: { isTop: boolean; isBottom: boolean }) => void;
// }

// const DevelopmentText: React.FC<DevelopmentTextProps> = ({ onScrollUpdate }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleScroll = () => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;
//     const isTop = container.scrollTop === 0;
//     const isBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;

//     // Call onScrollUpdate to notify the parent about the scroll position
//     onScrollUpdate?.({ isTop, isBottom });
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     container?.addEventListener('scroll', handleScroll);

//     return () => {
//       container?.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="mt-8 h-[340px] lg:mt-0 lg:w-[320px] 2xl:h-[376px]">
//       <div
//         ref={containerRef}
//         style={{
//           overflowY: 'scroll',
//           scrollbarWidth: 'none', // Firefox
//           msOverflowStyle: 'none', // IE
//           WebkitOverflowScrolling: 'touch', // Smooth scroll on mobile
//         }}
//         className="scrollbar-hidden flex h-full max-h-full flex-col justify-items-center overflow-y-scroll"
//       >
//         {TEXTS.map((item, index) => (
//           <div key={index} className="h-full flex-shrink-0">
//             <h3 className="mb-[20px] text-sm leading-o-130 lg:mb-[29px] lg:text-md lg:uppercase 2xl:text-l">
//               {item.title}
//             </h3>
//             <p className="text-s leading-o-130 lg:text-m 2xl:text-sm">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import { motion, AnimatePresence } from 'framer-motion';

const DevelopmentText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-8 h-[120px] overflow-hidden lg:mt-0 lg:h-[340px] lg:w-[320px] 2xl:h-[376px]">
      <div className="relative h-full overflow-hidden">
        <AnimatePresence>
          {TEXTS.map(
            (item, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ y: '100%', opacity: 0 }} // Початкова позиція з 0 прозорістю
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{
                    y: { duration: 4, ease: 'easeInOut' },
                    opacity: { duration: 4.5 },
                    delay: index === currentIndex ? 2.5 : 0,
                  }}
                  className="absolute flex h-full w-full lg:items-center 2xl:items-start"
                >
                  <div>
                    <h3 className="xl:text-l mb-[20px] text-sm leading-o-130 lg:mb-[29px] lg:text-md lg:uppercase">
                      {item.title}
                    </h3>
                    <p className="xl:text-sm text-s leading-o-130 lg:text-m">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// const marqueeAnimation = {
//   y: ["0%", "-100%"],
//   transition: {
//     duration: 15,
//     ease: "linear",
//     repeat: Infinity,
//   },
// };

// return (
//   <div className="mt-8 h-[340px] lg:mt-0 lg:w-[320px] 2xl:h-[376px] overflow-hidden relative">
//     <div className="overflow-y-hidden h-full">
//       <motion.div animate={marqueeAnimation}>
//         {TEXTS.map((item, index) => (
//           <motion.div
//             className="h-[340px]"
//             key={index}
//             initial={{ opacity: 1 }}
//             animate={{ opacity: [1, 0] }} // Прозорість кожного блоку поступово зменшується
//             transition={{
//               duration: 3, // Тривалість зникнення
//               delay: index * 3, // Затримка для кожного блоку
//               repeat: Infinity,
//               repeatDelay: (TEXTS.length - 1) * 3, // Час між циклами
//             }}
//           >
//             <div>
//               <h3>{item.title}</h3>
//               <p>{item.text}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </div>
// );

export default DevelopmentText;
