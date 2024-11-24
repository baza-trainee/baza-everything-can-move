import { Variants } from 'framer-motion';

export const generateVariantsHorizontal = (length: number) => {
  const variants: Variants = {};
  const centerIndex = Math.floor(length / 2);
  const spacing = 100 / (length + 1);

  for (let i = 0; i < length; i++) {
    const leftPosition = spacing * (i + 1);

    if (i <= centerIndex - 2) {
      variants[`left${centerIndex - i}`] = {
        left: `${leftPosition}%`,
        scale: 0.8,
      };
    } else if (i === centerIndex - 1) {
      variants[`left${centerIndex - i}`] = {
        left: `10%`,
        scale: 0.8,
      };
    } else if (i === centerIndex) {
      variants.center = {
        left: '50%',
        // translateX: '-50%',
        scale: 1,
      };
    } else if (i === centerIndex + 1) {
      variants[`right${i - centerIndex}`] = {
        left: '90%',
        scale: 0.8,
      };
    } else {
      variants[`right${i - centerIndex}`] = {
        left: `${leftPosition}%`,
        scale: 0.8,
      };
    }
  }

  return variants;
};
export const generatePositions = (length: number) => {
  const positions = [];
  const centerIndex = Math.floor(length / 2);

  for (let i = 0; i < length; i++) {
    if (i <= centerIndex - 1) {
      positions.push(`left${centerIndex - i}`);
    } else if (i === centerIndex) {
      positions.push('center');
    } else {
      positions.push(`right${i - centerIndex}`);
    }
  }

  return positions;
};
