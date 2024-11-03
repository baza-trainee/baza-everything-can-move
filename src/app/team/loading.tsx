'use client';

import { motion } from 'framer-motion';

function Loading() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="relative h-60 w-60">
        <motion.div
          initial={{
            left: 0,
            bottom: 0,
          }}
          animate={{
            left: [0, 200],
            bottom: [0, 100, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse',
          }}
          className="absolute h-4 w-4 rounded-full bg-olga-green-extra"
        ></motion.div>
      </div>
    </div>
  );
}

export default Loading;
