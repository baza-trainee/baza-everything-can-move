'use client';
import React, { useEffect, useState } from 'react';
import { TEXTS } from '../../../../constants/text';
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


export default DevelopmentText;
