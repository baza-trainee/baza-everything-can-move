import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import ListCards from './components/ListCards';
import StarsRow from './components/StarsRow';
import TextBottom from './components/TextBottom';

function DesctopLyout() {
  const [paddingTop, setPaddingTop] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);

  const sectionScroll = useScroll({
    target: gridRef,
    offset: ['0.18 end', 'end 1'],
  });

  const listScroll = useScroll({
    target: gridRef,
    offset: ['0 end', '0.25 start'],
  });

  const translateX = useTransform(
    sectionScroll.scrollYProgress,
    [0, 1],
    [0, -3200]
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

  useMotionValueEvent(smoothTransItemY, 'change', (v) => setPaddingTop(v));
  return (
    <div ref={gridRef} className="h-[4500px]">
      <div className="sticky top-10 overflow-clip">
        <motion.div
          style={{ x: smoothTranslateX }}
          className="lg:w-[3920px] 2xl:w-[4440px]"
        >
          <ListCards paddingTop={paddingTop} />
          <StarsRow stars={28} />
          <TextBottom />
        </motion.div>
      </div>
    </div>
  );
}

export default DesctopLyout;
