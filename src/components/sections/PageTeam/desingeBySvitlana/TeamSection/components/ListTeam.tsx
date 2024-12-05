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
import { useMouseStore } from '../ui/useMouseStore';
import { useMediaQuery } from 'react-responsive';

enum DurtionAnimation {
  None = 0,
  Short = 0.4,
  Long = 10,
}

const stepToPagination = 150;

function ListTeam() {
  const [positionIndexes, setPositionIndexes] = useState(
    teamsFoto.map((_, index) => index)
  );
  const isMobile = useMediaQuery({ query: '(max-width: 1439.5px)' });

  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const refSvg = useRef(null);

  const { x, y } = useFollowPointer(refSvg);

  const { isSVG, setIsSVG } = useTeamSectionStore();
  const setMouse = useMouseStore((state) => state.setMouse);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMouse(clientX, clientY);
  };

  const { sliderState, updateState, position, variants } =
    useSlideState(teamsFoto);

  const {
    isDisabledHandleScroll,
    valueX,
    durationAnimation = DurtionAnimation.Long,
    lastPaginatedValue,
    dragImageScale,
    isAutoScroll,
  } = sliderState;

  const clearAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };
  const handleScroll = useCallback(
    (way: 1 | -1) => {
      console.log('hndlscroll');

      if (isDisabledHandleScroll) return;
      console.log('handlscrolll');

      clearAutoScroll();
      updateState({ isDisabledHandleScroll: true });

      setPositionIndexes((prevPosition) =>
        prevPosition.map((prevIndex) =>
          cycleIndex(prevIndex, way, teamsFoto.length)
        )
      );

      setTimeout(() => {
        updateState({ isDisabledHandleScroll: false });
      }, DurtionAnimation.Short * 1000);
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

  // useEffect(() => {
  //   if (!isAutoScroll) return;
  //   console.log('start autoscroll with duration:', durationAnimation);

  //   clearAutoScroll();
  //   // updateState({ durationAnimation: DurtionAnimation.Long });
  //   autoScrollRef.current = setInterval(() => {
  //     setPositionIndexes((prevPosition) =>
  //       prevPosition.map((prevIndex) =>
  //         cycleIndex(prevIndex, -1, teamsFoto.length)
  //       )
  //     );
  //   }, durationAnimation * 1000);

  //   return () => {
  //     clearAutoScroll();
  //   };
  // }, [isAutoScroll, durationAnimation]);

  const handlePointerInteraction = (isDown: boolean) => {
    if (isDown) {
      clearAutoScroll();
    }
    updateState({
      durationAnimation: isDown
        ? DurtionAnimation.Short
        : DurtionAnimation.Short,

      isAutoScroll: !isDown,
    });

    if (!isDown) {
      updateState({ isAutoScroll: true });
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAutoScroll();
        updateState({
          isAutoScroll: false,
          // durationAnimation: DurtionAnimation.None,
        });
      } else {
        updateState({
          isAutoScroll: true,
          // durationAnimation: DurtionAnimation.Long,
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:bottom-[200px] 2xl:bottom-[130px]">
      <div className="flex h-[400px] w-full items-end justify-center overflow-hidden">
        <div className="relative flex h-[280px] w-full cursor-none items-center justify-center">
          <motion.div
            onMouseMove={handleMouseMove}
            ref={refSvg}
            onHoverStart={() => (
              setIsSVG(false),
              clearAutoScroll(),
              updateState({
                isAutoScroll: false,
                durationAnimation: DurtionAnimation.Short,
                dragImageScale: 0.5,
              })
            )}
            onHoverEnd={() => (
              setIsSVG(true),
              updateState({
                dragImageScale: 1,
                isAutoScroll: true,
                // durationAnimation: DurtionAnimation.Long,
              })
            )}
            onPointerDown={() => handlePointerInteraction(true)}
            onPointerUp={() => handlePointerInteraction(false)}
            onPan={(_, info) => throttledSetValueX(info.delta.x)}
            className="absolute bottom-0 left-0 right-0 z-20 h-[320px]"
          ></motion.div>
          {teamsFoto.map((item, index) => (
            <div
              className="-z-500 pointer-events-none absolute"
              key={index}
              // animate={position[positionIndexes[index]]}
              // variants={variants}
              style={
                isMobile
                  ? {
                      ...(positionIndexes[index] < 2 && {
                        transition: `transform ${durationAnimation}s linear, opacity ${durationAnimation}s linear`,
                        transform: 'translateX(-300%) scale(0)',
                        opacity: 0,
                      }),
                      ...(positionIndexes[index] === 2 && {
                        transform: 'translateX(-180%) scale(0.57)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 3 && {
                        transform: 'translateX(-100%) scale(0.57)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 4 && {
                        transform: 'translateX(0%) translateY(0%) scale(1)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 5 && {
                        transform: 'translateX(100%) scale(0.57)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 6 && {
                        transform: 'translateX(180%) scale(0.57)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] > 6 && {
                        transform: 'translateX(300%) scale(0)',
                        transition: `transform ${durationAnimation}s linear, opacity ${durationAnimation}s linear`,
                        opacity: 0,
                      }),
                    }
                  : {
                      ...(positionIndexes[index] < 2 && {
                        transition: `transform ${durationAnimation}s linear, opacity ${durationAnimation}s linear`,
                        transform: 'translateX(-300%) translateY(0%) scale(0)',
                        opacity: 0,
                      }),
                      ...(positionIndexes[index] === 2 && {
                        transform:
                          'translateX(-240%) translateY(0%) scale(0.57)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 3 && {
                        transform:
                          'translateX(-130%) translateY(-10%) scale(1)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 4 && {
                        transform: 'translateX(0%) translateY(0%) scale(1)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 5 && {
                        transform: 'translateX(130%) translateY(-10%) scale(1)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] === 6 && {
                        transform:
                          'translateX(240%) translateY(0%) scale(0.57)',
                        transition: `transform ${durationAnimation}s linear`,
                      }),
                      ...(positionIndexes[index] > 6 && {
                        transform: 'translateX(300%) translateY(0%) scale(0)',
                        transition: `transform ${durationAnimation}s linear, opacity ${durationAnimation}s linear`,
                        opacity: 0,
                      }),
                    }
              }
              // transition={{ duration: durationAnimation, ease: 'linear' }}
            >
              <CardTeam
                urlFoto={item.urlFoto}
                name={item.name}
                role={item.role}
              />
            </div>
          ))}
          {!isSVG && <DragSVG x={x} y={y} dragImageScale={dragImageScale} />}
        </div>
      </div>
    </div>
  );
}

export default ListTeam;
