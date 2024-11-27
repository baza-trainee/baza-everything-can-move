'use client';
import React from 'react';
import Image from 'next/image';
import { ProjectsImagesProps } from './types';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';

import StarsBtnComponent from '@/components/ui/DesignBySvitlna/StarsBtnComponent';

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
          <CardBody className="group/card h-full w-full cursor-pointer rounded-2xl border border-white transition-transform duration-300 ease-in-out">
            <CardItem
              translateZ="50"
              className="flex justify-between px-4 pb-2 pt-[14px]"
            >
              <h4 className="font-second-family text-m font-medium leading-s-16 tracking-s-2">
                {image.name.toUpperCase()}
              </h4>
              <StarsBtnComponent
                classNameDiv="gap-[6px]"
                classNameIcons="h-[14px] w-[26px]"
              />
            </CardItem>
            <div className="w-[332px] border-b border-white"></div>
            <CardItem
              translateZ="100"
              //   translateZ={image.translateZ} group-hover/card:h-[164px] group-hover/card:w-[340px]
              className="h-full w-full transform px-4 py-[19px]"
            >
              <Image
                src={image.src}
                className="object-cover"
                alt={image.name}
                // width={302}
                // height={146}
                style={{
                  width: '300px',
                  height: '146px',
                }}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default SliderDesktop;
