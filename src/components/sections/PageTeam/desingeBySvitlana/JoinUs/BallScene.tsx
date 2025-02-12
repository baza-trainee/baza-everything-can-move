'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useBallsState } from './Balls';
import { useMediaQuery } from 'react-responsive';

const BallScene = () => {
  const [isBallsInViev, setisBallsInViev] = useState(false);

  const { balls, setBalls } = useBallsState();

  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView) {
      timer = setTimeout(() => {
        setisBallsInViev(true);
      }, 4000);
    } else {
      setisBallsInViev(false);
    }

    return () => clearTimeout(timer);
  }, [isInView]);

  const gravity = 0.01;
  const bounce = 0.3;
  const dragSpeedRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });

  useEffect(() => {
    const updatePositions = () => {
      setBalls((prevBalls) => {
        const updatedBalls = [...prevBalls];

        for (let i = 0; i < updatedBalls.length; i++) {
          const ball = updatedBalls[i];

          if (!ball.isDragging) {
            ball.vy += gravity;

            const container = containerRef.current;
            if (container) {
              const rect = container.getBoundingClientRect();

              if (ball.y + ball.radius >= rect.height) {
                ball.y = rect.height - ball.radius;
                ball.vy = -ball.vy * bounce;
                ball.vx *= 0.95;
              }

              if (ball.y - ball.radius <= 0) {
                ball.y = ball.radius;
                ball.vy = -ball.vy * bounce;
              }

              if (ball.x - ball.radius <= 0) {
                ball.x = ball.radius;
                ball.vx = -ball.vx * bounce;
              }

              if (ball.x + ball.radius >= rect.width) {
                ball.x = rect.width - ball.radius;
                ball.vx = -ball.vx * bounce;
              }
            }

            ball.x += ball.vx;
            ball.y += ball.vy;

            const speed = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
            ball.angle += (speed / ball.radius) * 5;
          }

          for (let j = i + 1; j < updatedBalls.length; j++) {
            const otherBall = updatedBalls[j];

            const dx = otherBall.x - ball.x;
            const dy = otherBall.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < ball.radius * 2) {
              const overlap = ball.radius * 2 - distance;
              const angle = Math.atan2(dy, dx);

              const forceX = Math.cos(angle) * overlap * 0.5;
              const forceY = Math.sin(angle) * overlap * 0.5;

              if (!ball.isDragging) {
                ball.x -= forceX;
                ball.y -= forceY;
              }

              if (!otherBall.isDragging) {
                otherBall.x += forceX;
                otherBall.y += forceY;
              }
            }
          }
        }

        return updatedBalls;
      });

      requestAnimationFrame(updatePositions);
    };

    updatePositions();
  }, []);

  const handlePointerMove = (e: MouseEvent) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) => {
        if (ball.isDragging) {
          const container = containerRef.current;
          if (!container) return ball;

          const rect = container.getBoundingClientRect();
          const newX = Math.max(
            Math.min(e.clientX - rect.left, rect.width - ball.radius),
            ball.radius
          );
          const newY = Math.max(
            Math.min(e.clientY - rect.top, rect.height - ball.radius),
            ball.radius
          );

          dragSpeedRef.current.vx = newX - ball.x;
          dragSpeedRef.current.vy = newY - ball.y;

          return { ...ball, x: newX, y: newY };
        }
        return ball;
      })
    );
  };

  const randomHit = () => {
    const angle = Math.random() * Math.PI * 2;
    const force = 5;
    return {
      vx: Math.cos(angle) * force,
      vy: Math.sin(angle) * force,
    };
  };

  const handlePointerDown = (
    e: React.MouseEvent | React.TouchEvent,
    id: number
  ) => {
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }

    setBalls((prevBalls) =>
      prevBalls.map((ball) =>
        ball.id === id ? { ...ball, isDragging: true, vx: 0, vy: 0 } : ball
      )
    );
  };

  const handlePointerUp = () => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) =>
        ball.isDragging
          ? {
              ...ball,
              isDragging: false,
              vx: dragSpeedRef.current.vx * 0.2,
              vy: dragSpeedRef.current.vy * 0.2,
            }
          : ball
      )
    );
  };
  useEffect(() => {
    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('mouseup', handlePointerUp);

    return () => {
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
    };
  }, []);

  return (
    <div className="absolute -top-[0px] left-0 right-0 z-0 2xl:-top-[0px]">
      <div
        ref={containerRef}
        className="relative mx-auto h-[772px] overflow-hidden lg:h-[975px] 2xl:h-[788px]"
      >
        {isInView &&
          balls.map((ball) => (
            <motion.div
              key={ball.id}
              onMouseDown={(e) => handlePointerDown(e, ball.id)}
              onMouseUp={() => handlePointerUp()}
              onTouchStart={(e) => handlePointerDown(e, ball.id)}
              onTouchEnd={() => handlePointerUp()}
              className="absolute flex cursor-grab select-none items-center justify-center rounded-full outline-none will-change-transform"
              initial={{
                left: isMobile ? 200 : 1200,
              }}
              animate={{
                top: ball.y - ball.radius,
                left: ball.x - ball.radius,
              }}
              transition={{ duration: isBallsInViev ? 0 : 1 }}
              style={{
                width: `${ball.radius * 2}px`,
                height: `${ball.radius * 2}px`,
                backgroundColor: ball.color,

                transform: `rotate(${ball.angle}deg)`,
              }}
            >
              {ball.link && (
                <a href={ball.link} className="cursor-pointer outline-none">
                  <img
                    className="pointer-events-none outline-none"
                    src={ball.src}
                    alt="куля"
                    width={ball.imgeSize}
                    height={ball.imgeSize}
                  />
                </a>
              )}
              {!ball.link && (
                <img
                  className="pointer-events-none outline-none"
                  src={ball.src}
                  alt="куля"
                  width={ball.imgeSize}
                  height={ball.imgeSize}
                />
              )}
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default BallScene;
