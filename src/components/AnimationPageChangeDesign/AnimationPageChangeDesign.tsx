'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { useDesignStore } from '@/useDesignStore';

function AnimationPageChangeDesign() {
  const { isChangingDesign } = useDesignStore();

  return (
    <>
      <AnimatePresence key="animtionChangeDesign">
        {isChangingDesign && (
          <motion.div
            initial={{ x: '-200%' }}
            animate={{
              x: '0%',
            }}
            exit={{ x: '200%' }}
            transition={{ duration: 2 }}
            className="fixed top-0 z-[99999999] flex h-screen w-full items-center justify-between bg-black text-olga-green-extra"
          >
            <div className="h-screen w-10 rounded-r-full bg-olga-green-extra blur-xl" />
            <h1 className="text-2xl">BAZA TRAINEE UKRAINE</h1>
            <div className="h-screen w-10 rounded-l-full bg-olga-green-extra blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimationPageChangeDesign;
