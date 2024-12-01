'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { teamsFoto } from './ui/dataFoto';
import CardTeam from './Card';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { cycleIndex } from '@/components/ui/SwiperFoto';
import {
  generatePositionscopy,
  generateVariantsHorizontalcopy,
} from './ui/horizontalVariantscopy';

const stepToPagination = 150;

// function getCoef(valueX: number) {
//   return (Math.round(valueX) % stepToPagination) / stepToPagination;
// }

function ListTeamcopy() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );

  const [valueX, setVlueX] = useState(stepToPagination / 2);
  const [coefX, setCoefX] = useState(0);
  const [lastPaginatedValue, setLastPaginatedValue] = useState(
    stepToPagination / 2
  );

  const valueCoef = useMotionValue(0);
  const xHorizontal = useTransform(valueCoef, [-1, 0, 1], [-150, 0, 150]);
  const smoothTranslateX = useSpring(xHorizontal, {
    stiffness: 50,
    damping: 20,
  });
  console.log('valueCoef', valueCoef.get());

  console.log(smoothTranslateX.get());

  const position = useMemo(
    () => generatePositionscopy(teamsFoto.length),
    [teamsFoto.length]
  );

  const variants = useMemo(
    () => generateVariantsHorizontalcopy({ length: teamsFoto.length }),
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
    if (lastPaginatedValue === stepToPagination / 2) {
      if (
        valueX < stepToPagination - stepToPagination + 1 &&
        valueX > stepToPagination - stepToPagination - 1
      ) {
        handlePrev();
        setLastPaginatedValue(stepToPagination - stepToPagination);
      }
      if (valueX < stepToPagination + 1 && valueX > stepToPagination - 1) {
        handleNext();
        setLastPaginatedValue(stepToPagination);
      }
    }
    if (Math.abs(delta) >= stepToPagination) {
      const steps = Math.trunc(delta / stepToPagination);

      if (steps > 0) {
        for (let i = 0; i < steps; i++) {
          handleNext();
        }
      } else if (steps < 0) {
        for (let i = 0; i < Math.abs(steps); i++) {
          handlePrev();
        }
      }

      setLastPaginatedValue(lastPaginatedValue + steps * stepToPagination);
    }
  }, [valueX, lastPaginatedValue, handleNext, handlePrev]);

  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <div className="relative z-0 flex h-[400px] w-full items-end justify-center">
        <ul className="relative flex h-[300px] w-full items-center justify-center">
          <motion.div
            onPan={(events, info) => {
              setVlueX((prev) => {
                const newX = prev + info.delta.x;

                valueCoef.set(
                  (((newX % stepToPagination) - stepToPagination / 2) %
                    (stepToPagination / 2)) /
                    (stepToPagination / 2)
                );

                // springCoef.set(newX);
                // if (newX < 0) {
                //   // if (info.delta.x > 0) {
                //   //   setCoefX(() => {
                //   //     const increase =
                //   //       stepToPagination -
                //   //       (stepToPagination +
                //   //         (Math.round(newX) % stepToPagination));
                //   //     return increase;
                //   //   });
                //   // } else if (info.delta.x < 0) {
                //   //   setCoefX(() => {
                //   //     const decrease =
                //   //       stepToPagination -
                //   //       (stepToPagination +
                //   //         (Math.round(newX) % stepToPagination));
                //   //     return decrease;
                //   //   });
                //   // }
                // } else {  }
                // if (info.delta.x > 0) {
                setCoefX(() => {
                  const increase =
                    (((newX % stepToPagination) - stepToPagination / 2) %
                      (stepToPagination / 2)) /
                    (stepToPagination / 2);
                  // console.log(increase);

                  return increase;
                });
                // } else if (info.delta.x < 0) {
                //   setCoefX(() => {
                //     const decrease =
                //       (((newX % stepToPagination) - stepToPagination / 2) %
                //         (stepToPagination / 2)) /
                //       (stepToPagination / 2);
                //     return decrease;
                //   });
                // }

                return newX;
              });
              // (Math.round(newX) % stepToPagination) / stepToPagination;
            }}
            className="absolute bottom-0 left-0 right-0 z-10 h-[300px]"
          ></motion.div>
          {teamsFoto.map((item, index) => (
            <motion.li
              className="absolute"
              key={index}
              // initial="center"
              transition={{ duration: 0 }}
              animate={position[positionIndexes[index]]}
              variants={variants}
            >
              <div className="flex h-[300px] w-[284px] items-center justify-center">
                <div className="relative h-[280px] w-[224px]">
                  <motion.div
                    className="absolute"
                    style={{
                      // x: smoothTranslateX,
                      ...(positionIndexes[index] === 2 && {
                        scale: 0.5 * (1 + coefX),
                        left: `${150 * coefX}px`,
                        bottom: `${20 * Math.abs(coefX) + 60 * (1 - Math.abs(coefX))}px`,
                      }),
                      ...(positionIndexes[index] === 3 && {
                        left: `${150 * coefX - 2 * coefX}px`,
                        bottom: `${20 * Math.abs(coefX) + 60 * (1 - Math.abs(coefX))}px`,
                      }),
                      ...(positionIndexes[index] === 4 && {
                        left: `${150 * coefX - 2 * coefX}px`,
                        // left: smoothTranslateX,
                        bottom: `${20 * Math.abs(coefX) - 30 * (1 - Math.abs(coefX))}px`,
                      }),
                      ...(positionIndexes[index] === 5 && {
                        left: `${150 * coefX - 2 * coefX}px`,
                        bottom: `${20 * Math.abs(coefX) + 60 * (1 - Math.abs(coefX))}px`,
                      }),
                      ...(positionIndexes[index] === 6 && {
                        left: `${150 * coefX}px`,
                        scale: 0.5 * (1 - coefX),
                        bottom: `${20 * Math.abs(coefX) + 60 * (1 - Math.abs(coefX))}px`,
                      }),
                    }}
                  >
                    <CardTeam
                      urlFoto={item.urlFoto}
                      name={item.name}
                      role={item.role}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListTeamcopy;
