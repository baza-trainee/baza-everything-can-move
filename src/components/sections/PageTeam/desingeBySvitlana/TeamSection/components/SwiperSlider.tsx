import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';

import { FreeMode, Autoplay, Keyboard, EffectCreative } from 'swiper/modules';
import { teamsFoto } from '../ui/dataFoto';
import CardTeam from './Card';
import { useState } from 'react';

function SwiperSlider() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );

  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // effect={'creative'}
        centeredSlides={true}
        // creativeEffect={{
        //   limitProgress: 5,
        //   //   progressMultiplier: 0,
        //   prev: {
        //     scale: 1,
        //     translate: ['-120%', -20, 0],
        //     // opacity: 1,
        //   },

        //   next: {
        //     scale: 1,
        //     translate: ['120%', -20, 0],
        //     // opacity: 1,
        //   },
        // }}
        // autoHeight={true}
        loop={true}
        slidesPerView={5}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        spaceBetween={30}
        freeMode={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        speed={2000}
        modules={[
          FreeMode,
          Keyboard,
          // EffectCreative,
          Autoplay,
        ]}
        className="mySwiper"
      >
        {teamsFoto.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-[320px] items-center justify-center">
              <CardTeam
                urlFoto={item.urlFoto}
                name={item.name}
                role={item.role}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
