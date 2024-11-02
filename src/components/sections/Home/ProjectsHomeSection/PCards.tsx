'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import { useAnimate } from 'framer-motion/mini';
import { useScroll, useTransform } from 'framer-motion';

const images = [
  {
    pos: '1.1',
    src: '/assets/images/HomeProjects/kolyskova.png',
    width: 500,
    height: 271,
    name: 'kolyskova',
    top: '146px',
    left: '56px',
    translateZ: 200,
  },
  {
    pos: '3.1',
    src: '/assets/images/HomeProjects/balakun.png',
    width: 350,
    height: 167,
    name: 'balakun',
    top: '36px',
    left: '0px',
    translateZ: 100,
  },
  {
    pos: '3.4',
    src: '/assets/images/HomeProjects/organik.png',
    width: 180,
    height: 120,
    name: 'organik',
    top: '0px',
    left: '605px',
    translateZ: 50,
  },
];

const PCards: React.FC = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'], // Начало секции и конец секции
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100], {
    // clamp: false,
    // ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  const z = useTransform(scrollYProgress, [0, 1], [0, 200], {
    // clamp: false,
    // ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  useEffect(() => {
    console.log('Current scrollY:', scrollYProgress);
  }, [scrollYProgress]);

  //   const [scope, animate] = useAnimate();
  //   const [isOpen, setIsOpen] = useState(false);
  //   const variants = {
  //     open: { opacity: 1, scale: 1.5 },
  //     closed: { opacity: 0.5, scale: 1 },
  //   };
  return (
    <div ref={container} className="w-full">
      {/* <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className="h-20 w-20 bg-white"
      >
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="h-8 w-8 bg-s-gray text-white"
        >
          Wwwww
        </div>
      </motion.div> */}
      {/* <div className="h-20 w-20 bg-s-purple">
        <motion.div
          className="h-6 w-6 bg-olga-green"
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div> */}
      {/* <div ref={scope} className="h-[300px] w-[300px] bg-olga-green-extra">
        <div
          onClick={() => animate(scope.current, { scale: 1.2 })}
          className="h-[150px] w-[150px] bg-olga-light-grey"
        >
          exp
        </div>
      </div> */}
      <div className="relative h-[413px] w-full">
        {images.map((image, ind) => (
          <motion.div
            key={image.name + ind}
            whileHover={{ scale: 1.2, z: 100, zIndex: 10 }}
            //
            className="absolute overflow-hidden rounded-md"
            style={{
              top: image.top,
              left: image.left,
              width: `${image.width}px`,
              height: `${image.height}px`,
              //   transformStyle: 'preserve-3d',
            }}
          >
            <Image
              className="z, h-full object-fill"
              src={image.src}
              alt={image.name}
              // priority
              width={image.width}
              height={image.height}
              quality={100}
              // className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PCards;
// animate={{ x, y, rotate }}
//           transition={{ type: "spring" }}
