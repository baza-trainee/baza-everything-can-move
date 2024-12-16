'use client';

import { motion } from 'framer-motion';
import { teamsFoto } from '../ui/dataFoto';
import CardTeam from './Card';
import { useCallback, useEffect, useRef, useState } from 'react';

import { cycleIndex } from '@/components/ui/SwiperFoto';
import { useFollowPointer } from '../ui/useFollovingObject';
import { useTeamSectionStore } from '../ui/useTeamSectionStore';
import { throttle } from 'lodash';
import DragSVG from './DragSVG';
import { useSlideState } from '../ui/useSliderState';
import { useMediaQuery } from 'react-responsive';
import { ListTeamStylesDesctop, ListTeamStylesMobile } from './ListTeamStyles';

enum DurtionAnimation {
  None = 0,
  Short = 0.4,
  Long = 10,
}

function ListTeam() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  const refSvg = useRef(null);

  const { x, y } = useFollowPointer(refSvg);

  const { isSVG, setIsSVG } = useTeamSectionStore();

  const { sliderState, updateState } = useSlideState(teamsFoto);

  const {
    isDisabledHandleScroll,
    valueX,
    durationAnimation = DurtionAnimation.Long,
    lastPaginatedValue,
    dragImageScale,
    stepToPagination,
  } = sliderState;

  const handleScroll = useCallback(
    (way: 1 | -1) => {
      setPositionIndexes((prevPosition) =>
        prevPosition.map((prevIndex) =>
          cycleIndex(prevIndex, way, teamsFoto.length)
        )
      );
    },
    [isDisabledHandleScroll, teamsFoto.length]
  );

  useEffect(() => {
    if (isDisabledHandleScroll) return;

    const delta = valueX - lastPaginatedValue;
    if (Math.abs(delta) >= stepToPagination) {
      const steps = Math.trunc(delta / stepToPagination);
      const direction = steps > 0 ? 1 : -1;

      if (steps > 0) {
        for (let i = 0; i < steps; i++) {
          handleScroll(direction);
        }
      } else if (steps < 0) {
        for (let i = 0; i < Math.abs(steps); i++) {
          handleScroll(direction);
        }
      }

      updateState({
        lastPaginatedValue: lastPaginatedValue + steps * stepToPagination,
      });
    }
  }, [valueX, lastPaginatedValue, handleScroll, isDisabledHandleScroll]);

  const throttledSetValueX = useCallback(
    throttle((delta) => {
      const threshold = 1;
      const maxDelta = 8;

      if (Math.abs(delta) > threshold) {
        const clampedDelta = Math.min(Math.max(delta, -maxDelta), maxDelta);
        updateState((prev) => ({ valueX: prev.valueX + clampedDelta }));
      }
    }, 200),
    [updateState]
  );

  const setStep = () => {
    if (isMobile) {
      updateState({ stepToPagination: 90 });
    } else {
      updateState({ stepToPagination: 120 });
    }
  };

  useEffect(() => {
    setStep();
    window.addEventListener('resize', setStep);
    return () => {
      window.removeEventListener('resize', setStep);
    };
  }, []);

  const handleDragImage = ({ mode }: { mode: 'start' | 'finish' }) => (
    setIsSVG(mode === 'start' ? false : true),
    updateState({
      durationAnimation: DurtionAnimation.Short,
      dragImageScale: mode === 'start' ? 0.5 : 1,
    })
  );

  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[45px] 2xl:bottom-[30px]">
      <div className="flex h-[400px] w-full items-end justify-center overflow-hidden">
        <motion.ul className="relative flex h-[280px] w-full items-center justify-center">
          <motion.div
            ref={refSvg}
            onPointerDown={() => handleDragImage({ mode: 'start' })}
            onPointerUp={() => handleDragImage({ mode: 'finish' })}
            onPan={(_, info) => throttledSetValueX(info.delta.x)}
            className="absolute bottom-0 left-0 right-0 z-20 h-[320px] touch-none"
          ></motion.div>

          {teamsFoto.map((item, index) => (
            <li
              className="-z-500 pointer-events-none absolute"
              key={index}
              style={
                isMobile
                  ? ListTeamStylesMobile({
                      positionIndexes,
                      index,
                      durationAnimation,
                    })
                  : ListTeamStylesDesctop({
                      positionIndexes,
                      index,
                      durationAnimation,
                    })
              }
            >
              <CardTeam
                urlFoto={item.urlFoto}
                name={item.name}
                role={item.role}
              />
            </li>
          ))}
          {!isSVG && <DragSVG x={x} y={y} dragImageScale={dragImageScale} />}
        </motion.ul>
      </div>
    </div>
  );
}

export default ListTeam;
