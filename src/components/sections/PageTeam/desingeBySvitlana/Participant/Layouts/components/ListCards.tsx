import { motion } from 'framer-motion';
import { data } from './data';
import { Card } from './Card';
import { forwardRef, HTMLAttributes } from 'react';

type Props = { paddingTop: number } & HTMLAttributes<HTMLUListElement>;

const ListCards = forwardRef<HTMLUListElement, Props>(
  ({ paddingTop, ...props }, ref) => {
    return (
      <ul {...props} ref={ref} className="flex w-full justify-between">
        {data.map((item, index) => {
          return (
            <motion.li
              key={index}
              style={{
                paddingTop: `${paddingTop * index}px`,
              }}
            >
              <Card
                value={item.value}
                text={item.text}
                bg={item.bg}
                border={item.border}
                textColor={item.textColor}
              />
            </motion.li>
          );
        })}
      </ul>
    );
  }
);

export default ListCards;
