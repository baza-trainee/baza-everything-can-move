import clsx from 'clsx';
import { motion } from 'framer-motion';

function TextBottom() {
  return (
    <motion.ul className="flex justify-between">
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <p
            className={clsx(
              'min-w-[720px] font-second-family text-[84px] font-semibold uppercase leading-o-150 tracking-custom-tight',
              index % 2 !== 0 && 'text-stroke'
            )}
          >
            Наші учасники
          </p>
        </li>
      ))}
    </motion.ul>
  );
}

export default TextBottom;
