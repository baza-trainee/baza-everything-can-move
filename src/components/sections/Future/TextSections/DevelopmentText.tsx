'use client';
import React, { useRef, useEffect } from 'react';
import { TEXTS } from '../../../../constants/text';

interface DevelopmentTextProps {
  onScrollUpdate?: (scrollInfo: { isTop: boolean; isBottom: boolean }) => void;
}

const DevelopmentText: React.FC<DevelopmentTextProps> = ({
  onScrollUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isTop = container.scrollTop === 0;
    const isBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight;

    // Дебаунсинг прокрутки за допомогою setTimeout, щоб зменшити кількість викликів
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      onScrollUpdate?.({ isTop, isBottom });
    }, 100); // Затримка в 100мс для зменшення викликів
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mt-8 h-[340px] lg:mt-0 lg:w-[320px] xl:h-[376px] xl:w-[346px]">
      <div
        ref={containerRef}
        style={{
          overflowY: 'scroll',
          scrollbarWidth: 'none', // для Firefox
          msOverflowStyle: 'none', // для Internet Explorer
          WebkitOverflowScrolling: 'touch', // для плавної прокрутки на мобільних пристроях
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
