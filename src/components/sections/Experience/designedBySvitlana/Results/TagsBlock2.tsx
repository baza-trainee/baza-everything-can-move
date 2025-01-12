'use client';

import React, { useRef, useEffect } from 'react';

const TagsBlock2 = (props:{hovered:boolean, mouseX:number, mouseY:number}) => {

    const tagsBlock2 = useRef<HTMLDivElement | null >(null);
    const {hovered, mouseX, mouseY} = props

    useEffect(() => {
        if(!tagsBlock2.current) return;
        const randomIndexX = Math.random() > 0.5 ? '': '-';
        const randomIndexY = Math.random() > 0.5 ? '': '-';
        // const block = tagsBlock2.current.getBoundingClientRect();

        const handleMouseOver = (): void => {
            if(!tagsBlock2.current) return;
            tagsBlock2.current.style.left = `${randomIndexX}${8}%`;
            tagsBlock2.current.style.top = `${randomIndexY}${8}%`;
        }

    if (tagsBlock2) {
        tagsBlock2.current.addEventListener('mouseover', handleMouseOver);
    }
      return () => {
        tagsBlock2.current?.removeEventListener('mouseover', handleMouseOver);
      };
    }, [hovered, mouseX, mouseY])



  return (
    <div  ref={tagsBlock2} className='w-full uppercase h-[355px] absolute duration-1000'> 
        <div className="absolute inline-block translate-x-[84px] translate-y-[85px] rotate-[0.04deg]">
          <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
            Гнучкість
          </div>
        </div>
        <div className="absolute inline-block translate-x-[146px] translate-y-[55px] rotate-[12deg]">
          <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
            Колаборація
          </div>
        </div>
        <div className="absolute inline-block translate-x-[63px] translate-y-[270px] rotate-[6deg]">
          <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
            Креативність
          </div>
        </div>
    </div>
  )
}

export default TagsBlock2


