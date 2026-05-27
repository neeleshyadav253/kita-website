import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
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
      className={`relative w-full pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 [:is(section,.wave-divider)+&]:pt-3 sm:[:is(section,.wave-divider)+&]:pt-4 md:[:is(section,.wave-divider)+&]:pt-5 lg:[:is(section,.wave-divider)+&]:pt-6 ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-7xl 2xl:max-w-[88rem] 3xl:max-w-[100rem] px-4 sm:px-6 md:px-10 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export const itemVariants: Variants = {
  hidden: {},
  show: {},
};
