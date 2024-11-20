import { motion } from 'framer-motion';
import { Props } from '../MoveLine';

export function ListText({
  duration,
  amountOfText,
  infinityText,
  gap = 0,
}: Partial<Props>) {
  return (
    <motion.ul
      className="flex flex-shrink-0"
      initial={{ x: '0%' }}
      animate={{ x: '-100%' }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {Array(amountOfText)
        .fill(infinityText?.split(' '))
        .flat()
        .map((item, index) => (
          <li key={index}>
            <span
              style={{
                paddingRight: gap,
              }}
              className="w-max text-4xl font-regular uppercase leading-s-120 opacity-10"
            >
              {item}
            </span>
          </li>
        ))}
    </motion.ul>
  );
}
