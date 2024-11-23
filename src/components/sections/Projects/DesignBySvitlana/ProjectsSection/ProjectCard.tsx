import React from 'react';
import Image from 'next/image';

import { SvitlanaProjectsImagesType } from './types';

import StarsBtnComponent from '@/components/ui/DesignBySvitlna/StarsBtnComponent';

const ProjectCard = ({ src, name }: SvitlanaProjectsImagesType) => {
  return (
    <div className="rounded-2xl border border-white">
      <div className="flex justify-between border-b border-white px-4 pb-2 pt-[14px]">
        <h4 className="leading-s-16 font-second-family text-m font-medium tracking-s-2">
          {name.toUpperCase()}
        </h4>
        <StarsBtnComponent
          classNameDiv="gap-[6px]"
          classNameIcons="h-[14px] w-[26px]"
        />
      </div>
      <div className="px-4 py-[19px]">
        <Image
          src={src}
          className="object-cover"
          alt={name}
          // width={302}
          // height={146}
          style={{
            width: '300px',
            height: '146px',
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
