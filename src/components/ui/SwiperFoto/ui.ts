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

export const generateVariants = (length: number) => {
  const variants: {
    [key: string]: {
      top: string;
      scale?: number;
      opacity?: number;
      translateY?: string;
    };
  } = {};
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
