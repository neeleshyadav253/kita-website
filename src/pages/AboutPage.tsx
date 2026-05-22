import { motion } from 'framer-motion';
import { Heart, Scale, Sparkles, UsersRound } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { About } from '../sections/About';
import { useLanguage } from '../i18n/LanguageContext';
import { SEEDS } from '../lib/images';

const VALUE_ICONS = [UsersRound, Heart, Scale, Sparkles];
const VALUE_ACCENT = [
  'bg-awo-red text-white',
  'bg-awo-blush text-white',
  'bg-awo-grass text-white',
  'bg-awo-sun text-awo-ink',
];

export function AboutPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        imageSeed={SEEDS.aboutHero}
        crumbs={[{ label: t.nav.about }]}
      />

      <SectionWrapper className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:gap-16">
          <div>
            <motion.h2 variants={itemVariants} className="section-title">
              {p.about.story.title}
            </motion.h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-awo-grey-light md:text-lg">
              {p.about.story.paragraphs.map((para, i) => (
                <motion.p key={i} variants={itemVariants}>
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.aside
            variants={itemVariants}
            className="self-start rounded-3xl bg-gradient-to-br from-awo-cream to-white p-7 shadow-card ring-1 ring-awo-grey/5"
          >
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-awo-grey-light">
              Kita in Zahlen
            </h3>
            <dl className="mt-5 space-y-4">
              {p.about.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-awo-grey/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-widest text-awo-grey-light">
                    {f.label}
                  </dt>
                  <dd className="font-display text-lg font-extrabold text-awo-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </SectionWrapper>

      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span variants={itemVariants} className="section-eyebrow">
            AWO
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {p.about.values.title}
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.about.values.items.map((v, i) => {
            const Icon = VALUE_ICONS[i] ?? Heart;
            return (
              <motion.article
                key={v.title}
                variants={itemVariants}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5 transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-card-hover ${VALUE_ACCENT[i % VALUE_ACCENT.length]}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-awo-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                  {v.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.h2 variants={itemVariants} className="section-title text-center">
            {p.about.timelineTitle}
          </motion.h2>
          <div className="relative mt-12 pl-10 md:pl-0">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-awo-red via-awo-sun to-awo-blush md:left-1/2 md:-ml-px" />
            <ul className="space-y-6 md:space-y-10">
              {p.about.timeline.map((item, i) => (
                <motion.li
                  key={item.year}
                  variants={itemVariants}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <span className="absolute left-3 top-3 -ml-[7px] h-4 w-4 rounded-full bg-awo-red ring-4 ring-awo-cream md:left-1/2 md:-ml-2" />
                  <div
                    className={
                      i % 2 === 0
                        ? 'md:pr-10 md:text-right'
                        : 'md:col-start-2 md:pl-10'
                    }
                  >
                    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-awo-grey/10">
                      <span className="font-display text-3xl font-extrabold gradient-text">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-awo-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <About />

      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.about.history.title}
          </motion.h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-awo-grey-light md:text-lg">
            {p.about.history.paragraphs.map((para, i) => (
              <motion.p key={i} variants={itemVariants}>
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />
    </>
  );
}
