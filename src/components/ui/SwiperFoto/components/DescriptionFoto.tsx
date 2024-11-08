import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

type Props = { title: string; description: string; className?: string };

function DescriptionFoto({ title, description, className }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className={cn('font-regular leading-o-130', className)}
        key={title}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="uppercase 2xl:text-l">{title ?? 'no title'}</h2>
        <p className="2xl:text-sm">{description ?? 'no description'}</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default DescriptionFoto;
