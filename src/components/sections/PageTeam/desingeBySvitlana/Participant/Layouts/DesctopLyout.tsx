import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import ListCards from './components/ListCards';
import StarsRow from './components/StarsRow';
import TextBottom from './components/TextBottom';

interface StateProps {
  widthList: number;
  widthContiner: number;
  pddingRight: number;
}
function DesctopLyout() {
  const [paddingTop, setPaddingTop] = useState(0);
  const [dimentions, setDimention] = useState<StateProps>({
    widthList: 3500,
    widthContiner: 786,
    pddingRight: 24,
  });

  const listCardRef = useRef<HTMLUListElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const updateValueWidthElement = useCallback(() => {
    if (listCardRef.current && gridRef.current) {
      const listDimention = listCardRef.current.getBoundingClientRect();
      const dimentionContainer = gridRef.current.getBoundingClientRect();
      setDimention((prev) => ({
        ...prev,
        widthContiner: dimentionContainer.width,
        widthList: listDimention.width,
      }));
    }
  }, []);

  useEffect(() => {
    updateValueWidthElement();
    window.addEventListener('resize', updateValueWidthElement);
    return () => {
      window.removeEventListener('resize', updateValueWidthElement);
    };
  }, []);

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
    [
      0,
      dimentions.widthContiner - dimentions.widthList - dimentions.pddingRight,
    ]
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
          <ListCards ref={listCardRef} paddingTop={paddingTop} />
          <StarsRow stars={28} />
          <TextBottom />
        </motion.div>
      </div>
    </div>
  );
}

export default DesctopLyout;
