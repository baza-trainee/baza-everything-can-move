'use client';

import { motion, PanInfo } from 'framer-motion';
import { teamsFoto } from './ui/dataFoto';
import CardTeam from './Card';
import { useCallback, useMemo, useState } from 'react';
import {
  generatePositions,
  generateVariantsHorizontal,
} from './ui/horizontalVariants';
import { cycleIndex } from '@/components/ui/SwiperFoto';

function ListTeam() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
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

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      handleNext();
    } else if (info.offset.x < -50) {
      handlePrev();
    }
  };
  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <div className="flex w-full items-center justify-center overflow-hidden">
        <motion.ul
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="relative flex h-[280px] min-w-[1400px] items-center justify-center"
        >
          {teamsFoto.map((item, index) => (
            <motion.li
              className="absolute"
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
    </div>
  );
}

export default ListTeam;
