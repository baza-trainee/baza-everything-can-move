import React from 'react';
import { motion } from 'framer-motion';

const BtnAnimated = () => {
  return (
    // btn
    <motion.div
      className="relative inline-block h-12 w-[214px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white bg-white text-center"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
    >
      {/* gray cicle */}
      <motion.div
        //   top-[-214px]
        className="absolute left-0 right-0 z-0 mx-auto h-[214px] w-[214px] rounded-full bg-s-gray"
        variants={{
          rest: { y: '-120%', transition: { duration: 0.5 } },
          hover: { y: '-45%', transition: { duration: 0.5 } },
        }}
      />
      {/*gray text */}
      <motion.span
        className="absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1 text-s-gray"
        variants={{
          rest: { y: '0px', opacity: 1, transition: { duration: 0.3 } },
          hover: { y: '-20px', opacity: 0, transition: { duration: 0.3 } },
        }}
      >
        переглянути
      </motion.span>
      {/* white text */}
      <motion.span
        className="absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1 text-white"
        variants={{
          rest: { y: '20px', opacity: 0, transition: { duration: 0.3 } },
          hover: { y: '0px', opacity: 1, transition: { duration: 0.3 } },
        }}
      >
        переглянути
      </motion.span>
    </motion.div>
  );
};

export default BtnAnimated;
