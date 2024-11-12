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
    <div className={cn("sticky top-[32px] w-full", className)}>
      <div className="w-full h-[138px] top-[65px] flex items-center justify-center bg-transparent absolute">
        <button className="bg-white rounded-full px-10 py-3 mt-8 z-30 text-black w-fit mx-auto uppercase text-[36px] leading-[54px] font-medium">
          Baza trainee
        </button>
      </div>
      <svg
        // width="1440"
        // height="650"
        // viewBox="0 0 1440 800"
        // xmlns="http://www.w3.org/2000/svg"
        className=" absolute top-10 md:top-10 w-full h-[160px]"
      >
        <motion.path
          d="M 0 0 C 261.089 12.174 362.382 17.725 484.489 49.639 C 564.969 69.065 564.969 81.553 681.525 94.041 C 1043.683 92.654 734.253 94.041 1150.526 94.041 C 1253.207 82.941 1251.82 81.553 1368.376 55.19 C 1489.095 16.338 1552.924 9.4 1920.802 0"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <motion.path
          d="M 5.277 41.21 C 250.054 52.592 322.032 68.75 483.182 90.691 C 567.661 100.345 583.112 98.378 681.62 102.027 C 1040.992 100.203 767.359 102.027 1144.973 98.378 C 1243.481 96.554 1259.899 102.027 1371.411 88.277 C 1498.656 65.812 1526.566 54.061 1912.971 41"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <motion.path
          d="M 6.658 102.027 C 269.346 107.499 318.6 96.554 490.077 102.027 C 572.167 100.203 572.167 107.499 688.917 105.675 C 1040.992 100.203 767.359 102.027 1155.918 103.851 C 1243.481 103.851 1259.899 102.027 1369.353 100.203 C 1507.994 92.906 1539.005 89.257 1912.971 78.312"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <motion.path
          d="M 6.113 137.983 C 235.556 136.609 300.13 146.226 488.356 120.122 C 555.678 110.505 591.4 107.757 687.573 110.505 C 1047.539 109.131 764.513 110.505 1149.208 111.878 C 1244.008 116 1256.373 116 1370.408 128.365 C 1473.452 148.974 1561.382 146.226 1911.73 137"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <motion.path
          d="M 4.739 155.844 C 228.686 150.348 297.382 158.592 437.521 147.6 C 555.678 139.357 584.53 133.861 665.591 124.244 C 1046.165 124.244 760.391 124.244 1154.704 121.496 C 1244.008 116 1255 126.992 1367.66 142.105 C 1470.704 153.096 1561.382 146.226 1910.356 155"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />

        <path
          d="M 0 0 C 261.089 12.174 362.382 17.725 484.489 49.639 C 564.969 69.065 564.969 81.553 681.525 94.041 C 1043.683 92.654 734.253 94.041 1150.526 94.041 C 1253.207 82.941 1251.82 81.553 1368.376 55.19 C 1489.095 16.338 1552.924 9.4 1920.802 0"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 5.277 41.21 C 250.054 52.592 322.032 68.75 483.182 90.691 C 567.661 100.345 583.112 98.378 681.62 102.027 C 1040.992 100.203 767.359 102.027 1144.973 98.378 C 1243.481 96.554 1259.899 102.027 1371.411 88.277 C 1498.656 65.812 1526.566 54.061 1912.971 41"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 6.658 102.027 C 269.346 107.499 318.6 96.554 490.077 102.027 C 572.167 100.203 572.167 107.499 688.917 105.675 C 1040.992 100.203 767.359 102.027 1155.918 103.851 C 1243.481 103.851 1259.899 102.027 1369.353 100.203 C 1507.994 92.906 1539.005 89.257 1912.971 78.312"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 6.113 137.983 C 235.556 136.609 300.13 146.226 488.356 120.122 C 555.678 110.505 591.4 107.757 687.573 110.505 C 1047.539 109.131 764.513 110.505 1149.208 111.878 C 1244.008 116 1256.373 116 1370.408 128.365 C 1473.452 148.974 1561.382 146.226 1911.73 137"
          stroke="#c3ff0a"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M 4.739 155.844 C 228.686 150.348 297.382 158.592 437.521 147.6 C 555.678 139.357 584.53 133.861 665.591 124.244 C 1046.165 124.244 760.391 124.244 1154.704 121.496 C 1244.008 116 1255 126.992 1367.66 142.105 C 1470.704 153.096 1561.382 146.226 1910.356 155"
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
  );
};

export function WiresAnimationComponent() {

  const ref = React.useRef<HTMLDivElement | null >(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="h-[150vh] bg-olga-bg w-full relative overflow-clip" ref={ref}>

      <WiresAnimation
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
       
    </div>
  );
}

export default WiresAnimationComponent;



