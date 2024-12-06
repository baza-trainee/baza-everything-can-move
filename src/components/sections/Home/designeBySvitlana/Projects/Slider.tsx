'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types'; // Додаємо тип Swiper
import { ButtonSlide } from '../../../../ui/SwiperFoto/components/ButtonSlider';
import './style.css';

const Slider = () => {
  const projects = [
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

  // Використання третього слайда як активного
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(4); // Зробити третій слайд активним (індекс 2)
    }
  }, []);

  return (
    <div className="slider-container relative p-0 pb-8 lg:pb-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
          768: { slidesPerView: 2.5 },
          1400: { slidesPerView: 4.5 },
        }}
        autoplay={{
          delay: 3000, // Час між прокрутками (у мс)
          disableOnInteraction: false, // Продовжувати після ручного гортання
        }}
        
        loop={true} // Увімкнути безкінечний слайдер
        className="mySwiper overflow-scroll"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper border-gray-700 bg-gray-800 rounded-lg border-2">
              <div className="slide-header flex items-center justify-between border-b-2 p-4">
                <h3 className="text-sm font-bold uppercase text-white">
                  {project.title} <span>{project.subTitle}</span>
                  <span className="lit1">{project.s}</span>
                  <span className="lit2">{project.su}</span>
                  <span className="lit3">{project.sub}</span>
                  <span className="lit4">{project.subTitleDR}</span>
                </h3>
                <div className="icons flex gap-2">
                  <div className="flex items-center gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="14"
                      fill="none"
                      className="icon h-[14px] w-[26px]"
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
                      className="icon h-[14px] w-[26px]"
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
                      className="icon h-[14px] w-[26px]"
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
                  className="h-auto w-full transform rounded-b-lg p-4 transition-transform duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопки навігації */}
      <div className="mr-16 mt-4 hidden flex-row items-center justify-end gap-8 lg:flex">
        <ButtonSlide
          className="bg-transparent hover:bg-gray-600 flex h-14 w-12 cursor-pointer items-center justify-center rounded-full transition-all"
          onClick={handlePrev}
          ariaLabel="кнопка для переходу до попереднього фото"
        />
        <ButtonSlide
          className="bg-transparent hover:bg-gray-600 flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center rounded-full transition-all"
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
