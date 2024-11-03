'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

enum DesignType {
  Olga = 'Olga',
  Svitlana = 'Svitlana',
}

function ButtonChangeDesigne() {
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);

  const [typeDesine, setTypeDesigne] = useState<DesignType | ''>('');

  useEffect(() => {
    const storedDesignType =
      (localStorage.getItem('designType') as DesignType) || '';
    setTypeDesigne(storedDesignType);
  }, []);

  const setDisegn = (type: DesignType) => {
    localStorage.setItem('designType', type);
    setTypeDesigne(type);
  };

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
          onClick={() => setDisegn(DesignType.Olga)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          aria-label="Змінити дизайн"
          className={clsx(
            'h-6 w-6 rounded-full border-[2px] border-solid border-white',
            typeDesine === DesignType.Svitlana
              ? 'bg-[#8f8ded]'
              : 'bg-olga-green'
          )}
        ></motion.button>
        <AnimatePresence initial={false}>
          {isOpenButton && (
            <motion.button
              key="animated-button"
              onClick={() => setDisegn(DesignType.Svitlana)}
              initial={{ opacity: 0, scale: 0, left: 0, right: 'auto' }}
              animate={{ opacity: 1, scale: 1, left: 'auto', right: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              aria-label="Змінити дизайн"
              className={clsx(
                'absolute h-6 w-6 rounded-full border-[2px] border-solid border-white',
                typeDesine === DesignType.Olga
                  ? 'bg-[#8f8ded]'
                  : 'bg-olga-green'
              )}
            ></motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default ButtonChangeDesigne;
