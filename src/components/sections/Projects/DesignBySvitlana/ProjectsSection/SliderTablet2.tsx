'use client';
//infinity
import React, { useState } from 'react';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

const SliderTablet2: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <InfiniteMovingCards speed="slow" addClass={' mb-8 h-[225px]'}>
        {images.map((image, index) => (
          <div
            className="relative mr-[31px] shrink-0 grow-0"
            key={image.name + index}
          >
            <ProjectCard {...image} />
          </div>
        ))}
      </InfiniteMovingCards>

      <div className="mb-8 flex justify-center gap-[15px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border border-white ${index === currentIndex ? 'bg-white' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </>
  );
};

export default SliderTablet2;
