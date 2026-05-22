import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  ChevronDown,
  Euro,
  FileCheck2,
  Sparkles,
  Utensils,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { Enrollment } from '../sections/Enrollment';
import { useLanguage } from '../i18n/LanguageContext';
import { SEEDS } from '../lib/images';

const FEE_ICONS = [Euro, Utensils, Sparkles];

export function EnrollmentPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.enrollment.eyebrow}
        title={t.enrollment.title}
        description={p.enrollment.fullIntro}
        imageSeed={SEEDS.enrollHero}
        crumbs={[{ label: t.nav.enrollment }]}
      />

      <Enrollment />

      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.enrollment.feesTitle}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {p.enrollment.feesIntro}
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {p.enrollment.fees.map((fee, i) => {
            const Icon = FEE_ICONS[i] ?? Euro;
            return (
              <motion.article
                key={fee.label}
                variants={itemVariants}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-awo-grass-soft text-awo-grass">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 text-xs font-bold uppercase tracking-widest text-awo-grey-light">
                  {fee.label}
                </div>
                <div className="mt-2 font-display text-3xl font-extrabold text-awo-ink">
                  {fee.price}
                </div>
                <div className="mt-2 text-sm text-awo-grey-light">{fee.sub}</div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-12 max-w-3xl"
        >
          <h3 className="font-display text-xl font-bold text-awo-ink">
            {p.enrollment.deadlinesTitle}
          </h3>
          <ol className="mt-5 grid gap-3 md:grid-cols-3">
            {p.enrollment.deadlines.map((d) => (
              <li
                key={d.title}
                className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-awo-grey/5"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full bg-awo-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-awo-red">
                  <CalendarDays className="h-3 w-3" />
                  {d.date}
                </div>
                <div className="mt-2 text-base font-bold text-awo-ink">
                  {d.title}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-awo-grey-light">
                  {d.text}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.enrollment.documents.title}
          </motion.h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.enrollment.documents.items.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-3 rounded-2xl bg-awo-cream p-4 ring-1 ring-awo-grey/5"
              >
                <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-awo-red" />
                <span className="text-sm font-medium text-awo-ink">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl">
          <motion.h2 variants={itemVariants} className="section-title">
            FAQ
          </motion.h2>
          <div className="mt-8 space-y-3">
            {p.enrollment.faq.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <FaqItem question={item.question} answer={item.answer} defaultOpen={i === 0} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />
    </>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-2xl bg-white ring-1 transition ${
        open ? 'ring-awo-red/20 shadow-card-hover' : 'ring-awo-grey/10 shadow-card'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-awo-ink">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-awo-red transition ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? (
        <p className="px-5 pb-5 text-sm leading-relaxed text-awo-grey-light">
          {answer}
        </p>
      ) : null}
    </div>
  );
}
