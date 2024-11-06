'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TEXTS } from '../../../../constants/text'

const DevelopmentText = () => {
  interface TextItem {
    title: string;
    text: string;
  }
  return (
    <div className="relative xl:w-[346px] lg:w-[320px] mt-8 lg:mt-0 h-[376px] overflow-y-auto">
      <div className="absolute inset-0 p-4">
        {TEXTS.map((item: TextItem, index: number) => {
          const { ref, inView } = useInView({
            threshold: 0.2, 
            triggerOnce: false, 
          });

          return (
            <motion.div
              className="mb-[76px]"
              key={index}
              ref={ref} 
              initial={{ opacity: 0 }} 
              animate={{
                opacity: inView ? 1 : 0,
              }}
              transition={{
                delay: index === 0 ? 0 : index * 0.3,
                duration: 0.8, 
              }}
            >
              <h3 className="leading-o-130 lg:text-md text-sm xl:text-l lg:uppercase mb-[20px] lg:mb-[29px]">{item.title}</h3>
              <p className="xl:text-sm lg:text-m text-s leading-o-130">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


export default DevelopmentText;

