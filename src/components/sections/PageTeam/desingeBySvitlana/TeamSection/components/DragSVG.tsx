import {
  motion,
  AnimatePresence,
  MotionValue,
  CustomValueType,
} from 'framer-motion';

type Props = {
  dragImageScale: number;
  x:
    | string
    | number
    | MotionValue<number>
    | MotionValue<string>
    | CustomValueType
    // | MotionValue<any>
    | undefined;
  y:
    | string
    | number
    | MotionValue<number>
    | MotionValue<string>
    | CustomValueType
    // | MotionValue<any>
    | undefined;
};

function DragSVG({ dragImageScale, x, y }: Props) {
  return (
    <AnimatePresence>
      <motion.svg
        style={{ x, y }}
        initial={{ scale: 0 }}
        animate={{ scale: dragImageScale }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        width="82"
        height="16"
        viewBox="0 0 82 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM81.7071 8.70711C82.0976 8.31658 82.0976 7.68342 81.7071 7.29289L75.3431 0.928932C74.9526 0.538408 74.3195 0.538408 73.9289 0.928932C73.5384 1.31946 73.5384 1.95262 73.9289 2.34315L79.5858 8L73.9289 13.6569C73.5384 14.0474 73.5384 14.6805 73.9289 15.0711C74.3195 15.4616 74.9526 15.4616 75.3431 15.0711L81.7071 8.70711ZM1 9H81V7H1V9Z"
          fill="white"
        />
      </motion.svg>
    </AnimatePresence>
  );
}

export default DragSVG;
