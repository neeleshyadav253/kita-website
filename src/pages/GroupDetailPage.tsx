import { motion } from 'framer-motion';
import { ArrowLeft, CalendarRange, CheckCircle2, Sparkles } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { ROUTES, GROUP_SLUGS, type GroupSlug } from '../routes';
import { useLanguage } from '../i18n/LanguageContext';
import { SEEDS } from '../lib/images';

const SEED_MAP = {
  krippe: SEEDS.groupKrippe,
  kindergarten: SEEDS.groupKindergarten,
} as const;

export function GroupDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, p } = useLanguage();

  if (!slug || !(GROUP_SLUGS as readonly string[]).includes(slug)) {
    return <Navigate to={ROUTES.groups} replace />;
  }

  const groupSlug = slug as GroupSlug;
  const detail = p.groups[groupSlug];
  const summary = t.groups.items[GROUP_SLUGS.indexOf(groupSlug)];

  return (
    <>
      <PageHero
        eyebrow={summary.age}
        title={detail.hero}
        description={detail.intro}
        imageSeed={SEED_MAP[groupSlug]}
        crumbs={[
          { label: t.nav.groups, to: ROUTES.groups },
          { label: summary.name },
        ]}
      />

      <SectionWrapper className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:gap-16">
          <div>
            <motion.h2 variants={itemVariants} className="section-title">
              {detail.daily.title}
            </motion.h2>
            <ul className="mt-8 space-y-3">
              {detail.daily.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-2xl bg-awo-cream/60 px-5 py-4 text-base text-awo-ink ring-1 ring-awo-grey/5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-awo-grass" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.aside
            variants={itemVariants}
            className="self-start rounded-3xl bg-gradient-to-br from-awo-cream to-white p-8 shadow-card ring-1 ring-awo-grey/5"
          >
            <h3 className="font-display text-lg font-bold text-awo-ink">{summary.name}</h3>
            <dl className="mt-5 space-y-3 text-sm">
              <Row label={t.nav.groups} value={summary.age} />
              <Row label="Gruppengröße" value={summary.size} />
              <Row label="Betreuung" value={summary.ratio} />
            </dl>
            <ul className="mt-5 space-y-1.5 border-t border-awo-grey/10 pt-5">
              {summary.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs font-semibold text-awo-ink">
                  <Sparkles className="h-3 w-3 text-awo-sun" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to={ROUTES.enrollment} className="btn-primary mt-7 w-full">
              {t.nav.cta}
            </Link>
          </motion.aside>
        </div>
      </SectionWrapper>

      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="grid gap-6 md:grid-cols-3">
          {detail.highlights.map((h, i) => (
            <motion.article
              key={h.title}
              variants={itemVariants}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5 transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-card-hover ${
                  ['bg-awo-red', 'bg-awo-sun', 'bg-awo-grass'][i % 3]
                }`}
              >
                <Sparkles className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-awo-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                {h.text}
              </p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-awo-lavender-soft text-awo-lavender">
              <CalendarRange className="h-5 w-5" />
            </span>
            <h2 className="section-title">{detail.weekTitle}</h2>
          </motion.div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {detail.week.map((d) => (
              <motion.div
                key={d.day}
                variants={itemVariants}
                className="rounded-3xl bg-gradient-to-br from-awo-cream to-white p-5 shadow-soft ring-1 ring-awo-grey/5"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full bg-awo-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-awo-red">
                  {d.day}
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-awo-ink">
                  {d.activity}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to={ROUTES.groups} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            {t.nav.groups}
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-awo-grey/10 pb-3 last:border-b-0 last:pb-0">
      <dt className="text-xs font-bold uppercase tracking-widest text-awo-grey-light">
        {label}
      </dt>
      <dd className="text-sm font-bold text-awo-ink">{value}</dd>
    </div>
  );
}
