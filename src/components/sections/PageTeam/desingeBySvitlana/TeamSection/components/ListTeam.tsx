'use client';

import { motion } from 'framer-motion';
import { teamsFoto } from './ui/dataFoto';
import CardTeam from './Card';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
  generatePositions,
  generateVariantsHorizontal,
} from './ui/horizontalVariants';
import { cycleIndex } from '@/components/ui/SwiperFoto';

function ListTeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );
  const position = useMemo(
    () => generatePositions(teamsFoto.length),
    [teamsFoto.length]
  );

  const variants = useMemo(
    () => generateVariantsHorizontal(teamsFoto.length),
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
  }, [teamsFoto.length, handleNext]);
  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 w-full lg:bottom-[200px] 2xl:bottom-[130px]"
    >
      <div className="relative w-full">
        <motion.ul
          // style={{ touchAction: 'none', cursor: 'grab' }}
          // dragControls={controls}
          // drag="x"
          // dragElastic={1}
          className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-6 2xl:gap-[60px]"
        >
          {teamsFoto.map((item, index) => (
            <motion.li
              key={index}
              initial="center"
              animate={position[positionIndexes[index]]}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <CardTeam
                urlFoto={item.urlFoto}
                name={item.name}
                role={item.role}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <button
        onClick={handleNext}
        type="button"
        className="mx-auto text-3xl font-bold text-olga-green-extra"
      >
        NEXT
      </button>
      <button
        onClick={handlePrev}
        type="button"
        className="mx-auto text-3xl font-bold text-olga-green-extra"
      >
        PREV
      </button>
    </div>
  );
}

export default ListTeam;
