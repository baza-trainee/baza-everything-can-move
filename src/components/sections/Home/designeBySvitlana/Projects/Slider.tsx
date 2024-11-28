'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ButtonSlide } from '../../../../ui/SwiperFoto/components/ButtonSlider';

import { Navigation, Pagination } from 'swiper/modules';
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

  const swiperRef = useRef(null);

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
    <div className="slider-container relative p-0">
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
          1024: { slidesPerView: 3.5 },
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper border-gray-700 bg-gray-800 rounded-lg border-2">
              <div className="slide-header flex items-center justify-between p-4 border-b-2">
                <h3 className="text-md font-bold text-white">
                  {project.title}
                </h3>
                <div className="icons flex gap-2">
                  <span className="bg-white h-2 w-2 rounded-full"></span>
                  <span className="bg-white h-2 w-2 rounded-full"></span>
                  <span className="bg-white h-2 w-2 rounded-full"></span>
                </div>
              </div>
              <div className="slide-content">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full rounded-b-lg p-4"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопки навігації */}
      <div className="mt-4 flex flex-row items-center justify-end gap-8">
        <ButtonSlide
          className="flex w-[100%] h-[100%]"
          onClick={handlePrev}
          ariaLabel="кнопка для переходу до попереднього фото"
        />
        <ButtonSlide
          className="flex w-[100%] rotate-180"
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
