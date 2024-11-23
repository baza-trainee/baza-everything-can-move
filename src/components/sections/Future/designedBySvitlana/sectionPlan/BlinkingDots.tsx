import { motion } from 'framer-motion';

function BlinkingDots() {
  return (
    <>
      <motion.span
        className="absolute left-[78px] lg:left-[135px] top-[85px] lg:top-[150px] h-[20px] w-[20px] lg:h-[23px] lg:w-[23px] rounded-full border border-[5px] lg:border-[7px] border-s-light-purple bg-white"
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
        className="absolute bottom-[102px] lg:bottom-[180px] left-[119px] lg:left-[210px] h-[20px] w-[20px] lg:h-[23px] lg:w-[23px] rounded-full border border-[5px] lg:border-[7px] border-s-light-purple bg-white"
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
        className="absolute bottom-[138px] right-[65px] lg:bottom-[240px] lg:right-[120px] h-[20px] w-[20px] lg:h-[23px] lg:w-[23px] rounded-full border border-[5px] lg:border-[7px] border-s-light-purple bg-white"
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
