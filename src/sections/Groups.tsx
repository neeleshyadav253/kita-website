import { motion } from 'framer-motion';
import { ArrowRight, Baby, CheckCircle2, Smile, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { GROUP_SLUGS, ROUTES } from '../routes';
import { img, SEEDS } from '../lib/images';

const GROUP_ICONS = [Baby, Smile];
const SEED_LIST = [SEEDS.groupKrippe, SEEDS.groupKindergarten];
const GROUP_IMAGES = [
  'https://media.istockphoto.com/id/670838952/photo/young-boy-holding-a-stag-beetle.jpg?s=1024x1024&w=is&k=20&c=OvrfUYMQMi7u6ROlwyiVxKgcp6Q7ZCw4wSLcKLj19aA=',
  'https://i.etsystatic.com/30289585/r/il/9b9cac/4067469116/il_1140xN.4067469116_6wsz.jpg',
];
const TONE = [
  'from-awo-red/60 via-awo-red/10',
  'from-awo-red-dark/60 via-awo-red-dark/10',
];

export function Groups({ linkPerCard = false }: { linkPerCard?: boolean }) {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="groups" className="bg-white">
      <div className="max-w-3xl">
        <motion.span variants={itemVariants} className="section-eyebrow">
          {t.groups.eyebrow}
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title mt-4">
          {t.groups.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
        >
          {t.groups.description}
        </motion.p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {t.groups.items.map((g, i) => {
          const Icon = GROUP_ICONS[i] ?? Smile;
          return (
            <motion.article
              key={g.name}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-awo-grey/10 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={GROUP_IMAGES[i] ?? img.card(SEED_LIST[i] ?? SEEDS.groupKrippe)}
                  alt={g.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t to-transparent ${TONE[i]}`} aria-hidden="true" />
                <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-awo-red shadow-card backdrop-blur">
                    <Icon className="h-4 w-4" />
                    {g.age}
                  </span>
                  <span className="rounded-full bg-awo-ink/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur">
                    {g.size}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-2xl font-extrabold text-white drop-shadow md:text-3xl">
                    {g.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-sm leading-relaxed text-awo-grey-light">
                  {g.text}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {g.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-awo-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-awo-red-dark" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-awo-grey/10 pt-5 text-sm">
                  <span className="inline-flex items-center gap-2 text-awo-ink">
                    <UsersRound className="h-4 w-4 text-awo-red" />
                    <span className="font-semibold">{g.ratio}</span>
                  </span>
                  <span className="text-awo-grey-light">·</span>
                  <span className="font-semibold text-awo-ink">{g.size}</span>
                </div>

                {linkPerCard ? (
                  <Link
                    to={ROUTES.groupDetail(GROUP_SLUGS[i] ?? 'krippe')}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-awo-red transition group-hover:gap-2.5"
                  >
                    {t.common.learnMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
