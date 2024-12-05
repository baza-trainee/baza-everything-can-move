import React from 'react';
import Image from 'next/image';

import { SvitlanaProjectsImagesType } from '@/constants/images/imagesSrc';

import StarsBtnComponent from '@/components/ui/DesignBySvitlna/StarsBtnComponent';

const ProjectCard = ({ src, name }: SvitlanaProjectsImagesType) => {
  return (
    <div className="rounded-2xl border border-white">
      <div className="flex justify-between border-b border-white px-4 pb-2 pt-[14px]">
        <h4 className="font-second-family text-m font-medium leading-s-16 tracking-s-2 text-white">
          {name.toUpperCase()}
        </h4>
        <StarsBtnComponent
          classNameDiv="gap-[6px] text-white"
          classNameIcons="h-[14px] w-[26px]"
        />
      </div>
      <div className="px-4 py-[19px]">
        <Image
          src={src}
          // pointer-events-none
          className="object-cover"
          alt={name}
          // width={302}
          // height={146}
          style={{
            width: '300px',
            height: '146px',
          }}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
