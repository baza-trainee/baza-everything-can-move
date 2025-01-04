import { RefObject, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const spring = { damping: 15, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();

      xPoint.set(clientX - rect.left - rect.width / 2);
      yPoint.set(clientY - rect.top - rect.height / 2);
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return { x, y };
}
