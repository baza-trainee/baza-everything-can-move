import { useCallback, useEffect, useRef } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

import { teamsFoto } from '../ui/dataFoto';
import CardTeam from './Card';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

function SliderEmbla() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
      align: 'center',
    },
    [
      AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        speed: 1,
        stopOnMouseEnter: true,
      }),
    ]
  );
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });
  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.teamSlide') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);

          const scale = numberWithinRange(tweenValue, 0, 1);
          const tweenNode = tweenNodes.current[slideIndex];
          const newScale = () => {
            if (tweenValue > 0.5) {
              return 1;
            } else if (tweenValue <= 0.5 && tweenValue >= -0.1) {
              return numberWithinRange(tweenValue + scale, 0.5, 1);
            } else if (tweenValue < -0.1) {
              return 1 + tweenValue - 0.4;
            }
          };

          tweenNode.style.transform = isMobile
            ? `scale(${scale})`
            : `scale(${newScale()}) translateY(${60 * scale}px)`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-[350px] touch-pan-y touch-pinch-zoom items-start">
          {teamsFoto.map((item, index) => (
            <div className="flex-shrink-0 flex-grow-0 basis-1/5" key={index}>
              <div
                className={clsx(
                  'teamSlide',
                  'flex items-center justify-center'
                )}
              >
                <CardTeam
                  urlFoto={item.urlFoto}
                  name={item.name}
                  role={item.role}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderEmbla;
