import { Variants } from 'framer-motion';
interface VariantsProps {
  length: number;
  elementWidth?: number;
  gap?: number;
}

export const generateVariantsHorizontal = ({
  length,
  elementWidth,
  gap,
}: VariantsProps) => {
  const variants: Variants = {};
  const centerIndex = Math.floor(length / 2);
  const spacing = 14;

  for (let i = 0; i < length; i++) {
    if (i < centerIndex) {
      variants[`left${centerIndex - i}`] = {
        left: `${50 - spacing * (centerIndex - i)}%`, //50-14 * 4-0 // 50 - 14 * 4 -
        translateX: '-50%',
        scale: 0.57,
      };
    } else if (i === centerIndex) {
      variants.center = {
        left: '50%',
        translateX: '-50%',
        scale: 1,
      };
    } else {
      variants[`right${i - centerIndex}`] = {
        left: `${50 + spacing * (i - centerIndex)}%`,
        translateX: '-50%',
        scale: 0.57,
      };
    }
  }

  return variants;
};

export const generatePositions = (length: number) => {
  const positions = [];
  const centerIndex = Math.floor(length / 2);

  for (let i = 0; i < length; i++) {
    if (i < centerIndex) {
      positions.push(`left${centerIndex - i}`);
    } else if (i === centerIndex) {
      positions.push('center');
    } else {
      positions.push(`right${i - centerIndex}`);
    }
  }

  return positions;
};
