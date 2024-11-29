'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types'; // Додаємо тип Swiper
import { ButtonSlide } from '../../../../ui/SwiperFoto/components/ButtonSlider';

import './style.css';

const Slider = () => {
  const projects = [
    { title: 'Проєкт Буп', image: '/assets/images/Projects/1001song.webp' },
    { title: 'Проєкт Balakun', image: '/assets/images/Projects/balakun.webp' },
    { title: 'Baza Skill', image: '/assets/images/Projects/baza_skill.webp' },
    {
      title: 'Baza Tainee Ukraine',
      image: '/assets/images/Projects/baza_tainee_ukraine.webp',
    },
    { title: 'Klouns', image: '/assets/images/Projects/klouns.webp' },
    { title: 'Kolyskova', image: '/assets/images/Projects/kolyskova.webp' },
    { title: 'Militari', image: '/assets/images/Projects/militari.webp' },
    { title: 'Organik', image: '/assets/images/Projects/organik.webp' },
  ];

  // Типізуємо реф для Swiper
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="slider-container relative p-0 pb-8 lg:pb-0">
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Зберігаємо реф на Swiper
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1400: { slidesPerView: 3.5 },
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper border-gray-700 bg-gray-800 rounded-lg border-2">
              <div className="slide-header flex items-center justify-between border-b-2 p-4">
                <h3 className="text-sm font-bold text-white">
                  {project.title}
                </h3>
                <div className="icons flex gap-2">
                  <div className="flex items-center gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      className="h-[14px] w-[26px]"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      className="h-[14px] w-[26px]"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      className="h-[14px] w-[26px]"
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
              <div className="slide-content">
                <img
                  src={project.image}
                  alt={project.title}
                   className="h-auto w-full rounded-b-lg p-4 transform transition-transform duration-300 hover:scale-125"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопки навігації */}
      <div className="mt-4 hidden flex-row items-center justify-end gap-8 lg:flex">
        <ButtonSlide
          className="flex h-full w-full cursor-pointer items-center justify-center"
          onClick={handlePrev}
          ariaLabel="кнопка для переходу до попереднього фото"
        />
        <ButtonSlide
          className="flex h-full w-full rotate-180 cursor-pointer items-center justify-center"
          onClick={handleNext}
          ariaLabel="кнопка для переходу до наступного фото"
        />
      </div>

      {/* Пагінація */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
