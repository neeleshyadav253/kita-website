import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

export function SectionWrapper({
  id,
  className = '',
  containerClassName = '',
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`relative w-full py-14 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
