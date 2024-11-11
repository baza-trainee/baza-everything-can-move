'use client';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useDesignStore } from '@/useDesignStore';

function ButtonChangeDesigne() {
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
  const { designType, toggleDesignType } = useDesignStore();
  console.log(designType);

  return (
    <motion.div
      onHoverStart={() => setIsOpenButton(true)}
      onHoverEnd={() => setIsOpenButton(false)}
      initial={{ width: 62 }}
      whileHover={{
        width: 120,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        when: 'beforeChildren',
      }}
      className="fixed bottom-5 left-5 rounded-full border-[1px] border-solid border-white bg-[#363535] p-[18px]"
    >
      <div className="relative flex items-center justify-start rounded-full">
        <motion.button
          onClick={toggleDesignType}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          aria-label="Змінити дизайн"
          className={clsx(
            'h-6 w-6 rounded-full border-[2px] border-solid border-white',
            designType === 'designBySvitlana' ? 'bg-[#8f8ded]' : 'bg-olga-green'
          )}
        ></motion.button>

        <AnimatePresence initial={false}>
          {isOpenButton && (
            <motion.button
              key="animated-button"
              onClick={toggleDesignType}
              initial={{ opacity: 0, scale: 0, left: 0, right: 'auto' }}
              animate={{
                opacity: 1,
                scale: 1,
                left: 'auto',
                top: 0,
                right: 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              aria-label="Змінити дизайн"
              className={clsx(
                'absolute h-6 w-6 rounded-full border-[2px] border-solid border-white',
                designType === 'designByOlga' ? 'bg-[#8f8ded]' : 'bg-olga-green'
              )}
            ></motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default ButtonChangeDesigne;
