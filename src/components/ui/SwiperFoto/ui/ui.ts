import { Variants } from 'framer-motion';

export const generatePositions = (length: number) => {
  const positions = [];
  const centerIndex = Math.floor(length / 2);

  for (let i = 0; i < length; i++) {
    if (i <= centerIndex - 1) {
      positions.push(`top${centerIndex - i}`);
    } else if (i === centerIndex) {
      positions.push('center');
    } else {
      positions.push(`bottom${i - centerIndex}`);
    }
  }

  return positions;
};

export const cycleIndex = (
  prevIndex: number,
  direction: number,
  arrayLengs: number
) => (prevIndex + direction + arrayLengs) % arrayLengs;

export const generateVariants = (length: number) => {
  const variants: Variants = {};
  const centerIndex = Math.floor(length / 2);
  const spacing = 100 / (length + 1);

  for (let i = 0; i < length; i++) {
    const topPosition = spacing * (i + 1);

    if (i <= centerIndex - 2) {
      variants[`top${centerIndex - i}`] = {
        top: `${topPosition}%`,
        scale: 0,
        opacity: 0,
      };
    } else if (i === centerIndex - 1) {
      variants[`top${centerIndex - i}`] = {
        top: `10%`,
        scale: 1,
      };
    } else if (i === centerIndex) {
      variants.center = {
        top: '50%',
        translateY: '-50%',
        scale: 1.6,
      };
    } else if (i === centerIndex + 1) {
      variants[`bottom${i - centerIndex}`] = {
        top: '90%',
        scale: 1,
      };
    } else {
      variants[`bottom${i - centerIndex}`] = {
        top: `${topPosition}%`,
        scale: 0,
        opacity: 0,
      };
    }
  }

  return variants;
};
export const generateVariantsHorizontal = (length: number) => {
  const variants: Variants = {};
  const centerIndex = Math.floor(length / 2);
  const spacing = 100 / (length + 1);

  for (let i = 0; i < length; i++) {
    const leftPosition = spacing * (i + 1);

    if (i <= centerIndex - 2) {
      variants[`top${centerIndex - i}`] = {
        left: `${leftPosition}%`,

        opacity: 0,
        scale: 0,
      };
    } else if (i === centerIndex - 1) {
      variants[`top${centerIndex - i}`] = {
        left: `10%`,
        width: 40,
        height: 40,
        scale: 1,
      };
    } else if (i === centerIndex) {
      variants.center = {
        left: '50%',
        translateX: '-50%',
        width: 40,
        height: 40,
        scale: 1.6,
      };
    } else if (i === centerIndex + 1) {
      variants[`bottom${i - centerIndex}`] = {
        left: '90%',
        width: 40,
        height: 40,
        scale: 1,
      };
    } else {
      variants[`bottom${i - centerIndex}`] = {
        left: `${leftPosition}%`,

        scale: 0,
        opacity: 0,
      };
    }
  }

  return variants;
};
