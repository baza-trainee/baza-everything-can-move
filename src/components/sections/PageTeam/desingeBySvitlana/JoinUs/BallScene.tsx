import React, { useEffect, useRef, useState } from 'react';
import { BallsProps } from './Balls';
import { useMediaQuery } from 'react-responsive';
import styles from './Balls.module.css';
import clsx from 'clsx';
const BallScene = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  const [balls, setBalls] = useState<BallsProps>([
    {
      id: 1,
      x: 140,
      y: 250,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#363535',
      isDragging: false,
      src: '/assets/icons/Ball1.svg',
      link: '',
      radius: isMobile ? 70 : 124,
      imgeSize: isMobile ? 140 : 248,
    },
    {
      id: 2,
      x: 250,
      y: 250,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#363535',
      isDragging: false,
      src: '/assets/icons/Ball2.svg',
      link: '',
      radius: isMobile ? 70 : 124,
      imgeSize: isMobile ? 140 : 248,
    },
    {
      id: 3,
      x: 600,
      y: 300,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#8F8DED',
      isDragging: false,
      src: '/assets/icons/Facebook.svg',
      link: 'https://www.facebook.com/BazaTraineeUkraine',
      radius: isMobile ? 80 : 140,
      imgeSize: isMobile ? 48 : 82,
    },
    {
      id: 4,
      x: 450,
      y: 350,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#8F8DED',
      isDragging: false,
      src: '/assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all',
      radius: isMobile ? 80 : 140,
      imgeSize: isMobile ? 48 : 82,
    },
    {
      id: 5,
      x: 500,
      y: 300,
      vx: 0,
      vy: 0,
      angle: 0,
      color: '#8F8DED',
      isDragging: false,
      src: '/assets/icons/Telegram.svg',
      link: 'https://t.me/+CBXkAJlsCy83ZDYy',
      radius: isMobile ? 80 : 140,
      imgeSize: isMobile ? 48 : 82,
    },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const gravity = 0.02; // Сила гравітації
  const bounce = 0.3; // Сила відскоку
  const dragSpeedRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });

  useEffect(() => {
    const updatePositions = () => {
      setBalls((prevBalls) => {
        const updatedBalls = [...prevBalls];

        for (let i = 0; i < updatedBalls.length; i++) {
          const ball = updatedBalls[i];

          if (!ball.isDragging) {
            // Гравітація
            ball.vy += gravity;

            // Обмеження межами контейнера
            const container = containerRef.current;
            if (container) {
              const rect = container.getBoundingClientRect();

              // Зіткнення з нижньою межею
              if (ball.y + ball.radius >= rect.height) {
                ball.y = rect.height - ball.radius;
                ball.vy = -ball.vy * bounce;
                ball.vx *= 0.95; // Зменшення горизонтальної швидкості (тертя)
              }

              // Зіткнення з верхньою межею
              if (ball.y - ball.radius <= 0) {
                ball.y = ball.radius;
                ball.vy = -ball.vy * bounce;
              }

              // Зіткнення з лівою межею
              if (ball.x - ball.radius <= 0) {
                ball.x = ball.radius;
                ball.vx = -ball.vx * bounce;
              }

              // Зіткнення з правою межею
              if (ball.x + ball.radius >= rect.width) {
                ball.x = rect.width - ball.radius;
                ball.vx = -ball.vx * bounce;
              }
            }

            // Оновлення позиції
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Оновлення кута обертання на основі швидкості
            const speed = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
            ball.angle += (speed / ball.radius) * 5; // Коефіцієнт масштабу для обертання
          }

          // Відштовхування від інших куль
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

    updatePositions(); // Запуск циклу оновлення
  }, []);

  const handlePointerDown = (id: number) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) =>
        ball.id === id ? { ...ball, isDragging: true, vx: 0, vy: 0 } : ball
      )
    );
  };

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
    // const handleTouchMove = (e: TouchEvent) => {
    //   const touch = e.touches[0];
    //   handlePointerMove(touch.clientX, touch.clientY);
    // };

    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('mouseup', handlePointerUp);
    // document.addEventListener('touchmove', handleTouchMove);
    // document.addEventListener('touchend', handlePointerUp);

    return () => {
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
      // document.removeEventListener('touchmove', handleTouchMove);
      // document.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

  return (
    <div className="absolute -top-[100px] left-0 right-0 z-0 2xl:-top-[100px]">
      <div
        ref={containerRef}
        className="relative h-[772px] w-[375px] overflow-hidden lg:h-[975px] lg:w-[768px] 2xl:h-[788px] 2xl:w-[1440px]"
      >
        {balls.map((ball) => (
          <div
            key={ball.id}
            onMouseDown={() => handlePointerDown(ball.id)}
            // onTouchStart={() => handlePointerDown(ball.id)}
            className={clsx(
              styles.ball,
              'absolute flex cursor-grab items-center justify-center rounded-full'
            )}
            style={{
              width: `${ball.radius * 2}px`,
              height: `${ball.radius * 2}px`,
              backgroundColor: ball.color,
              top: ball.y - ball.radius,
              left: ball.x - ball.radius,
              transform: `rotate(${ball.angle}deg)`,
            }}
          >
            {ball.link && (
              <a href={ball.link} className="cursor-pointer">
                <img
                  src={ball.src}
                  alt="куля"
                  width={ball.imgeSize}
                  height={ball.imgeSize}
                />
              </a>
            )}
            {!ball.link && (
              <img
                className="pointer-events-none"
                src={ball.src}
                alt="куля"
                width={ball.imgeSize}
                height={ball.imgeSize}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BallScene;
