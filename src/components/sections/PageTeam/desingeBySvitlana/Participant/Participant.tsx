import { motion, useScroll, useSpring } from 'framer-motion';
import Container from '@/components/ui/DesignBySvitlna/Container';
import { data } from './data';
import { Card } from './Card';
import MoveLine from '@/components/ui/MoveEverything/MoveLine';
import { useRef } from 'react';

function Participant() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start end', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress);
  // console.log(scaleX);

  return (
    <section className="py-[156px]">
      <Container className="h-[1500px]">
        <div className="sticky top-10 overflow-hidden">
          <div className="relative">
            <motion.ul className="flex gap-10" style={{ scaleX }}>
              {data.map((item, index) => (
                <Card
                  key={index}
                  value={item.value}
                  text={item.text}
                  bg={item.bg}
                  border={item.border}
                  textColor={item.textColor}
                />
              ))}
            </motion.ul>
            <MoveLine
              type="moveComponent"
              direction="right"
              infinityText="Наші учасники"
              gap={20}
              duration={10}
              amountOfText={5}
            />
            <h2 className="p-12">knksdfvjnfvbkdfbdfsnbj</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Participant;
