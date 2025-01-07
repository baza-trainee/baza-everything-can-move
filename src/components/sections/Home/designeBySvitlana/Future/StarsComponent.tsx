import React, { useState, useEffect } from 'react';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from  './style.module.css'

const StarsComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: -10 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      // Нормалізація координат миші відносно центру екрану
      const offsetX = (e.clientX - innerWidth / 2) / 20;
      const offsetY = (e.clientY - innerHeight / 2) / 20;

      setPosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="absolute lg:h-[440px] h-[310px] lg:w-[440px] w-[310px] bg-[url('/assets/images/HomeImg/Ellipse.svg')] bg-cover bg-center bg-no-repeat"></div>
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 10,
        }}
        style={{
          willChange: 'transform',
        }}
        className="relative mx-auto h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
      >

        {/* Очі */}
        <div className="absolute left-[60px] lg:top-[100px] top-[60px] lg:left-[70px] lg:top-[130px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 16,
              ease: 'linear',
            }}
          >
            <ICONS_PURPOSE.STAR_OKO className="" />
          </motion.div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
            >
              <ICONS_PURPOSE.STAR_OKO2 className="" />
            </motion.div>
          </div>
        </div>
        
        {/* Очі */}
        <div className="absolute left-[180px] lg:top-[100px] top-[60px] lg:left-[240px] lg:top-[130px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 16,
              ease: 'linear',
            }}
          >
            <ICONS_PURPOSE.STAR_OKO className="" />
          </motion.div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
            >
              <ICONS_PURPOSE.STAR_OKO2 className="" />
            </motion.div>
          </div>
        </div>

        {/* Рот */}
        <div className="absolute bottom-[50px] left-1/2 lg:-translate-x-1/2 -translate-x-3">
          <motion.div
            animate={{
              scaleY: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            style={{
              willChange: 'transform',
              transformOrigin: 'center',
            }}
          ></motion.div>
          <Image
           className={styles.image}
            src="/assets/images/HomeImg/Smailes.svg"
            alt="ellipseHero"
            width={700} // Вкажи потрібну ширину зображення
            height={300}
          />
        </div>
      </motion.div>
    </>
  );
};

export default StarsComponent;
