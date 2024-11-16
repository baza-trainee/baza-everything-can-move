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
      <div className='container flex flex-row justify-between sticky'>
        <p className='translate-y-[158px]'>Неправильно збілдили проєкт для<br/>деплою. Папки завернули через<br/>рівень. Довго мучились...</p>
        <p className='translate-y-[32px] '>Зверстали першу сторінку сайту<br/>на bootstrap з жорсткою<br/> структурою.<br/><br/>Переписували заново фактично всю<br/> сторінку.</p>
      </div>
      <div className="w-full h-[138px] top-[305px] flex items-center justify-center bg-transparent absolute">
        <button className="bg-white rounded-full px-10 py-3 mt-8 z-30 text-black w-fit mx-auto uppercase text-[36px] leading-[54px] font-medium">
          Baza trainee
        </button>
      </div>
      <svg
        // width="1440"
        // height="650"
        // viewBox="0 0 1440 800"
        // xmlns="http://www.w3.org/2000/svg"
        className=" absolute top-[285px] md:top-[285px] w-full h-[175px]"
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
    <p className='container sticky h-[500px] translate-y-[330px] translate-x-[900px] overflow-clip'>Підключили Back-end розробника<br/> на останньому етапі.<br/><br/>В результаті чого тестувальники<br/> працювали на 2 тижні довше.</p>

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



