'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ButtonSlide } from '../../../../ui/SwiperFoto/components/ButtonSlider';
import './slick-overrides-ganna.css';
import Image from 'next/image';
import Container from '@/components/ui/DesignBySvitlna/Container';

// import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

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
    autoplay: true,
    autoplaySpeed: 3000,
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
        className="center-slider mb-12 lg:mb-[60px] 2xl:mb-5"
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ width }}>
            {/* my wrapper p py-2*/}
            <div className="slide-item border-gray-700 bg-gray-800 m-5 rounded-xl border lg:m-6 lg:rounded-2xl 2xl:m-5">
              <div className="slide-header flex justify-between border-b px-[10px] pb-1 pt-2 lg:px-4 lg:pb-[7px] lg:pt-[14px]">
                <h3 className="lett text-xs font-medium uppercase tracking-s-2 lg:text-md">
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
                      viewBox="0 0 26 14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="icon h-2 w-[14px] lg:h-[14px] lg:w-[26px]"
                    >
                      <rect
                        className="iconRect"
                        x="0.5"
                        y="0.5"
                        width="24"
                        height="12"
                        rx="5.5"
                        stroke="#fff"
                        stroke-width="1"
                        vector-effect="non-scaling-stroke"
                      />
                      <path
                        d="M13 2L13.7538 3.94153L15.3236 2.57272L15.0888 4.64219L17.1149 4.15968L15.9453 5.88299L17.9635 6.39732L16.127 7.37969L17.6751 8.77302L15.5924 8.7894L16.3156 10.7426L14.4639 9.78919L14.1966 11.8547L13 10.15L11.8034 11.8547L11.5361 9.78919L9.68439 10.7426L10.4076 8.7894L8.32492 8.77302L9.87297 7.37969L8.03646 6.39732L10.0547 5.88299L8.88508 4.15968L10.9112 4.64219L10.6764 2.57272L12.2462 3.94153L13 2Z  "
                        fill="#fff"
                      />
                    </svg>
                    {/* //----// */}
                    <svg
                      viewBox="0 0 26 14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="icon h-2 w-[14px] lg:h-[14px] lg:w-[26px]"
                    >
                      <rect
                        className="iconRect"
                        x="0.5"
                        y="0.5"
                        width="24"
                        height="12"
                        rx="5.5"
                        stroke="#fff"
                        stroke-width="1"
                        vector-effect="non-scaling-stroke"
                      />
                      <path
                        d="M13 2L13.7538 3.94153L15.3236 2.57272L15.0888 4.64219L17.1149 4.15968L15.9453 5.88299L17.9635 6.39732L16.127 7.37969L17.6751 8.77302L15.5924 8.7894L16.3156 10.7426L14.4639 9.78919L14.1966 11.8547L13 10.15L11.8034 11.8547L11.5361 9.78919L9.68439 10.7426L10.4076 8.7894L8.32492 8.77302L9.87297 7.37969L8.03646 6.39732L10.0547 5.88299L8.88508 4.15968L10.9112 4.64219L10.6764 2.57272L12.2462 3.94153L13 2Z  "
                        className="bgIcon"
                        fill="#fff"
                      />
                    </svg>
                    {/* //----// */}
                    <svg
                      viewBox="0 0 26 14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="icon h-2 w-[14px] lg:h-[14px] lg:w-[26px]"
                    >
                      <rect
                        className="iconRect"
                        x="0.5"
                        y="0.5"
                        width="24"
                        height="12"
                        rx="5.5"
                        stroke="#fff"
                        stroke-width="1"
                        vector-effect="non-scaling-stroke"
                      />
                      <path
                        d="M13 2L13.7538 3.94153L15.3236 2.57272L15.0888 4.64219L17.1149 4.15968L15.9453 5.88299L17.9635 6.39732L16.127 7.37969L17.6751 8.77302L15.5924 8.7894L16.3156 10.7426L14.4639 9.78919L14.1966 11.8547L13 10.15L11.8034 11.8547L11.5361 9.78919L9.68439 10.7426L10.4076 8.7894L8.32492 8.77302L9.87297 7.37969L8.03646 6.39732L10.0547 5.88299L8.88508 4.15968L10.9112 4.64219L10.6764 2.57272L12.2462 3.94153L13 2Z  "
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-[10px] py-3 lg:px-[18px] lg:py-6">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Кастомні кнопки навігації */}
      <Container className="hidden flex-row items-center justify-end gap-8 lg:flex">
        <ButtonSlide
          // border-white hover:bg-white hover:text-s-gray"
          className="bg-transparent z-10 border-white text-white hover:bg-white hover:text-s-gray"
          onClick={handlePrev}
          ariaLabel="кнопка для переходу до попереднього фото"
        />
        <ButtonSlide
          className="bg-transparent z-10 rotate-180 border-white text-white hover:bg-white hover:text-s-gray"
          onClick={handleNext}
          ariaLabel="кнопка для переходу до наступного фото"
        />
      </Container>
    </div>
  );
};

export default SliderComponent;
