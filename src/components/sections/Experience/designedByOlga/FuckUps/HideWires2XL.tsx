'use client'
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function HideWires2XL() {

    const [hiddenWires, setHiddenWires] = useState(false);
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, 'change', latest => {
      const previous = scrollYProgress.getPrevious()!;
      if(window.innerWidth > 1440 && latest > 0.65 && latest > previous){
      setHiddenWires(true);
      } else {
      setHiddenWires(false);
    }})
    

  return (

    <motion.div 
      variants={{
        static: { y: -100 },
        moved: { y: '-475px' },
      }}
      animate={hiddenWires ? 'moved' : 'static'}
      transition={{ duration: 0.65, ease: 'easeInOut'}}
      className="relative my-[100px] lg:my-[80px] 2xl:sticky 2xl:block hidden">
        <p className="my-16 bg-olga-btn-menu px-4 py-10 text-sm font-regular leading-[23.4px] lg:px-6 lg:py-8 lg:uppercase xl:py-10 xl:px-[120px] 2xl:px-[130px] 2xl:py-16 2xl:text-l 2xl:leading-[31.2px]">
        Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.
        </p>
    </motion.div>

  )
}