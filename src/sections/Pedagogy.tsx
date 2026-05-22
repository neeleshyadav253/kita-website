import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Leaf, MessageCircle, Vote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';

const ICONS = [BookOpen, Leaf, MessageCircle, Vote];
const ACCENT = [
  'bg-gradient-to-br from-awo-red to-awo-red-dark text-white',
  'bg-gradient-to-br from-awo-grass to-emerald-700 text-white',
  'bg-gradient-to-br from-awo-lavender to-violet-700 text-white',
  'bg-gradient-to-br from-awo-sun to-awo-blush text-white',
];

export function Pedagogy({ linkTo, withWaves = true }: { linkTo?: string; withWaves?: boolean }) {
  const { t } = useLanguage();

  return (
    <>
      {withWaves ? <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" /> : null}
      <SectionWrapper id="pedagogy" className="bg-awo-cream">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span variants={itemVariants} className="section-eyebrow">
            {t.pedagogy.eyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {t.pedagogy.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {t.pedagogy.description}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {t.pedagogy.cards.map((card, i) => {
            const Icon = ICONS[i] ?? BookOpen;
            return (
              <motion.article
                key={card.title}
                variants={itemVariants}
                className="group flex flex-col rounded-3xl bg-white p-5 shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:p-7"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-card-hover ${ACCENT[i % ACCENT.length]}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-awo-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                  {card.text}
                </p>
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
      {withWaves ? <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" /> : null}
    </>
  );
}
