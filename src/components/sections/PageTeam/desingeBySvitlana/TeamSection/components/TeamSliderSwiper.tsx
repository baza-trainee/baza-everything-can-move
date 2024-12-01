import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

import { FreeMode, Autoplay, EffectCoverflow } from 'swiper/modules';
import { teamsFoto } from './ui/dataFoto';
import CardTeam from './Card';
import clsx from 'clsx';

function TeamSliderSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="absolute bottom-0 left-1/2 h-[320px] w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <div className="flex h-full w-full items-center justify-center">
        <Swiper
          // effect={'coverflow'}
          grabCursor={true}
          slidesPerView={5}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          spaceBetween={100}
          loop
          loopAdditionalSlides={1}
          freeMode={true}
          centeredSlides={true}
          modules={[FreeMode, Autoplay]}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: false,
          // }}
          // speed={2500}
          className=""
          // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {teamsFoto.map((item, index) => {
            // const isCenter = index === activeIndex;
            // const isSide =
            //   index === (activeIndex + 1) % teamsFoto.length ||
            //   index === (activeIndex - 1 + teamsFoto.length) % teamsFoto.length;
            // const isFarSide =
            //   index === (activeIndex + 2) % teamsFoto.length ||
            //   index === (activeIndex - 2 + teamsFoto.length) % teamsFoto.length;

            return (
              <SwiperSlide
                key={index}
                className="h-[280px] w-[224px] bg-olga-green"
                // className={clsx(
                //   `relative transition-all duration-700 ease-in-out`,
                //   index === 2 && 'translate-y-[20px] scale-100', // Центральний слайд
                //   index === 1 || index === 3
                //     ? 'translate-y-[-20px]' // Сусідні слайди
                //     : 'translate-y-[-40px] scale-[0.5]' // Крайні слайди
                // )}
              >
                {/* <div
                  className={clsx(
                    'h-[280px] w-[224px]',
                    'transition-all duration-[2500ms]',
                    {
                      'translate-y-[20px]': isCenter,
                      'translate-y-[-20px]': isSide,
                      'translate-y-0 scale-[0.5]': isFarSide,
                      'hidden scale-0 opacity-0':
                        !isCenter && !isSide && !isFarSide,
                    },
                    'flex items-center justify-center'
                  )}
                > */}
                <CardTeam
                  urlFoto={item.urlFoto}
                  name={item.name}
                  role={item.role}
                />
                {/* </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default TeamSliderSwiper;
