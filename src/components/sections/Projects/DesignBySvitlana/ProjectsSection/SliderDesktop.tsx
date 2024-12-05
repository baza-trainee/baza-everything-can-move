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

            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <CardBody className="group/card h-full w-full cursor-pointer rounded-2xl border border-white/50 transition-transform duration-300 ease-in-out">
            <CardItem
              translateZ="70"
              // px-4 pt-[14px]
              className="flex justify-between px-6 pb-2 pt-6"
            >
              <h4 className="font-second-family text-m font-medium leading-s-16 tracking-s-2 text-white/90">
                {image.name.toUpperCase()}
              </h4>

              <StarsBtnComponent
                classNameDiv="gap-[6px] text-white/90"
                classNameIcons="h-[14px] w-[26px] "
              />
            </CardItem>
            {/* <div className="w-[332px] border-b border-white"></div> */}

            <div className="w-[347px] border-b border-white/50"></div>

            <CardItem
              translateZ="150"
              //   translateZ={image.translateZ} group-hover/card:h-[164px] group-hover/card:w-[340px]
              //px-4 py-[19px]
              className="h-full w-full transform px-6 py-6"
            >
              <Image
                src={image.src}
                className="h-[146px] w-[300px] object-cover group-hover/card:shadow-xl"
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
