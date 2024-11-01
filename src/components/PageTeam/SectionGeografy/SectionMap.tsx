'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import clsx from 'clsx';
import { CountrieTitle } from './CountrieTitle';

type Props = { rowCounties: string };

function SectionMap({ rowCounties }: Props) {
  const arrayCountries = rowCounties.split(' ');
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={clsx(
        "relative flex h-[160px] flex-col items-center justify-center overflow-hidden bg-[url('/assets/images/PageTeam/mapbaseMobile.svg')] bg-cover bg-no-repeat lg:h-[320px] lg:bg-[url('/assets/images/PageTeam/mapbaseTablet.svg')] 2xl:h-[454px] 2xl:bg-[url('/assets/images/PageTeam/mapbaseDesktop.svg')]"
      )}
    >
      {isInView && (
        <motion.ul className="hidden flex-wrap justify-center gap-3 lg:flex">
          {arrayCountries.map((item, index) => (
            <CountrieTitle key={index} text={item} />
          ))}
        </motion.ul>
      )}

      {isInView && (
        <>
          <motion.ul
            className="absolute left-0 top-1/3 flex gap-2 lg:hidden"
            initial={{
              left: 0,
              right: 'auto',
            }}
            animate={{ left: 'auto', right: 0 }}
            transition={{
              duration: 30,
              delay: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'reverse',
            }}
          >
            {arrayCountries.map((item, index) => (
              <CountrieTitle key={index} text={item} />
            ))}
          </motion.ul>

          <motion.ul
            initial={{
              left: 'auto',
              right: 0,
            }}
            animate={{ left: 0, right: 'auto' }}
            transition={{
              delay: 2,
              repeat: Infinity,
              duration: 30,
              ease: 'easeInOut',
              repeatType: 'reverse',
            }}
            className="absolute bottom-1/3 right-0 flex gap-2 lg:hidden"
          >
            {arrayCountries
              .map((item, index) => <CountrieTitle key={index} text={item} />)
              .reverse()}
          </motion.ul>
        </>
      )}
    </motion.div>
  );
}

export default SectionMap;
