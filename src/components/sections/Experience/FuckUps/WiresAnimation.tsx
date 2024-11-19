"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { useScroll, useTransform } from "framer-motion";

const transition = {
  duration: 0,
  ease: "linear",
};

export const WiresAnimation = ({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) => {
  return (
    <div className={cn("sticky h-auto top-0 w-full", className)}>
      <div className='container sticky'>
        <p className='w-[220px] lg:w-[320px] 2xl:w-[346px] text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px] mb-16 lg:mb-11 2xl:mb-5'>Неправильно збілдили проєкт для деплою. Папки завернули через рівень. Довго мучились...</p>
        <p className='w-[220px] lg:w-[320px] 2xl:w-[346px] float-right  text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]'>Зверстали першу сторінку сайту на bootstrap з жорсткою структурою.<br/><br/>Переписували заново фактично всю сторінку.</p>
      </div>
      <div className="w-full h-[175px] top-[300px] flex items-center justify-center bg-transparent absolute">
        <button className="bg-white rounded-full px-3 py-6 2xl:px-10 2xl:py-3 z-30 text-black w-fit mx-auto uppercase text-lg 2xl:text-[36px] leading-s-48 2xl:leading-[54px] font-medium">
          Baza trainee
        </button>
      </div>
            <svg
        // width="1440"
        // height="650"
        // viewBox="0 0 1440 800"
        // xmlns="http://www.w3.org/2000/svg"
        className=" absolute top-[290px] w-full h-[175px] block lg:hidden"
      >
        <motion.path
          d="M 0 56.491 C 44.408 42.541 43.518 48.326 145.193 72.739 C 176.336 71.385 210.186 72.739 265.15 74.17 C 342.537 58.56 366.121 53.666 409.728 63.455"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 0 75.552 C 48.233 71.505 59.575 79.238 143.59 86.603 C 198.844 86.603 208.514 86.603 265.15 89.365 C 326.618 89.549 350.59 81.3 412.956 81.077"
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
          d="M 0 121.076 C 18.891 129.768 46.547 126.212 149.272 116.73 C 195.893 107.247 214.857 106.852 263.454 113.964 C 373.29 121.866 400.156 125.817 413.589 119.495"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 0 139.645 C 22.842 149.127 33.114 149.127 149.272 128.977 C 200.634 123.841 208.536 121.866 259.503 126.607 C 392.254 140.04 404.502 141.225 413.984 132.533"
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
      <svg
        // width="1440"
        // height="650"
        // viewBox="0 0 1440 800"
        // xmlns="http://www.w3.org/2000/svg"
        className=" absolute top-[290px] w-full h-[175px] hidden 2xl:block"
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
    <p className='container stickys h-[500px] translate-y-[330px] translate-x-[900px] overflow-clip w-[220px] lg:w-[320px] 2xl:w-[346px] text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]'>Підключили Back-end розробника на останньому етапі.<br/><br/>В результаті чого тестувальники працювали на 2 тижні довше.</p>

    </div>
  );
};

export function WiresAnimationComponent() {

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

      <WiresAnimation
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />

       {/* <div className='sticky bottom-0 pb-[300px]'><p className=' uppercase text-l leading-[31.2px] font-regular bg-olga-btn-menu py-10 px-[124px] my-16'>Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.</p></div> */}
       
    </div>
  );
}

export default WiresAnimationComponent;



