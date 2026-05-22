import { motion } from 'framer-motion';
import {
  BookOpen,
  HeartHandshake,
  Music,
  Quote,
  Salad,
  Sprout,
  Vote,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { Pedagogy } from '../sections/Pedagogy';
import { DailySchedule } from '../sections/DailySchedule';
import { useLanguage } from '../i18n/LanguageContext';
import { SEEDS } from '../lib/images';

const PILLAR_ICONS = [HeartHandshake, BookOpen, Sprout, Music, Vote, Salad];
const PILLAR_TONE = [
  'bg-awo-red/10 text-awo-red',
  'bg-awo-red-soft text-awo-red-dark',
  'bg-awo-red-soft text-awo-red-dark',
  'bg-awo-red-soft text-awo-red',
  'bg-awo-cream-dark text-awo-red-dark',
  'bg-awo-red-soft text-awo-red',
];

export function PedagogyPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pedagogy.eyebrow}
        title={t.pedagogy.title}
        description={p.pedagogy.intro}
        imageSeed={SEEDS.pedagogyHero}
        crumbs={[{ label: t.nav.pedagogy }]}
      />

      <Pedagogy withWaves={false} />

      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.pedagogy.pillarsTitle}
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.pedagogy.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? HeartHandshake;
            return (
              <motion.article
                key={pillar.title}
                variants={itemVariants}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5 transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-current/10 ${PILLAR_TONE[i % PILLAR_TONE.length]}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-awo-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                  {pillar.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      <DailySchedule withWaves />

      <SectionWrapper className="bg-white">
        <motion.figure
          variants={itemVariants}
          className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-awo-red via-awo-red-dark to-awo-red p-10 text-white shadow-card-hover md:p-14"
        >
          <Quote className="h-9 w-9 text-white/70" />
          <blockquote className="mt-4 font-display text-3xl font-extrabold leading-snug md:text-4xl">
            „{p.pedagogy.quote.text}"
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold uppercase tracking-widest text-white/85">
            — {p.pedagogy.quote.author}
          </figcaption>
        </motion.figure>
      </SectionWrapper>
    </>
  );
}
