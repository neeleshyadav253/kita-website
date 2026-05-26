import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

export function AwoValues() {
  const { t } = useLanguage();
  const copy = t.awoValues;

  return (
    <SectionWrapper id="awo-values" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span variants={itemVariants} className="section-eyebrow">
          <Compass className="h-3.5 w-3.5" />
          {copy.eyebrow}
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title mt-4">
          {copy.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
        >
          {copy.description}
        </motion.p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.items.map((item, i) => (
          <motion.article
            key={item.name}
            variants={itemVariants}
            className="flex gap-4 rounded-3xl bg-awo-cream p-6 ring-1 ring-awo-grey/10"
          >
            <span className="font-display text-3xl font-extrabold text-awo-red">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-lg font-bold text-awo-ink">{item.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-awo-grey-light">
                {item.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
