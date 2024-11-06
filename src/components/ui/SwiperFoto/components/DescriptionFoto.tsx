import { motion } from 'framer-motion';

type Props = { title: string; description: string };

function DescriptionFoto({ title, description }: Props) {
  return (
    <>
      <motion.div
        key={title}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="uppercase">{title ?? 'no title'}</h2>
        <p>{description ?? 'no description'}</p>
      </motion.div>
    </>
  );
}

export default DescriptionFoto;
