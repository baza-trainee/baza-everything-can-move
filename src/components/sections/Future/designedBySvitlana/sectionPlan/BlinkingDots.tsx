import { motion } from 'framer-motion';

function BlinkingDots() {
  return (
    <>
      <motion.span
        className="absolute left-[78px] top-[85px] h-[20px] w-[20px] rounded-full border border-[5px] border-s-light-purple bg-white lg:left-[135px] lg:top-[150px] lg:h-[23px] lg:w-[23px] lg:border-[7px]"
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.span>

      <motion.span
        className="absolute bottom-[102px] left-[119px] h-[20px] w-[20px] rounded-full border border-[5px] border-s-light-purple bg-white lg:bottom-[180px] lg:left-[210px] lg:h-[23px] lg:w-[23px] lg:border-[7px]"
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.span>

      <motion.span
        className="absolute bottom-[138px] right-[65px] h-[20px] w-[20px] rounded-full border border-[5px] border-s-light-purple bg-white lg:bottom-[240px] lg:right-[120px] lg:h-[23px] lg:w-[23px] lg:border-[7px]"
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.span>
    </>
  );
}

export default BlinkingDots;
