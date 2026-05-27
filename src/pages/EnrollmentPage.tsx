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
import { Enrollment } from '../sections/Enrollment';
import { useLanguage } from '../i18n/LanguageContext';
import pageHeroImage from '../assets/pagehero-enrollment.jpg';

const FEE_ICONS = [Euro, Utensils, Sparkles];

export function EnrollmentPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.enrollment.eyebrow}
        title={t.enrollment.title}
        description={p.enrollment.fullIntro}
        image={pageHeroImage}
      />

      <Enrollment />

      <SectionWrapper className="bg-awo-cream">
        <div className="max-w-3xl">
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
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-awo-red-soft text-awo-red-dark">
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

        <div className="mt-20 flex flex-col items-center text-center">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-awo-red-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-awo-red-dark"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Zeitplan
          </motion.span>
          <motion.h3
            variants={itemVariants}
            className="mt-4 font-display text-2xl font-extrabold tracking-tight text-awo-ink md:text-3xl lg:text-4xl"
          >
            {p.enrollment.deadlinesTitle}
          </motion.h3>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {p.enrollment.deadlines.map((d, i) => (
            <motion.li
              key={d.title}
              variants={itemVariants}
              className="relative flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/10 transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-awo-red-soft">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-awo-red px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                <CalendarDays className="h-3 w-3" />
                {d.date}
              </div>
              <div className="mt-4 text-lg font-bold text-awo-ink">{d.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                {d.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:gap-14">
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-awo-red-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-awo-red-dark"
            >
              <FileCheck2 className="h-3.5 w-3.5" />
              Checkliste
            </motion.span>
            <motion.h2 variants={itemVariants} className="section-title mt-4">
              {p.enrollment.documents.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
            >
              {p.enrollment.documents.intro}
            </motion.p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.enrollment.documents.items.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-3 rounded-2xl bg-awo-cream p-4 ring-1 ring-awo-grey/10"
              >
                <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-awo-red" />
                <span className="text-sm font-medium text-awo-ink">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

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
