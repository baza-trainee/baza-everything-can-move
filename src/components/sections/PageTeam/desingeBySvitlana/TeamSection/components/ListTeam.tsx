'use client';

import { motion } from 'framer-motion';
import { teamsFoto } from './ui/dataFoto';
import CardTeam from './Card';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  generatePositions,
  generateVariantsHorizontal,
} from './ui/horizontalVariants';
import { cycleIndex } from '@/components/ui/SwiperFoto';

function ListTeam() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );

  const [valueX, setVlueX] = useState(0);
  const [lastPaginatedValue, setLastPaginatedValue] = useState(0);

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

  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <div className="flex h-[400px] w-full items-end justify-center overflow-hidden">
        <motion.ul
          onPan={(_, info) => setVlueX((prev) => prev + info.delta.x)}
          className="relative flex h-[280px] w-full items-center justify-center"
        >
          <motion.div
            onPan={(_, info) => setVlueX((prev) => prev + info.delta.x)}
            className="absolute bottom-0 left-0 right-0 z-20 h-[320px]"
          ></motion.div>
          {teamsFoto.map((item, index) => (
            <motion.li
              className="pointer-events-none absolute"
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
