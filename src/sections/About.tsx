import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { BUILDING } from '../lib/images';
import aboutHeadingImage from '../assets/about-heading.jpeg';

const ICONS = [Clock, Users, MapPin];
const ACCENT = [
  'bg-awo-red/10 text-awo-red',
  'bg-awo-red-soft text-awo-red-dark',
  'bg-awo-red-soft text-awo-red',
];

export function About({
  linkTo,
  className = '',
  withHeadingImage = false,
}: {
  linkTo?: string;
  className?: string;
  withHeadingImage?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className={`bg-white ${className}`}>
      {withHeadingImage ? (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
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
          <motion.figure
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-awo-grey/10"
          >
            <img
              src={aboutHeadingImage}
              alt={t.about.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.figure>
        </div>
      ) : (
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
      )}

      <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
        <motion.figure
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-awo-grey/10"
        >
          <img
            src={BUILDING.front}
            alt="AWO Kita Sonnenschein – Vorderansicht"
            className="h-60 w-full object-cover sm:h-72 md:h-80"
            loading="lazy"
          />
          <figcaption className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-awo-ink shadow-card backdrop-blur">
            Unser Haus · Eingang
          </figcaption>
        </motion.figure>
        <motion.figure
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-awo-grey/10"
        >
          <img
            src={BUILDING.corner}
            alt="AWO Kita Sonnenschein – Außenansicht mit Garten"
            className="h-60 w-full object-cover sm:h-72 md:h-80"
            loading="lazy"
          />
          <figcaption className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-awo-ink shadow-card backdrop-blur">
            Eingang &amp; Garten
          </figcaption>
        </motion.figure>
        <motion.figure
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-awo-grey/10"
        >
          <img
            src={BUILDING.mural}
            alt="Wandkunst an der Kita-Fassade – verspielte Figuren"
            className="h-60 w-full object-cover sm:h-72 md:h-80"
            loading="lazy"
          />
          <figcaption className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-awo-ink shadow-card backdrop-blur">
            Wandkunst · seit 1978
          </figcaption>
        </motion.figure>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1">
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
