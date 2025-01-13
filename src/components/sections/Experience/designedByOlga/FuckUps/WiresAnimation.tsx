"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

const transition = {
  duration: 8,
  ease: "linear",
};

export const WiresAnimation = ({ pathLength}: { pathLength: MotionValue }) => {
  return (
    <div className={cn("sticky top-10")}>

      <div className="container">
        <p className="text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 max-w-[220px] lg:max-w-[320px] 2xl:max-w-[346px]"> Неправильно збілдили проєкт для деплою. Папки завернули через рівень. Довго мучились...</p>
        <p className="text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] text-left float-right text-neutral-400 max-w-[220px] lg:max-w-[320px] 2xl:max-w-[346px] pt-[136px] lg:pt-[107px] 2xl:pt-[158px]">Зверстали першу сторінку сайту на bootstrap з жорсткою структурою.<br/><br/>Переписували заново фактично всю сторінку.</p>
      </div>

      <div className='w-full h-auto flex items-center justify-center pt-[61px] lg:pt-[64px] 2xl:pt-[58px]'>
        <div className="w-full h-fit flex items-center justify-center bg-transparent absolute">
          <div className="bg-white rounded-full py-3 px-6 2xl:px-10 2xl:py-3 z-30 text-black w-fit mx-auto uppercase text-lg 2xl:text-[36px] leading-s-48 2xl:leading-[54px] font-medium">Baza trainee</div>
        </div>
        <svg viewBox="0 0 375 102" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="w-full block lg:hidden">
        <motion.path d="M 0 8.0552 C 33.5308 5.1838 51.9852 7.4763 64.7931 10.47 C 77.601 13.4637 102.835 26.4486 117.749 36.1638 C 124.863 39.6881 181.862 36.8961 238.192 36.1474 C 249.347 36.0397 256.965 35.5578 259.251 34.4252 C 274.165 24.7099 299.399 11.725 312.207 8.7313 C 325.015 5.7376 343.469 3.4452 376 6.3165 M 0 93.9448 C 33.5308 96.8161 51.9852 94.5237 64.7931 91.53 C 77.601 88.5363 102.835 75.5514 117.522 68.886 C 129.71 67.811 181.326 68.886 238.678 68.886 C 250.148 68.528 255.525 69.961 258.751 69.961 C 274.165 77.2901 299.399 90.275 312.207 93.2687 C 325.015 96.2624 343.469 98.5548 376 95.6835 M 0 29.4532 C 33.5308 27.9297 51.9852 29.1461 64.7931 30.7346 C 77.601 32.3231 102.835 39.213 117.749 44.368 C 124.863 46.238 181.862 44.7566 238.192 44.3593 C 249.347 44.3022 256.965 44.0465 259.251 43.4455 C 274.165 38.2905 299.399 31.4005 312.207 29.812 C 325.015 28.2235 343.469 27.0071 376 28.5307 M 0 73.5924 C 33.5308 74.7644 51.9852 73.8287 64.7931 72.6068 C 77.601 71.3848 102.835 66.0849 117.749 62.1195 C 129.71 62.075 181.862 61.8206 238.192 62.1262 C 249.347 62.1701 256.965 62.3668 259.251 62.8292 C 274.165 66.7945 299.399 72.0945 312.207 73.3164 C 325.015 74.5383 343.469 75.474 376 74.3021 M 0 48.5393 C 33.5308 48.0119 51.9852 48.4329 64.7931 48.9828 C 77.601 49.5327 102.835 51.9176 117.749 53.7021 C 124.863 54.3494 181.862 53.8366 238.192 53.6991 C 249.347 53.6793 256.965 53.5908 259.251 53.3827 C 274.165 51.5983 299.399 49.2133 312.207 48.6634 C 325.015 48.1136 343.469 47.6925 376 48.2199" stroke="#c3ff0a" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLength }} transition={transition}/>
        <path d="M 0 8.0552 C 33.5308 5.1838 51.9852 7.4763 64.7931 10.47 C 77.601 13.4637 102.835 26.4486 117.749 36.1638 C 124.863 39.6881 181.862 36.8961 238.192 36.1474 C 249.347 36.0397 256.965 35.5578 259.251 34.4252 C 274.165 24.7099 299.399 11.725 312.207 8.7313 C 325.015 5.7376 343.469 3.4452 376 6.3165 M 0 93.9448 C 33.5308 96.8161 51.9852 94.5237 64.7931 91.53 C 77.601 88.5363 102.835 75.5514 117.522 68.886 C 129.71 67.811 181.326 68.886 238.678 68.886 C 250.148 68.528 255.525 69.961 258.751 69.961 C 274.165 77.2901 299.399 90.275 312.207 93.2687 C 325.015 96.2624 343.469 98.5548 376 95.6835 M 0 29.4532 C 33.5308 27.9297 51.9852 29.1461 64.7931 30.7346 C 77.601 32.3231 102.835 39.213 117.749 44.368 C 124.863 46.238 181.862 44.7566 238.192 44.3593 C 249.347 44.3022 256.965 44.0465 259.251 43.4455 C 274.165 38.2905 299.399 31.4005 312.207 29.812 C 325.015 28.2235 343.469 27.0071 376 28.5307 M 0 73.5924 C 33.5308 74.7644 51.9852 73.8287 64.7931 72.6068 C 77.601 71.3848 102.835 66.0849 117.749 62.1195 C 129.71 62.075 181.862 61.8206 238.192 62.1262 C 249.347 62.1701 256.965 62.3668 259.251 62.8292 C 274.165 66.7945 299.399 72.0945 312.207 73.3164 C 325.015 74.5383 343.469 75.474 376 74.3021 M 0 48.5393 C 33.5308 48.0119 51.9852 48.4329 64.7931 48.9828 C 77.601 49.5327 102.835 51.9176 117.749 53.7021 C 124.863 54.3494 181.862 53.8366 238.192 53.6991 C 249.347 53.6793 256.965 53.5908 259.251 53.3827 C 274.165 51.5983 299.399 49.2133 312.207 48.6634 C 325.015 48.1136 343.469 47.6925 376 48.2199" stroke="#c3ff0a" strokeWidth="2" fill="none" pathLength={1} filter="url(#blurMe)" />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        </svg>
        <svg viewBox="0 0 768 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="w-full hidden lg:block 2xl:hidden">
        <motion.path d="M 0 7.6567 C 66.623 5.1599 104.418 7.1533 130.648 9.7565 C 156.879 12.3597 208.558 23.651 239.101 32.099 C 253.672 35.1635 370.406 32.7358 485.769 32.0847 C 508.616 31.9911 524.216 31.572 528.899 30.5871 C 559.442 22.1391 611.121 10.8478 637.352 8.2446 C 663.582 5.6414 701.377 3.648 768 6.1448 M 0 82.3433 C 66.623 84.8401 104.418 82.8467 130.648 80.2435 C 156.879 77.6403 208.558 66.349 238.987 61.003 C 255.084 61.325 369.689 61.003 484.938 60.359 C 509.405 60.359 521.638 60.359 528.076 61.325 C 559.442 67.8609 611.121 79.1522 637.352 81.7554 C 663.582 84.3586 701.377 86.352 768 83.8552 M 0 26.2647 C 66.623 24.9399 104.418 25.9976 130.648 27.3789 C 156.879 28.7602 208.558 34.7515 239.101 39.2341 C 253.672 40.8602 370.406 39.572 485.769 39.2265 C 508.616 39.1769 524.216 38.9545 528.899 38.4319 C 559.442 33.9493 611.121 27.958 637.352 26.5767 C 663.582 25.1954 701.377 24.1377 768 25.4625 M 0 64.6448 C 66.623 65.6639 104.418 64.8503 130.648 63.7877 C 156.879 62.7252 208.558 58.1165 239.101 54.6684 C 252.83 53.92 370.406 54.4084 485.769 54.6742 C 508.616 54.7124 524.216 54.8835 528.899 55.2855 C 559.442 58.7336 611.121 63.3423 637.352 64.4048 C 663.582 65.4674 701.377 66.281 768 65.2619 M 0 42.8611 C 66.623 42.4025 104.418 42.7687 130.648 43.2468 C 156.879 43.725 208.558 45.7989 239.101 47.3506 C 253.672 47.9134 370.406 47.4675 485.769 47.3479 C 508.616 47.3307 524.216 47.2538 528.899 47.0729 C 559.442 45.5212 611.121 43.4473 637.352 42.9691 C 663.582 42.491 701.377 42.1249 768 42.5835" stroke="#c3ff0a" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLength }} transition={transition}/>
        <path d="M 0 7.6567 C 66.623 5.1599 104.418 7.1533 130.648 9.7565 C 156.879 12.3597 208.558 23.651 239.101 32.099 C 253.672 35.1635 370.406 32.7358 485.769 32.0847 C 508.616 31.9911 524.216 31.572 528.899 30.5871 C 559.442 22.1391 611.121 10.8478 637.352 8.2446 C 663.582 5.6414 701.377 3.648 768 6.1448 M 0 82.3433 C 66.623 84.8401 104.418 82.8467 130.648 80.2435 C 156.879 77.6403 208.558 66.349 238.987 61.003 C 255.084 61.325 369.689 61.003 484.938 60.359 C 509.405 60.359 521.638 60.359 528.076 61.325 C 559.442 67.8609 611.121 79.1522 637.352 81.7554 C 663.582 84.3586 701.377 86.352 768 83.8552 M 0 26.2647 C 66.623 24.9399 104.418 25.9976 130.648 27.3789 C 156.879 28.7602 208.558 34.7515 239.101 39.2341 C 253.672 40.8602 370.406 39.572 485.769 39.2265 C 508.616 39.1769 524.216 38.9545 528.899 38.4319 C 559.442 33.9493 611.121 27.958 637.352 26.5767 C 663.582 25.1954 701.377 24.1377 768 25.4625 M 0 64.6448 C 66.623 65.6639 104.418 64.8503 130.648 63.7877 C 156.879 62.7252 208.558 58.1165 239.101 54.6684 C 252.83 53.92 370.406 54.4084 485.769 54.6742 C 508.616 54.7124 524.216 54.8835 528.899 55.2855 C 559.442 58.7336 611.121 63.3423 637.352 64.4048 C 663.582 65.4674 701.377 66.281 768 65.2619 M 0 42.8611 C 66.623 42.4025 104.418 42.7687 130.648 43.2468 C 156.879 43.725 208.558 45.7989 239.101 47.3506 C 253.672 47.9134 370.406 47.4675 485.769 47.3479 C 508.616 47.3307 524.216 47.2538 528.899 47.0729 C 559.442 45.5212 611.121 43.4473 637.352 42.9691 C 663.582 42.491 701.377 42.1249 768 42.5835" stroke="#c3ff0a" strokeWidth="2" fill="none" pathLength={1} filter="url(#blurMe)" />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        </svg>
        <svg viewBox="0 0 1440 148" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="w-full hidden 2xl:block">
        <motion.path d="M 0 9.5828 C 124.918 5.2758 195.783 8.7145 244.966 13.205 C 294.148 17.6955 391.046 41.9272 448.315 56.5 C 476.839 57.637 694.512 57.6231 910.818 56.5 C 953.654 56.3385 982.905 50.8367 991.685 49.1377 C 1048.95 34.5649 1145.85 15.0875 1195.03 10.597 C 1244.22 6.1064 1315.08 2.6678 1440 6.9747 M 0 138.417 C 124.918 142.724 195.783 139.286 244.966 134.795 C 294.148 130.304 391.046 110.827 448.375 101.09 C 476.125 101.09 689.088 101.09 911.085 101.735 C 956.259 102.38 980.782 101.735 990.462 103.026 C 1048.95 113.435 1145.85 132.912 1195.03 137.403 C 1244.22 141.894 1315.08 145.332 1440 141.025 M 0 41.6798 C 124.918 39.3945 195.783 41.2191 244.966 43.6019 C 294.148 45.9846 391.046 56.3195 449.169 67.932 C 480.056 67.932 693.691 67.932 911.187 66.645 C 954.3 66.002 981.969 64.071 991.685 62.6682 C 1048.95 54.9357 1145.85 44.6007 1195.03 42.218 C 1244.22 39.8353 1315.08 38.0107 1440 40.296 M 0 107.889 C 124.918 109.647 195.783 108.243 244.966 106.41 C 294.148 104.577 391.046 96.6273 448.315 90.6792 C 475.48 88.828 694.512 90.2309 910.818 90.6893 C 953.654 90.7552 982.905 91.0503 991.685 91.7437 C 1048.95 97.6918 1145.85 105.642 1195.03 107.475 C 1244.22 109.308 1315.08 110.711 1440 108.953 M 0 70.3089 C 124.918 69.5178 195.783 70.1494 244.966 70.9742 C 294.148 71.799 391.046 75.3765 448.315 78.0531 C 475.635 79.0241 694.512 78.2549 910.818 78.0486 C 953.654 78.0189 982.905 77.8861 991.685 77.5741 C 1048.95 74.8975 1145.85 71.32 1195.03 70.4952 C 1244.22 69.6704 1315.08 69.0388 1440 69.8299" stroke="#c3ff0a" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLength }} transition={transition}/>
        <path d="M 0 9.5828 C 124.918 5.2758 195.783 8.7145 244.966 13.205 C 294.148 17.6955 391.046 41.9272 448.315 56.5 C 476.839 57.637 694.512 57.6231 910.818 56.5 C 953.654 56.3385 982.905 50.8367 991.685 49.1377 C 1048.95 34.5649 1145.85 15.0875 1195.03 10.597 C 1244.22 6.1064 1315.08 2.6678 1440 6.9747 M 0 138.417 C 124.918 142.724 195.783 139.286 244.966 134.795 C 294.148 130.304 391.046 110.827 448.375 101.09 C 476.125 101.09 689.088 101.09 911.085 101.735 C 956.259 102.38 980.782 101.735 990.462 103.026 C 1048.95 113.435 1145.85 132.912 1195.03 137.403 C 1244.22 141.894 1315.08 145.332 1440 141.025 M 0 41.6798 C 124.918 39.3945 195.783 41.2191 244.966 43.6019 C 294.148 45.9846 391.046 56.3195 449.169 67.932 C 480.056 67.932 693.691 67.932 911.187 66.645 C 954.3 66.002 981.969 64.071 991.685 62.6682 C 1048.95 54.9357 1145.85 44.6007 1195.03 42.218 C 1244.22 39.8353 1315.08 38.0107 1440 40.296 M 0 107.889 C 124.918 109.647 195.783 108.243 244.966 106.41 C 294.148 104.577 391.046 96.6273 448.315 90.6792 C 475.48 88.828 694.512 90.2309 910.818 90.6893 C 953.654 90.7552 982.905 91.0503 991.685 91.7437 C 1048.95 97.6918 1145.85 105.642 1195.03 107.475 C 1244.22 109.308 1315.08 110.711 1440 108.953 M 0 70.3089 C 124.918 69.5178 195.783 70.1494 244.966 70.9742 C 294.148 71.799 391.046 75.3765 448.315 78.0531 C 475.635 79.0241 694.512 78.2549 910.818 78.0486 C 953.654 78.0189 982.905 77.8861 991.685 77.5741 C 1048.95 74.8975 1145.85 71.32 1195.03 70.4952 C 1244.22 69.6704 1315.08 69.0388 1440 69.8299" stroke="#c3ff0a" strokeWidth="2" fill="none" pathLength={1} filter="url(#blurMe)" />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        </svg>
      </div>
      <div className="container">
        <p className="text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 max-w-[220px] lg:max-w-[320px] 2xl:max-w-[346px] pt-20 lg:pt-[88px] 2xl:pt-10"> Підключили Back-end розробника на останньому етапі.<br/><br/>В результаті чого тестувальники працювали на 2 тижні довше.</p>
      </div>
      <ICONS_SHARED.CORNER_BOTTOM className="container sticky bottom-0 mt-[81px] lg:mt-[32px]" />

    </div>
  );
};

export function WiresAnimationComponent() {

  const ref = React.useRef<HTMLDivElement | null >(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="w-full relative overflow-clip h-[2700px]" ref={ref}>
    
      <WiresAnimation pathLength={pathLength} />   
    </div>
  );
}

export default WiresAnimationComponent;








