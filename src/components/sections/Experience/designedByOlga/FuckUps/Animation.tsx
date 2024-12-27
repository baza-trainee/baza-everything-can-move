import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const strokeDasharray = useTransform(progressValue, [0, 1], [0, 283]);

  return (
    <div>
      <motion.svg
        className="fixed top-4 left-4"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="10"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#00FF00"
          strokeWidth="10"
          strokeDasharray="283"
          strokeDashoffset="0"
          style={{ strokeDashoffset: strokeDasharray }}
          initial={{ strokeDashoffset: 283 }}
          animate={{ strokeDashoffset: 0 }}
        />
      </motion.svg>
    </div>
  )
}