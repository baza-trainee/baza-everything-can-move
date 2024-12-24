"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

const transition = {
  duration: 0,
  ease: "linear",
};

export const WiresAnimation2 = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  return (
    <div className={cn("sticky h-auto top-0 w-full pb-16 lg:pb-20 2xl:pb-[100px]", className)}>
      <div className="w-full h-[175px] top-[295px] md:top-[265px] lg:top-[290px] 2xl:top-[300px] flex items-center justify-center bg-transparent absolute">
        <button className="bg-white rounded-full py-3 px-6 2xl:px-10 2xl:py-3 z-30 text-black w-fit mx-auto uppercase text-lg 2xl:text-[36px] leading-s-48 2xl:leading-[54px] font-medium">
          Baza trainee
        </button>
      </div>
      <div className='container sticky'>
        <p className='w-[220px] lg:w-[320px] 2xl:w-[346px] text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] mb-16 lg:mb-11 2xl:mb-5 2xl:translate-y-[158px]'>Неправильно збілдили проєкт для деплою. Папки завернули через рівень. Довго мучились...</p>
        <p className='w-[220px] lg:w-[320px] 2xl:w-[346px] float-right text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] 2xl:translate-y-[-58px]'>Зверстали першу сторінку сайту на bootstrap з жорсткою структурою.<br/><br/>Переписували заново фактично всю сторінку.</p>
      </div>

      <div className='overflow-hidden w-full h-auto mx-auto'>
        <svg 
          viewBox="0 0 350 175"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className=" absolute top-[290px] w-full block md:hidden">
        <motion.path
          d="M 0 56.491 C 44.408 42.541 43.518 48.326 145.193 72.739 C 176.799 72.274 210.186 72.739 236.628 72.692 C 316.122 50.518 322.816 44.661 368.838 56.794"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 0 75.552 C 48.233 71.505 59.575 79.238 143.59 86.603 C 198.844 86.603 208.514 86.603 243.979 86.51 C 310.013 74.568 332.843 72.46 360.591 75.973"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M -0.074 98.16 C 49.708 98.16 58.795 98.16 146.506 99.741 C 197.868 99.345 206.56 99.741 264.639 100.531 C 323.903 100.531 348.794 100.136 413.984 101.321"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M 0 121.076 C 18.891 129.768 46.547 126.212 134.32 115.708 C 195.893 107.247 214.857 106.852 239.006 113.124 C 323.875 129.925 350.155 127.771 368.249 121"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 0 139.645 C 22.842 149.127 33.114 149.127 133.907 130.225 C 165.898 122.581 192.51 123.43 225.403 130.133 C 328.647 151.382 338.752 151.382 394.032 134.738"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <path
          d="M 0 56.491 C 44.408 42.541 43.518 48.326 145.193 72.739 C 176.799 72.274 210.186 72.739 236.628 72.692 C 316.122 50.518 322.816 44.661 368.838 56.794"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 75.552 C 48.233 71.505 59.575 79.238 143.59 86.603 C 198.844 86.603 208.514 86.603 243.979 86.51 C 310.013 74.568 332.843 72.46 360.591 75.973"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M -0.074 98.16 C 49.708 98.16 58.795 98.16 146.506 99.741 C 197.868 99.345 206.56 99.741 264.639 100.531 C 323.903 100.531 348.794 100.136 413.984 101.321"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 121.076 C 18.891 129.768 46.547 126.212 134.32 115.708 C 195.893 107.247 214.857 106.852 239.006 113.124 C 323.875 129.925 350.155 127.771 368.249 121"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 139.645 C 22.842 149.127 33.114 149.127 133.907 130.225 C 165.898 122.581 192.51 123.43 225.403 130.133 C 328.647 151.382 338.752 151.382 394.032 134.738"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
      </div>
      <div className='overflow-hidden w-full h-auto mx-auto'>
        <svg 
        viewBox="0 0 800 175"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className=" absolute top-[290px] w-full hidden md:block lg:hidden">
        <motion.path
          d="M 0 43.386 C 74.301 39.464 220.476 43.386 270.134 64.243 C 359.518 65.134 451.095 65.799 481.679 65.236 C 545.242 43.386 737.916 42.393 807.438 43"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 0 67 C 100.303 61.263 153.934 72.188 264.175 78.147 C 361.506 80.133 434.007 80.133 480.686 82.12 C 584.968 70.202 565.105 71.195 803.465 67.222"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M 0 95 C 102.289 95.031 153.934 95.031 265.168 95.031 C 350.581 94.038 407.191 95.031 483.665 96.024 C 574.044 95.031 683.292 94.038 808.431 95.031"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M 0 121 C 120.166 123.833 137.05 121.846 270.134 106.949 C 361.506 111.915 398.253 113.901 481.679 109.928 C 608.805 122.839 667.401 125.819 808.568 121.846"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 0 137 C 110.234 148.662 150.954 135.751 264.175 122.839 C 354.554 123.833 403.219 123.833 484.659 124.826 C 614.764 141.71 678.326 154.621 808.52 137.737"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <path
          d="M 0 43.386 C 74.301 39.464 220.476 43.386 270.134 64.243 C 359.518 65.134 451.095 65.799 481.679 65.236 C 545.242 43.386 737.916 42.393 807.438 43"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 67 C 100.303 61.263 153.934 72.188 264.175 78.147 C 361.506 80.133 434.007 80.133 480.686 82.12 C 584.968 70.202 565.105 71.195 803.465 67.222"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 95 C 102.289 95.031 153.934 95.031 265.168 95.031 C 350.581 94.038 407.191 95.031 483.665 96.024 C 574.044 95.031 683.292 94.038 808.431 95.031"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 121 C 120.166 123.833 137.05 121.846 270.134 106.949 C 361.506 111.915 398.253 113.901 481.679 109.928 C 608.805 122.839 667.401 125.819 808.568 121.846"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 137 C 110.234 148.662 150.954 135.751 264.175 122.839 C 354.554 123.833 403.219 123.833 484.659 124.826 C 614.764 141.71 678.326 154.621 808.52 137.737"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        </svg>
      </div>
      <div className='overflow-hidden w-full h-auto mx-auto'>
      <svg 
        viewBox="0 0 1024 175"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className=" absolute top-[290px] w-full hidden lg:block xl:hidden">
        <motion.path
          d="M 0 49.31 C 105.026 39.173 296.356 41.707 415.461 75.919 C 464.877 75.919 516.828 75.919 571.312 75.919 C 670.144 46.776 956.505 25.235 1118.691 49"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 0 70 C 82.15 62.358 335.289 74.973 413.626 91.269 C 485.903 92.119 532.67 92.119 576.886 92.119 C 682.62 76.655 966.876 58.994 1133.349 70"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M 0 98.071 C 99.011 98.921 332.847 99.772 411.075 98.921 C 473.998 99.772 518.214 98.921 571.784 98.921 C 688.277 98.921 966.328 99.772 1122.785 98"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M 0 124.364 C 96.775 124.644 310.838 121.572 417.357 108.257 C 470.616 108.257 497.246 107.233 568.942 109.281 C 678.534 120.548 963.409 137.393 1110.756 124"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 0 148.863 C 90.973 152.014 333.362 151.475 414.222 125.338 C 468.129 126.155 511.418 126.155 571.343 128.601 C 679.306 144.635 969.033 150.964 1119.095 148"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <path
          d="M 0 49.31 C 105.026 39.173 296.356 41.707 415.461 75.919 C 464.877 75.919 516.828 75.919 571.312 75.919 C 670.144 46.776 956.505 25.235 1118.691 49"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 70 C 82.15 62.358 335.289 74.973 413.626 91.269 C 485.903 92.119 532.67 92.119 576.886 92.119 C 682.62 76.655 966.876 58.994 1133.349 70"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 98.071 C 99.011 98.921 332.847 99.772 411.075 98.921 C 473.998 99.772 518.214 98.921 571.784 98.921 C 688.277 98.921 966.328 99.772 1122.785 98"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 124.364 C 96.775 124.644 310.838 121.572 417.357 108.257 C 470.616 108.257 497.246 107.233 568.942 109.281 C 678.534 120.548 963.409 137.393 1110.756 124"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 148.863 C 90.973 152.014 333.362 151.475 414.222 125.338 C 468.129 126.155 511.418 126.155 571.343 128.601 C 679.306 144.635 969.033 150.964 1119.095 148"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
      </div>
      <div className='overflow-hidden w-full h-auto mx-auto'>
      <svg 
          viewBox="0 0 1440 175"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className=" absolute top-[290px] w-full hidden xl:block 2xl:hidden">
        <motion.path
          d="M 0 60 C 105.798 51.555 296.356 41.707 478.147 72.674 C 683.155 72.873 771.046 71.499 937.369 75.246 C 1272.297 33.047 1347.958 57.113 1500.346 60"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 0 80 C 93.071 75.306 275.362 73.553 472.288 91.434 C 682.01 87.575 741.605 89.328 929.154 91.081 C 1199.085 68.294 1314.769 70.047 1500.8 80"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M 0 100 C 100 100 258.338 105.406 469.095 110 C 683.799 106.788 721.096 105.406 935.346 100 C 1210.12 100 1316.772 100 1500.656 100"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M 0 120 C 94.513 133.29 243.662 138.714 468.414 121.13 C 679.596 119.134 709.847 119.134 927.743 117.744 C 1151.822 132.846 1295.964 138.055 1500.649 120"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 0 145 C 100.907 167.428 245.197 162.149 465.15 135.755 C 681.584 135.755 702.7 135.755 920.893 128.716 C 1147.885 155.111 1299.213 158.63 1500.755 145"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <path
          d="M 0 60 C 105.798 51.555 296.356 41.707 478.147 72.674 C 683.155 72.873 771.046 71.499 937.369 75.246 C 1272.297 33.047 1347.958 57.113 1500.346 60"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 80 C 93.071 75.306 275.362 73.553 472.288 91.434 C 682.01 87.575 741.605 89.328 929.154 91.081 C 1199.085 68.294 1314.769 70.047 1500.8 80"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 100 C 100 100 258.338 105.406 469.095 110 C 683.799 106.788 721.096 105.406 935.346 100 C 1210.12 100 1316.772 100 1500.656 100"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 120 C 94.513 133.29 243.662 138.714 468.414 121.13 C 679.596 119.134 709.847 119.134 927.743 117.744 C 1151.822 132.846 1295.964 138.055 1500.649 120"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 145 C 100.907 167.428 245.197 162.149 465.15 135.755 C 681.584 135.755 702.7 135.755 920.893 128.716 C 1147.885 155.111 1299.213 158.63 1500.755 145"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
      </div>
      <div className='overflow-hidden w-full h-auto mx-auto'>
        <svg
        // width="1440"
        // height="650"
        viewBox="0 0 1800 175"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        // className=" absolute top-[290px] w-full h-[175px] hidden 2xl:block"
        className=" absolute top-[290px] w-full hidden 2xl:block"
      >
        <motion.path
          d="M 0 20 C 261 19 347 44 477 64 C 563 85 564.969 81.553 681.525 94.041 C 1043.683 92.654 734.253 94.041 1150.526 94.041 C 1253.207 82.941 1251 91 1374 70 C 1497 49 1554 30 1926 20"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 0 58 C 250.054 52.592 321 75 482 89 C 566 94 583.112 98.378 681.62 102.027 C 1040.992 100.203 767.359 102.027 1144.973 98.378 C 1244 91 1253 97 1374 84 C 1493 68 1526.566 54.061 1908 58"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M 0 102.027 C 269.346 107.499 318.6 96.554 490.077 102.027 C 572.167 100.203 572.167 107.499 688.917 105.675 C 1040.992 100.203 767.359 102.027 1155.918 103.851 C 1243.481 103.851 1259.899 102.027 1369.353 100.203 C 1510 102 1537 98 1908 102"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M 0 137.983 C 235.556 136.609 300.13 146.226 488.356 120.122 C 555.678 110.505 591.4 107.757 687.573 110.505 C 1047.539 109.131 764.513 110.505 1149.208 111.878 C 1244.008 116 1256.373 116 1369 123 C 1487 131 1561.382 146.226 1911.73 137"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 0 170 C 229 167 302 173 442 150 C 550 128 578 125 634 122 C 1046.165 124.244 760.391 124.244 1154.704 121.496 C 1243 125 1246 131 1370 150 C 1482 164 1561 159 1916 170"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <path
          d="M 0 20 C 261 19 347 44 477 64 C 563 85 564.969 81.553 681.525 94.041 C 1043.683 92.654 734.253 94.041 1150.526 94.041 C 1253.207 82.941 1251 91 1374 70 C 1497 49 1554 30 1926 20"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 58 C 250.054 52.592 321 75 482 89 C 566 94 583.112 98.378 681.62 102.027 C 1040.992 100.203 767.359 102.027 1144.973 98.378 C 1244 91 1253 97 1374 84 C 1493 68 1526.566 54.061 1908 58"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 102.027 C 269.346 107.499 318.6 96.554 490.077 102.027 C 572.167 100.203 572.167 107.499 688.917 105.675 C 1040.992 100.203 767.359 102.027 1155.918 103.851 C 1243.481 103.851 1259.899 102.027 1369.353 100.203 C 1510 102 1537 98 1908 102"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 137.983 C 235.556 136.609 300.13 146.226 488.356 120.122 C 555.678 110.505 591.4 107.757 687.573 110.505 C 1047.539 109.131 764.513 110.505 1149.208 111.878 C 1244.008 116 1256.373 116 1369 123 C 1487 131 1561.382 146.226 1911.73 137"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 0 170 C 229 167 302 173 442 150 C 550 128 578 125 634 122 C 1046.165 124.244 760.391 124.244 1154.704 121.496 C 1243 125 1246 131 1370 150 C 1482 164 1561 159 1916 170"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        </svg>
      </div>
      <div className="container sticky h-[600px] lg:h-[550px]">
          <p className='w-[220px] lg:w-[320px] 2xl:w-[346px] float-left 2xl:right-[120px] overflow-clip text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] absolute top-[400px]'>Підключили Back-end розробника на останньому етапі.<br/><br/>В результаті чого тестувальники працювали на 2 тижні довше.</p>
         <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0" />
      </div>
    </div>
  );
};

export function WiresAnimationComponent2() {

  const ref = React.useRef<HTMLDivElement | null >(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="h-[200vh] w-full relative overflow-clip" ref={ref}>

      <WiresAnimation2
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
      {/* <div className='relative xl:sticky xl:translate-y-[650px] 2xl:translate-y-[600px]'><p className='lg:uppercase text-sm 2xl:text-l leading-[23.4px] 2xl:leading-[31.2px] font-regular bg-olga-btn-menu py-10 lg:py-8 2xl:py-12 px-4 lg:px-6 2xl:px-[124px] my-16'>Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.</p></div> */}
       
    </div>
  );
}

export default WiresAnimationComponent2;



