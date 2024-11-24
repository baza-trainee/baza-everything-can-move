import SectionTitle from '@/components/ui/SectionTitle';
import { motion, useInView } from 'framer-motion';
import { data } from './components/data';
import { Card } from './components/Card';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

function MobileLayout() {
  const ref1 = useRef<HTMLUListElement>(null);
  const ref2 = useRef<HTMLUListElement>(null);
  const ref3 = useRef<HTMLUListElement>(null);
  const ref4 = useRef<HTMLUListElement>(null);

  const refs = [ref1, ref2, ref3, ref4];

  const inView1 = useInView(ref1, { margin: '-10% 0px' });
  const inView2 = useInView(ref2, { margin: '-10% 0px' });
  const inView3 = useInView(ref3, { margin: '-10% 0px' });
  const inView4 = useInView(ref4, { margin: '-10% 0px' });

  const inViewStates = [inView1, inView2, inView3, inView4];

  const renderList = (
    startIndex: number,
    endIndex: number,
    refIndex: number
  ) => {
    return (
      <ul ref={refs[refIndex]} className="flex flex-col gap-6">
        {data.map((item, index) => {
          if (index < startIndex || index > endIndex) return null;
          const loclIndex = index - startIndex;
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: refIndex % 2 === 0 ? 100 : -100 }}
              animate={inViewStates[refIndex] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: loclIndex * 0.2 }}
            >
              <Card
                value={item.value}
                text={item.text}
                bg={item.bg}
                border={item.border}
                textColor={item.textColor}
              />
              {(index === 1 || index === 4 || index === 6) && (
                <StarsGroup className="my-6" />
              )}
            </motion.li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <SectionTitle className="mb-[60px]">Наша команда</SectionTitle>
      {renderList(0, 1, 0)}
      {renderList(2, 4, 1)}
      {renderList(5, 6, 2)}
      {renderList(7, data.length - 1, 3)}
    </div>
  );
}

export default MobileLayout;

function StarsGroup({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      <CustomStar className="stroke-white" />
      <CustomStar className="stroke-s-purple" />
      <CustomStar className="stroke-white" />
    </div>
  );
}

function CustomStar({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 281 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M198.229 74.4148L253.767 59.732L222.689 108.045L222.304 108.644L222.998 108.803L278.997 121.612L229.027 149.948L228.407 150.3L228.948 150.763L272.581 188.129L215.166 189.997L214.454 190.02L214.718 190.682L235.988 244.045L184.281 219.017L183.64 218.707L183.566 219.415L177.6 276.55L143.447 230.36L143.024 229.787L142.629 230.38L110.795 278.199L102.019 221.427L101.911 220.723L101.285 221.065L50.8755 248.612L69.4883 194.265L69.7191 193.591L69.0069 193.603L11.5693 194.568L53.3063 155.096L53.8238 154.607L53.1876 154.287L1.88061 128.449L57.1804 112.894L57.8661 112.701L57.4517 112.122L24.0291 65.3999L80.2232 77.3262L80.92 77.4741L80.8222 76.7685L72.9408 19.866L117.156 56.5409L117.704 56.9956L117.945 56.3254L137.411 2.27812L159.517 55.2998L159.792 55.9573L160.317 55.476L202.669 16.6654L197.603 73.8873L197.541 74.5969L198.229 74.4148Z"
        style={{ strokeWidth: 10 }}
      />
    </svg>
  );
}
