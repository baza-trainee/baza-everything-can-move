import { motion } from 'framer-motion';
import { data } from './data';
import { Card } from './Card';

type Props = { paddingTop: number };

function ListCards({ paddingTop }: Props) {
  return (
    <motion.ul className="flex w-full justify-between">
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
    </motion.ul>
  );
}

export default ListCards;
