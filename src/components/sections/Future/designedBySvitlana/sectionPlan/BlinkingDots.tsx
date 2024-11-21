import { motion } from 'framer-motion';

function BlinkingDots() {
  return (
    <>
      <motion.span
        className="absolute left-[135px] top-[150px] h-[23px] w-[23px] rounded-full border border-[7px] border-s-light-purple bg-white"
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
        className="absolute bottom-[180px] left-[210px] h-[23px] w-[23px] rounded-full border border-[7px] border-s-light-purple bg-white"
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
        className="absolute bottom-[240px] right-[120px] h-[23px] w-[23px] rounded-full border border-[7px] border-s-light-purple bg-white"
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
