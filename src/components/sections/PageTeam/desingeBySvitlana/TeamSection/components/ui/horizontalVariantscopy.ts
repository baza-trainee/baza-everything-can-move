import { Variants } from 'framer-motion';
interface VariantsProps {
  length: number;
  elementWidth?: number;
  gap?: number;
}

export const generateVariantsHorizontalcopy = ({ length }: VariantsProps) => {
  const variants: Variants = {};
  const centerIndex = Math.floor(length / 2);
  const spacing = -100;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      variants[`left${centerIndex - i}`] = {
        left: `${50 - spacing * (centerIndex - i)}%`,
        translateX: '-50%',
        scale: 0,
        opacity: 0,
      };
    } else if (i > 0 && i < centerIndex - 2) {
      variants[`left${centerIndex - i}`] = {
        left: `${50 - spacing * (centerIndex - i)}%`,
        translateX: '-50%',
        scale: 0,
      };
    } else if (i === centerIndex - 2) {
      variants[`left${centerIndex - i}`] = {
        left: `50%`,
        translateX: '-250%',
        scale: 1,
      };
    } else if (i === centerIndex - 1) {
      variants[`left${centerIndex - i}`] = {
        left: `50%`,
        translateX: '-150%',
        scale: 1,
      };
    } else if (i === centerIndex) {
      variants.center = {
        left: '50%',
        translateX: '-50%',
        scale: 1,
      };
    } else if (i === centerIndex + 1) {
      variants[`right${i - centerIndex}`] = {
        left: `50%`,
        translateX: '50%',
        scale: 1,
      };
    } else if (i === centerIndex + 2) {
      variants[`right${i - centerIndex}`] = {
        left: `50%`,
        translateX: '150%',
        scale: 1,
      };
    } else if (i > centerIndex + 2 && i < length - 1) {
      variants[`right${i - centerIndex}`] = {
        left: `${50 + spacing * (i - centerIndex)}%`,
        translateX: '150%',
        scale: 0,
      };
    }
    if (i === length - 1) {
      variants[`right${i - centerIndex}`] = {
        left: `${50 + spacing * (i - centerIndex)}%`,
        translateX: '150%',
        scale: 0,
        opacity: 0,
      };
    }
  }

  return variants;
};

export const generatePositionscopy = (length: number) => {
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
