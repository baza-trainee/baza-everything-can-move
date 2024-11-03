'use client';
import { motion } from 'framer-motion';
interface CountrieProps {
  text: string;
}

export function CountrieTitle({ text }: CountrieProps) {
  function getRandomDelay() {
    return Math.random() * 2;
  }
  return (
    <>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: getRandomDelay(),
        }}
      >
        <motion.p
          whileHover={{
            color: '#c3ff0a',
            scale: 1.1,
          }}
          className="text-center text-md uppercase leading-[1.3] 2xl:text-[36px] 2xl:font-bold 2xl:leading-normal"
        >
          {text}
        </motion.p>
      </motion.li>
    </>
  );
}
