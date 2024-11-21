import React from 'react';
import Image from 'next/image';

import { SvitlanaProjectsImagesType } from './types';
import { ProjectsImagesProps } from './types';

const ProjectCard = ({ src, name, link }: SvitlanaProjectsImagesType) => {
  return (
    <div>
      <Image
        src={src}
        className="rounded-xl object-cover group-hover/card:shadow-xl"
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProjectCard;
