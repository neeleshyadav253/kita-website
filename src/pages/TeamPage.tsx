import { motion } from 'framer-motion';
import { CheckCircle2, Quote } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { Team } from '../sections/Team';
import { useLanguage } from '../i18n/LanguageContext';
import { img, SEEDS } from '../lib/images';

const BIO_AVATARS = [12, 5, 26, 60];

export function TeamPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.team.eyebrow}
        title={t.team.title}
        description={p.team.intro}
        imageSeed={SEEDS.teamHero}
        crumbs={[{ label: t.nav.team }]}
      />

      <SectionWrapper className="bg-white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.team.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="rounded-3xl bg-gradient-to-br from-awo-cream to-white p-7 shadow-card ring-1 ring-awo-grey/5 text-center"
            >
              <div className="font-display text-4xl font-extrabold gradient-text">
                {s.number}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-awo-grey-light">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <Team withWaves={false} />

      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 variants={itemVariants} className="section-title">
            Stimmen aus dem Team
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {p.team.bios.map((bio, i) => (
            <motion.article
              key={bio.name}
              variants={itemVariants}
              className="relative flex gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-awo-grey/5 transition hover:-translate-y-1 hover:shadow-card-hover md:p-8"
            >
              <img
                src={img.avatar(BIO_AVATARS[i] ?? i + 1, 180)}
                alt={bio.name}
                className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-4 ring-awo-cream"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <Quote className="h-5 w-5 text-awo-cream-dark" />
                <blockquote className="mt-1 font-display text-lg leading-snug text-awo-ink">
                  „{bio.quote}"
                </blockquote>
                <div className="mt-4 text-sm font-bold text-awo-ink">{bio.name}</div>
                <p className="mt-1 text-xs leading-relaxed text-awo-grey-light">
                  {bio.about}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.team.qualifications.title}
          </motion.h2>
          <ul className="mt-8 space-y-3">
            {p.team.qualifications.items.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-base text-awo-ink shadow-soft ring-1 ring-awo-grey/5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-awo-grass" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />
    </>
  );
}
