import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Leaf,
  MessageCircle,
  Salad,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

const ICONS = [Users, Salad, Leaf, MessageCircle, Sparkles, HeartHandshake];
const ACCENT = [
  'bg-awo-red/10 text-awo-red',
  'bg-awo-sun-soft text-awo-sun',
  'bg-awo-grass-soft text-awo-grass',
  'bg-awo-lavender-soft text-awo-lavender',
  'bg-awo-cream-dark text-awo-red-dark',
  'bg-awo-blush-soft text-awo-blush',
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="why-us" className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span variants={itemVariants} className="eyebrow-sun">
            <Sparkles className="h-3.5 w-3.5" />
            {t.whyUs.eyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {t.whyUs.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {t.whyUs.description}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {t.whyUs.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-awo-cream opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-2">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${ACCENT[i % ACCENT.length]} ring-1 ring-current/10`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span>
                  <span className="chip shrink-0 max-w-[55%] truncate justify-center">
                    {item.pill}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-awo-ink sm:mt-6 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
