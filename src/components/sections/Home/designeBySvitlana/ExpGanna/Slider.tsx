'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ButtonSlide } from '../../../../ui/SwiperFoto/components/ButtonSlider';
import './slick-overrides-ganna.css';
import Image from 'next/image';
import Container from '@/components/ui/DesignBySvitlna/Container';

const SliderComponent: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [width, setWidth] = useState(
    window.innerWidth >= 768 ? '400px' : '240px'
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth >= 768 ? '400px' : '240px');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    className: ' variable-width center',
    variableWidth: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px', // Змінено на 0px для усунення внутрішніх відступів
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: 'Проєкт',
      subTitle: 'Kolyskova',
      image: '/assets/images/Projects/kolyskova.webp',
    },
    {
      title: 'Проєкт',
      subTitle: 'Balakun',
      image: '/assets/images/Projects/balakun.webp',
    },
    {
      title: 'Проєкт',
      s: 'Б',
      su: 'у',
      sub: 'п',
      image: '/assets/images/Projects/klouns.webp',
    },
    {
      title: 'Проєкт KRYLA',
      image: '/assets/images/Projects/zbir-na-dron.webp',
    },
    {
      title: 'ЗБІР',
      subTitleDR: 'на дрони',
      image: '/assets/images/Projects/127-brig.webp',
    },
  ];

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    //px-4 pb-8
    <div className="slider-container relative lg:p-0 lg:pb-0">
      {/* Слайдер */}
      <Slider
        ref={sliderRef}
        {...settings}
        //center-slider h-64
        className="center-slider mb-0 lg:mb-[60px] 2xl:mb-5"
      >
        {slides.map((slide, index) => (
          // <div key={index} className="p-2">
          // over p w-[360px] !!!!!!!!!!!!!!!!!! style={{ width: '400px' }}
          <div key={index} style={{ width }}>
            {/* my wrapper p py-2*/}
            <div className="slide-item border-gray-700 bg-gray-800 m-5 rounded-xl border lg:m-8 lg:rounded-2xl 2xl:m-5">
              <div className="slide-header flex justify-between border-b px-[10px] pb-1 pt-2 lg:px-4 lg:pb-[7px] lg:pt-[14px]">
                <h3 className="text-xs font-bold uppercase lg:text-sm">
                  {slide.title} <span>{slide.subTitle}</span>
                  <span className="lit1">{slide.s}</span>
                  <span className="lit2">{slide.su}</span>
                  <span className="lit3">{slide.sub}</span>
                  <span className="lit4">{slide.subTitleDR}</span>
                </h3>
                {/* //gap-2 */}
                <div className="icons flex">
                  <div className="flex items-center gap-1 lg:gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      //h-2 w-[14px] lg:h-[14px] lg:w-[26px]
                      className="icon h-2 w-[14px] lg:h-[14px] lg:w-[26px]"
                    >
                      <rect
                        // className="h-[7px] w-[13px] lg:h-[13px] lg:w-[25px]"
                        width="25"
                        height="13"
                        x="0.5"
                        y="0.5"
                        stroke="#fff"
                        rx="5.5"
                      ></rect>
                      <path
                        fill="#fff"
                        d="m13 2 .754 1.942 1.57-1.37-.235 2.07 2.026-.482-1.17 1.723 2.018.514-1.836.983 1.548 1.393-2.083.016.724 1.954-1.852-.954-.267 2.066L13 10.15l-1.197 1.705-.267-2.066-1.852.954.724-1.954-2.083-.016L9.873 7.38l-1.837-.983 2.019-.514-1.17-1.723 2.026.482-.235-2.07 1.57 1.37z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      className="icon h-2 w-[14px] lg:h-[14px] lg:w-[26px]"
                    >
                      <rect
                        width="25"
                        height="13"
                        x="0.5"
                        y="0.5"
                        stroke="#fff"
                        rx="5.5"
                      ></rect>
                      <path
                        className="bg"
                        fill="#fff"
                        d="m13 2 .754 1.942 1.57-1.37-.235 2.07 2.026-.482-1.17 1.723 2.018.514-1.836.983 1.548 1.393-2.083.016.724 1.954-1.852-.954-.267 2.066L13 10.15l-1.197 1.705-.267-2.066-1.852.954.724-1.954-2.083-.016L9.873 7.38l-1.837-.983 2.019-.514-1.17-1.723 2.026.482-.235-2.07 1.57 1.37z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      className="icon h-2 w-[14px] lg:h-[14px] lg:w-[26px]"
                    >
                      <rect
                        width="25"
                        height="13"
                        x="0.5"
                        y="0.5"
                        stroke="#fff"
                        rx="5.5"
                      ></rect>
                      <path
                        fill="#fff"
                        d="m13 2 .754 1.942 1.57-1.37-.235 2.07 2.026-.482-1.17 1.723 2.018.514-1.836.983 1.548 1.393-2.083.016.724 1.954-1.852-.954-.267 2.066L13 10.15l-1.197 1.705-.267-2.066-1.852.954.724-1.954-2.083-.016L9.873 7.38l-1.837-.983 2.019-.514-1.17-1.723 2.026.482-.235-2.07 1.57 1.37z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-[10px] py-3 lg:px-[18px] lg:py-6">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  //h-40
                  className="w-full object-cover"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          // {/* </div> */}
        ))}
      </Slider>

      {/* Кастомні кнопки навігації */}
      <Container className="hidden flex-row items-center justify-end gap-8 lg:flex">
        <ButtonSlide
          className="bg-transparent flex w-[55px] cursor-pointer items-center justify-center border-white transition-all hover:bg-white hover:text-s-gray"
          onClick={handlePrev}
          ariaLabel="кнопка для переходу до попереднього фото"
        />
        <ButtonSlide
          className="bg-transparent flex w-[55px] rotate-180 cursor-pointer items-center justify-center border-white transition-all hover:bg-white hover:text-s-gray"
          onClick={handleNext}
          ariaLabel="кнопка для переходу до наступного фото"
        />
      </Container>
    </div>
  );
};

export default SliderComponent;
