'use client';
import React, { useRef, useEffect } from 'react';
import { TEXTS } from '../../../../constants/text';

interface DevelopmentTextProps {
  onScrollUpdate?: (scrollInfo: { isTop: boolean; isBottom: boolean }) => void;
}

const DevelopmentText: React.FC<DevelopmentTextProps> = ({ onScrollUpdate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounce function to limit the scroll updates
  const debounceScrollUpdate = (callback: () => void, delay: number) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(callback, delay);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isTop = container.scrollTop === 0;
    const isBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;

    // Use debounce function to limit the number of calls to onScrollUpdate
    debounceScrollUpdate(() => {
      onScrollUpdate?.({ isTop, isBottom });
    }, 100); // 100ms delay
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);

      // Clean up the timeout on unmount
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-8 h-[340px] lg:mt-0 lg:w-[320px] xl:h-[376px] xl:w-[346px]">
      <div
        ref={containerRef}
        style={{
          overflowY: 'scroll',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE
          WebkitOverflowScrolling: 'touch', // Smooth scroll on mobile
        }}
        className="scrollbar-hidden flex h-full max-h-full flex-col overflow-y-scroll"
      >
        {TEXTS.map((item, index) => (
          <div key={index} className="h-full flex-shrink-0">
            <h3 className="mb-[20px] text-sm leading-o-130 lg:mb-[29px] lg:text-md lg:uppercase xl:text-l">
              {item.title}
            </h3>
            <p className="text-s leading-o-130 lg:text-m xl:text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentText;
