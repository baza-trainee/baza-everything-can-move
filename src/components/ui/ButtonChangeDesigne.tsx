// 'use client';
// import clsx from 'clsx';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import { useDesignStore } from '@/useDesignStore';

// function ButtonChangeDesigne() {
//   const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
//   const { designType, toggleDesignType } = useDesignStore();

//   return (
//     <motion.div
//       onHoverStart={() => setIsOpenButton(true)}
//       onHoverEnd={() => setIsOpenButton(false)}
//       initial={{ width: 62 }}
//       whileHover={{
//         width: 120,
//       }}
//       transition={{
//         duration: 0.6,
//         ease: 'easeInOut',
//         when: 'beforeChildren',
//       }}
//       className="fixed bottom-5 left-5 z-[9999] rounded-full border-[1px] border-solid border-white bg-[#363535] p-[18px]"
//     >
//       <div className="relative flex items-center justify-start rounded-full">
//         <motion.button
//           onClick={toggleDesignType}
//           initial={{ scale: 1 }}
//           whileHover={{ scale: 1.2 }}
//           transition={{ duration: 0.3 }}
//           aria-label="Змінити дизайн"
//           className={clsx(
//             'h-6 w-6 rounded-full border-[2px] border-solid border-white',
//             designType === 'designBySvitlana' ? 'bg-[#8f8ded]' : 'bg-olga-green'
//           )}
//         ></motion.button>

//         <AnimatePresence initial={false}>
//           {isOpenButton && (
//             <motion.button
//               key="animated-button"
//               onClick={toggleDesignType}
//               initial={{ opacity: 0, scale: 0, left: 0, right: 'auto' }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 left: 'auto',
//                 top: 0,
//                 right: 0,
//               }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 0.3, ease: 'easeIn' }}
//               aria-label="Змінити дизайн"
//               className={clsx(
//                 'absolute h-6 w-6 rounded-full border-[2px] border-solid border-white',
//                 designType === 'designByOlga' ? 'bg-[#8f8ded]' : 'bg-olga-green'
//               )}
//             ></motion.button>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }

// export default ButtonChangeDesigne;

// 'use client';
// import clsx from 'clsx';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import { useDesignStore } from '@/useDesignStore';

// function ButtonChangeDesigne() {
//   const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
//   const { designType, toggleDesignType } = useDesignStore();

//   return (
//     <motion.div
//       onHoverStart={() => setIsOpenButton(true)}
//       onHoverEnd={() => setIsOpenButton(false)}
//       initial={{ width: 62 }}
//       whileHover={{
//         width: 120,
//       }}
//       transition={{
//         duration: 0.6,
//         ease: 'easeInOut',
//         when: 'beforeChildren',
//       }}
//       className="fixed bottom-5 left-5 rounded-full border-[1px] border-solid border-white bg-[#363535] p-[18px] z-[9999]"
//     >
//       <div className="relative flex items-center justify-start rounded-full">
//         {/* Основна кнопка */}
//         <motion.button
//           onClick={toggleDesignType}
//           initial={{ scale: 1 }}
//           whileHover={{
//             scale: 1.2,
//             rotate: [0, 15, -15, 0], // Додаткове обертання
//             boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)', // Підсвічування
//           }}
//           transition={{ duration: 0.5, ease: 'easeInOut' }}
//           aria-label="Змінити дизайн"
//           className={clsx(
//             'h-6 w-6 rounded-full border-[2px] border-solid border-white',
//             designType === 'designBySvitlana' ? 'bg-[#8f8ded]' : 'bg-olga-green'
//           )}
//         ></motion.button>

//         {/* Текст підказка */}
//         <AnimatePresence>
//           {isOpenButton && (
//             <motion.span
//               key="hover-text"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -10 }}
//               transition={{ duration: 0.3 }}
//               className="absolute -right-16 text-white text-sm"
//             >
//               Switch Design
//             </motion.span>
//           )}
//         </AnimatePresence>

//         {/* Ефект частинок */}
//         <AnimatePresence>
//           {isOpenButton && (
//             <motion.div
//               key="particle-effect"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{
//                 opacity: [1, 0],
//                 scale: [1, 1.5],
//               }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6 }}
//               className="absolute -z-10 h-10 w-10 rounded-full border-2 border-dashed border-white"
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }

// export default ButtonChangeDesigne;
'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useDesignStore } from '@/useDesignStore';

function ButtonChangeDesigne() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { designType, toggleDesignType } = useDesignStore();

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ width: 62 }}
      whileHover={{
        width: 120,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        when: 'beforeChildren',
      }}
      className="fixed bottom-5 left-5 z-[9999] rounded-full border-[1px] border-solid border-white bg-[#363535] p-[18px]"
    >
      <div className="relative flex items-center justify-start rounded-full">
        {/* Основна кнопка */}
        <motion.button
          onClick={toggleDesignType}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.3 }}
          aria-label="Switch Design"
          className={clsx(
            'h-6 w-6 rounded-full border-[2px] border-solid border-white',
            designType === 'designBySvitlana' ? 'bg-[#8f8ded]' : 'bg-olga-green'
          )}
        ></motion.button>

        {/* Ефект витягування краплини */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isHovered
              ? { scale: 1, opacity: 1, y: -40 }
              : { scale: 0, opacity: 0, y: 0 }
          }
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
          className={clsx(
            'absolute left-0 top-0 h-3 w-3 rounded-full',
            designType === 'designBySvitlana' ? 'bg-[#8f8ded]' : 'bg-olga-green'
          )}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default ButtonChangeDesigne;
