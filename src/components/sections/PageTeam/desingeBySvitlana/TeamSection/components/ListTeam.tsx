'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { teamsFoto } from './ui/dataFoto';
import CardTeam from './Card';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  generatePositions,
  generateVariantsHorizontal,
} from './ui/horizontalVariants';
import { cycleIndex } from '@/components/ui/SwiperFoto';
import { useFollowPointer } from './ui/useFollovingObject';
import { useTeamSectionStore } from './ui/useTeamSectionStore';

enum DurtionAnimation {
  None = 0,
  Short = 0.2,
  Long = 10,
}

function ListTeam() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );

  const [valueX, setValueX] = useState(0);
  const [lastPaginatedValue, setLastPaginatedValue] = useState(0);
  const { isSVG, toggleIsSVG } = useTeamSectionStore();
  const [dragWidth, setDragWidth] = useState(1);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [durationAnimation, setDurationAnimation] = useState(
    DurtionAnimation.None
  );

  const position = useMemo(
    () => generatePositions(teamsFoto.length),
    [teamsFoto.length]
  );

  const variants = useMemo(
    () => generateVariantsHorizontal({ length: teamsFoto.length }),
    [teamsFoto.length]
  );

  const handleNext = useCallback(() => {
    setPositionIndexes((prevPosition) =>
      prevPosition.map((prevIndex) =>
        cycleIndex(prevIndex, 1, teamsFoto.length)
      )
    );
  }, [teamsFoto.length]);

  const handlePrev = useCallback(() => {
    setPositionIndexes((prevPosition) =>
      prevPosition.map((prevIndex) =>
        cycleIndex(prevIndex, -1, teamsFoto.length)
      )
    );
  }, [teamsFoto.length]);

  useEffect(() => {
    const delta = valueX - lastPaginatedValue;

    if (Math.abs(delta) >= 150) {
      const steps = Math.trunc(delta / 150);

      if (steps > 0) {
        for (let i = 0; i < steps; i++) {
          handleNext();
        }
      } else if (steps < 0) {
        for (let i = 0; i < Math.abs(steps); i++) {
          handlePrev();
        }
      }

      setLastPaginatedValue(lastPaginatedValue + steps * 150);
    }
  }, [valueX, lastPaginatedValue, handleNext, handlePrev]);

  const refSvg = useRef(null);
  const { x, y } = useFollowPointer(refSvg);

  useEffect(() => {
    if (!isAutoScroll) return;
    setDurationAnimation(DurtionAnimation.Long);
    const startFunction = () => handleNext();
    const idInterval = setInterval(startFunction, DurtionAnimation.Long * 1000);
    return () => clearInterval(idInterval);
  }, [isAutoScroll, handleNext]);

  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <div className="flex h-[400px] w-full items-end justify-center overflow-hidden">
        <motion.ul className="relative flex h-[280px] w-full cursor-none items-center justify-center">
          <motion.div
            ref={refSvg}
            onHoverStart={() => {
              toggleIsSVG();
            }}
            onHoverEnd={() => {
              toggleIsSVG();
            }}
            onPointerDown={() => (
              setDragWidth(2),
              setIsAutoScroll(false),
              setDurationAnimation(DurtionAnimation.Short)
            )}
            onPointerUp={() => (
              setDragWidth(1),
              setIsAutoScroll(true),
              setDurationAnimation(DurtionAnimation.Long)
            )}
            onPan={(_, info) => setValueX((prev) => prev + info.delta.x)}
            className="absolute bottom-0 left-0 right-0 z-20 h-[320px]"
          ></motion.div>
          {teamsFoto.map((item, index) => (
            <motion.li
              className="-z-500 pointer-events-none absolute"
              key={index}
              initial="center"
              animate={position[positionIndexes[index]]}
              variants={variants}
              transition={{ duration: durationAnimation, ease: 'linear' }}
            >
              <CardTeam
                urlFoto={item.urlFoto}
                name={item.name}
                role={item.role}
              />
            </motion.li>
          ))}
          {!isSVG && (
            <AnimatePresence>
              <motion.svg
                style={{ x, y }}
                initial={{ scale: 0 }}
                animate={{ scale: dragWidth }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                width="82"
                height="16"
                viewBox="0 0 82 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM81.7071 8.70711C82.0976 8.31658 82.0976 7.68342 81.7071 7.29289L75.3431 0.928932C74.9526 0.538408 74.3195 0.538408 73.9289 0.928932C73.5384 1.31946 73.5384 1.95262 73.9289 2.34315L79.5858 8L73.9289 13.6569C73.5384 14.0474 73.5384 14.6805 73.9289 15.0711C74.3195 15.4616 74.9526 15.4616 75.3431 15.0711L81.7071 8.70711ZM1 9H81V7H1V9Z"
                  fill="white"
                />
              </motion.svg>
            </AnimatePresence>
          )}
        </motion.ul>
      </div>
    </div>
  );
}

export default ListTeam;
