interface ListTeamStylesProps {
  positionIndexes: number[];
  index: number;
  durationAnimation: number;
}

export const ListTeamStyles = ({
  positionIndexes,
  durationAnimation,
  index,
}: ListTeamStylesProps) => {
  return {
    ...(positionIndexes[index] < 2 && {
      transition: `transform ${durationAnimation}s linear, opacity ${durationAnimation}s linear`,
      transform: 'translateX(-300%) translateY(0%) scale(0)',
      opacity: 0,
    }),
    ...(positionIndexes[index] === 2 && {
      transform: 'translateX(-240%) translateY(0%) scale(0.57)',
      transition: `transform ${durationAnimation}s linear`,
    }),
    ...(positionIndexes[index] === 3 && {
      transform: 'translateX(-130%) translateY(-10%) scale(1)',
      transition: `transform ${durationAnimation}s linear`,
    }),
    ...(positionIndexes[index] === 4 && {
      transform: 'translateX(0%) translateY(0%) scale(1)',
      transition: `transform ${durationAnimation}s linear`,
    }),
    ...(positionIndexes[index] === 5 && {
      transform: 'translateX(130%) translateY(-10%) scale(1)',
      transition: `transform ${durationAnimation}s linear`,
    }),
    ...(positionIndexes[index] === 6 && {
      transform: 'translateX(240%) translateY(0%) scale(0.57)',
      transition: `transform ${durationAnimation}s linear`,
    }),
    ...(positionIndexes[index] > 6 && {
      transform: 'translateX(300%) translateY(0%) scale(0)',
      transition: `transform ${durationAnimation}s linear, opacity ${durationAnimation}s linear`,
      opacity: 0,
    }),
  };
};
