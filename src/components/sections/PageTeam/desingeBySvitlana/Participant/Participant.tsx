import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Container from '@/components/ui/DesignBySvitlna/Container';
import { data } from './data';
import { Card } from './Card';
import { useEffect, useRef, useState } from 'react';
import StarViolewt from '../../../../../../public/assets/icons/violet_star.svg';
import StarEmpty from '../../../../../../public/assets/icons/empty_star.svg';

function Participant() {
  const [paddingTop, setPaddingTop] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);

  const sectionScroll = useScroll({
    target: gridRef,
    offset: ['0.18 end', 'end 1.2'],
  });

  const listScroll = useScroll({
    target: gridRef,
    offset: ['0 end', '0.25 start'],
  });

  const translateX = useTransform(
    sectionScroll.scrollYProgress,
    [0, 1],
    [0, -3000]
  );

  const smoothTranslateX = useSpring(translateX, {
    stiffness: 50,
    damping: 20,
  });
  const translateYList = useTransform(
    listScroll.scrollYProgress,
    [0, 0.3],
    [100, 0]
  );

  const smoothTransItemY = useSpring(translateYList, {
    stiffness: 50,
    damping: 20,
  });
  useEffect(
    () => translateYList.onChange((v) => setPaddingTop(v)),
    [translateYList]
  );
  console.log(paddingTop);

  return (
    <section className="py-[156px]">
      <Container className="">
        <div ref={gridRef} className="h-[4500px]">
          <div className="sticky top-10 overflow-clip">
            <motion.ul className="flex gap-10" style={{ x: smoothTranslateX }}>
              {data.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    style={{
                      // y: smoothTransItemY,
                      paddingTop: `${paddingTop * index}px`,
                    }}
                  >
                    <Card
                      value={item.value}
                      text={item.text}
                      bg={item.bg}
                      border={item.border}
                      textColor={item.textColor}
                    />
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.ul
              initial={{ x: 0 }}
              animate={{ x: -1000 }}
              transition={{
                duration: 10,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              className="mt-12 flex gap-32"
            >
              {[...Array(20)].map((_, index) => (
                <li key={index}>
                  {index % 2 === 0 ? <StarViolewt /> : <StarEmpty />}
                </li>
              ))}
            </motion.ul>

            <h2 className="p-12">Наші учасники</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Participant;
