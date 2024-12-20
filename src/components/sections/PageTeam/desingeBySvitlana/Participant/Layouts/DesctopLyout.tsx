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
import { debounce } from 'lodash';

interface StateProps {
  widthList: number;
  widthContiner: number;
  padingRight: number;
  isPositionFixed: boolean;
  paddingTop: number;
}
function DesctopLyout() {
  const [layoutState, setLayoutState] = useState<StateProps>({
    widthList: 3500,
    widthContiner: 786,
    padingRight: 24,
    isPositionFixed: false,
    paddingTop: 0,
  });
  const listCardRef = useRef<HTMLUListElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const updateValueWidthElement = useCallback(() => {
    if (listCardRef.current && gridRef.current) {
      const listDimention = listCardRef.current.getBoundingClientRect();
      const dimentionContainer = gridRef.current.getBoundingClientRect();
      setLayoutState((prev) => ({
        ...prev,
        widthContiner: dimentionContainer.width,
        widthList: listDimention.width,
      }));
    }
  }, []);

  useEffect(() => {
    const debouncedUpdate = debounce(() => updateValueWidthElement, 100);
    updateValueWidthElement();
    window.addEventListener('resize', debouncedUpdate);
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
    };
  }, [updateValueWidthElement]);

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
      layoutState.widthContiner -
        layoutState.widthList -
        layoutState.padingRight,
    ]
  );

  useMotionValueEvent(sectionScroll.scrollYProgress, 'change', (event) => {
    setLayoutState((prev) => ({
      ...prev,
      isPositionFixed: event === 1 ? true : false,
    }));
  });

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

  useMotionValueEvent(smoothTransItemY, 'change', (v) =>
    setLayoutState((prev) => ({ ...prev, paddingTop: v }))
  );
  return (
    <div ref={gridRef} className="h-[4500px]">
      <motion.div
        style={{ position: layoutState.isPositionFixed ? 'fixed' : 'sticky' }}
        className="top-10 -z-10 overflow-clip"
      >
        <motion.div
          style={{ x: smoothTranslateX }}
          className="lg:w-[3920px] 2xl:w-[4440px]"
        >
          <ListCards ref={listCardRef} paddingTop={layoutState.paddingTop} />
          <StarsRow stars={28} />
          <TextBottom />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default DesctopLyout;
