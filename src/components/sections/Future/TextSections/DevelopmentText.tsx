// import React from 'react'

// function DevelopmentText() {
//   return (
//     <div className='xl:w-[346px] lg:w-[320px] mt-8 lg:mt-0'>
//       <h3 className='leading-o-130 lg:text-md text-sm xl:text-l lg:uppercase mb-[20px] lg:mb-[29px]'>Розширення благодійних ініціатив</h3>
//       <p className='xl:text-sm lg:text-m text-s leading-o-130'>
//       Розглядаємо можливість запустити нові проєкти, які допоможуть різним соціальним групам.
//       </p>
//     </div>
//   )
// }

// export default DevelopmentText
'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const TEXTS = [
  {
    title: "Розширення благодійних ініціатив",
    text: "Розглядаємо можливість запустити нові проєкти, які допоможуть різним соціальним групам."
  },
  {
    title: "Співпраця з партнерами",
    text: "Залучаємо для співпраці організації, бізнеси та волонтерів, щоб об'єднати зусилля для досягнення спільних цілей."
  },
  {
    title: "Освітні програми",
    text: "Плануємо розробити зустрічі, тренінги, які допоможуть людям розвивати навички та знайти нові можливості для самореалізації."
  },
  {
    title: "Менторинг випускниками",
    text: "Менторинг нових учасників проєкту, підтримка випускниками, які рухаються далі і готові поділитись знаннями."
  },
];

const DevelopmentText = () => {
  return (
    <div className="text-block xl:w-[346px] lg:w-[320px] mt-8 lg:mt-0">
      {TEXTS.map((item, index) => {
        const { ref, inView } = useInView({
          threshold: 0.2, // Триггер анімації, коли абзац на 20% у видимій області
          triggerOnce: false, // Анімація повторюється при поверненні в зону видимості
        });

        return (
          <motion.div
          className="mb-[78px]"
            key={index}
            ref={ref} // Важливо додати реф для кожного елемента
            initial={{ opacity: 0 }} // Початкові стилі (не видно)
            animate={{
              opacity: inView ? 1 : 0, // Коли елемент у видимій області, він стає видимим
            }}
            transition={{
              delay: index === 0 ? 0 : index * 0.3, // Перший абзац з'являється без затримки, наступні з затримкою
              duration: 0.8, // Тривалість анімації
            }}
          >
            <h3 className="leading-o-130 lg:text-md text-sm xl:text-l lg:uppercase mb-[20px] lg:mb-[29px]">{item.title}</h3>
            <p className="xl:text-sm lg:text-m text-s leading-o-130">{item.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DevelopmentText;
