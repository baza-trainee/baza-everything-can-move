import React from 'react';
import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderMobile: React.FC<ProjectsImagesProps> = ({ images }) => {
  console.log('one image', images[0]);
  return (
    <div>
      <ProjectCard {...images[0]} />
    </div>
  );
};

export default SliderMobile;
