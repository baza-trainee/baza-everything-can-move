import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CircleTimerProps {
  duration?: number;
  className?: string;
  width?: number;
  height?: number;
  delay?: number;
}

const CircleTimer = ({
  className,
  duration = 4,
  width = 62,
  height = 62,
  delay = 1,
}: CircleTimerProps) => (
  <motion.svg
    className={cn(className)}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{
        pathLength: 1,
        opacity: 1,
      }}
      animate={{ pathLength: 0, opacity: 0.8 }}
      transition={{
        duration: duration,
        ease: 'linear',
        delay: delay,
      }}
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#ffffff"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default CircleTimer;
