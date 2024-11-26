'use client';
import React from 'react';
import { ProjectsImagesProps } from './types';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import ProjectCard from './ProjectCard';

const SliderDesktop: React.FC<ProjectsImagesProps> = ({ images }) => {
  return (
    <div>
      {images.map((image, ind) => (
        <CardContainer
          key={image.name + ind}
          className="absolute w-fit"
          style={{
            top: image.top,
            left: image.left,
            // width: `${image.widthTablet}px`,
            // height: `${image.heightTablet}px`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <CardBody className="group/card h-full w-full rounded-xl transition-transform duration-300 ease-in-out">
            <CardItem
              //   translateZ={image.translateZ}
              className="h-full w-full transform group-hover/card:h-[164px] group-hover/card:w-[340px]"
            >
              <ProjectCard {...image} />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default SliderDesktop;
