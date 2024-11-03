'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export function Label({
  text,
  className,
  fixed = false,
}: {
  className: string;
  text: string;
  fixed?: boolean;
}) {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      className={clsx(
        className,
        'absolute rounded-[40px] border-[1px] border-solid border-olga-green-extra bg-white px-5 py-2 text-s uppercase leading-snug text-olga-bg lg:text-m 2xl:text-sm',
        fixed && 'pointer-events-none'
      )}
      animate={{ rotate: -360 }}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
    >
      {text}
    </motion.div>
  );
}
