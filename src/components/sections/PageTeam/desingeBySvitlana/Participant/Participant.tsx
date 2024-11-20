import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Container from '@/components/ui/DesignBySvitlna/Container';
import { data } from './data';
import { Card } from './Card';
import { useRef } from 'react';

function Participant() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['center end', 'end 1.2'],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const smoothTranslateX = useSpring(translateX, {
    stiffness: 50,
    damping: 20,
  });
  console.log(smoothTranslateX.get());

  return (
    <section className="py-[156px]">
      <Container className="">
        <div ref={gridRef} className="h-[1500px]">
          <div className="sticky top-10 overflow-clip">
            {/* <span>{scaleX}</span> */}

            <motion.ul className="flex gap-10" style={{ x: smoothTranslateX }}>
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

            {/* <MoveLine
              type="moveComponent"
              direction="right"
              infinityText="Наші учасники"
              gap={20}
              duration={10}
              amountOfText={5}
            /> */}
            <p className="p-12">зірочки</p>
            <h2 className="p-12">Наші учасники</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Participant;
