import React from 'react';
import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderMobile: React.FC<ProjectsImagesProps> = ({ images }) => {
  return (
    <div className="mb-9">
      <ProjectCard {...images[0]} />
    </div>
  );
};

export default SliderMobile;
