import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

const ICONS = [Clock, Users, MapPin];
const ACCENT = [
  'bg-awo-red/10 text-awo-red',
  'bg-awo-grass-soft text-awo-grass',
  'bg-awo-sun-soft text-awo-sun',
];

export function About({ linkTo }: { linkTo?: string }) {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span variants={itemVariants} className="section-eyebrow">
          {t.about.eyebrow}
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title mt-4">
          {t.about.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
        >
          {t.about.description}
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1">
        {t.about.cards.map((card, i) => {
          const Icon = ICONS[i] ?? Clock;
          return (
            <motion.article
              key={card.title}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-awo-cream opacity-0 transition group-hover:opacity-100" />
              <span
                className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-current/10 ${ACCENT[i % ACCENT.length]}`}
              >
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 text-xl font-bold text-awo-ink">
                {card.title}
              </h3>
              <p className="relative mt-2 whitespace-pre-line text-sm font-semibold text-awo-ink">
                {card.text}
              </p>
              <p className="relative mt-3 text-sm text-awo-grey-light">{card.sub}</p>
            </motion.article>
          );
        })}
      </div>
      {linkTo ? (
        <motion.div variants={itemVariants} className="mt-10 text-center">
          <Link to={linkTo} className="btn-ghost">
            {t.common.learnMore}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      ) : null}
    </SectionWrapper>
  );
}
