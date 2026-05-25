import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

const STEP_ICONS = [MessageSquare, FileText, CheckCircle2];
const STEP_TONE = [
  'bg-awo-red text-white',
  'bg-awo-red text-white',
  'bg-awo-red-dark text-white',
];

type Props = { linkTo?: string; showForm?: boolean };

export function Enrollment({ linkTo, showForm = true }: Props) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    startDate: '',
    group: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      birthdate: '',
      startDate: '',
      group: '',
      message: '',
      consent: false,
    });
    window.setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <SectionWrapper id="enrollment" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span variants={itemVariants} className="section-eyebrow">
          {t.enrollment.eyebrow}
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title mt-4">
          {t.enrollment.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
        >
          {t.enrollment.description}
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 [&>*:last-child:nth-child(odd)]:col-span-2 md:[&>*:last-child:nth-child(odd)]:col-span-1">
        {t.enrollment.steps.map((step, i) => {
          const Icon = STEP_ICONS[i] ?? MessageSquare;
          return (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative rounded-3xl bg-awo-cream p-5 ring-1 ring-awo-grey/5 sm:p-7 md:p-8"
            >
              <span className="absolute -top-4 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-awo-ink shadow-card ring-2 ring-awo-grey/10">
                {i + 1}
              </span>
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-card-hover ${STEP_TONE[i % STEP_TONE.length]}`}
              >
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-awo-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                {step.text}
              </p>
            </motion.div>
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

      {showForm ? (
        <motion.div
          variants={itemVariants}
          className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-awo-red via-awo-red-dark to-awo-red p-[2px] shadow-card-hover"
        >
          <div className="rounded-[1.85rem] bg-white p-8 md:p-12">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-awo-red-soft text-awo-red">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-awo-ink md:text-3xl">
                  {t.enrollment.form.title}
                </h3>
                <p className="mt-1 text-sm text-awo-grey-light">
                  {t.enrollment.form.intro}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
              <Field
                label={t.enrollment.form.name}
                value={form.name}
                onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                required
              />
              <Field
                label={t.enrollment.form.email}
                type="email"
                value={form.email}
                onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                required
              />
              <Field
                label={t.enrollment.form.phone}
                type="tel"
                value={form.phone}
                onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
              />
              <Field
                label={t.enrollment.form.birthdate}
                type="date"
                value={form.birthdate}
                onChange={(v) => setForm((p) => ({ ...p, birthdate: v }))}
                required
              />
              <Field
                label={t.enrollment.form.startDate}
                type="month"
                value={form.startDate}
                onChange={(v) => setForm((p) => ({ ...p, startDate: v }))}
              />
              <label className="block">
                <span className="block text-sm font-semibold text-awo-ink">
                  {t.enrollment.form.group}
                </span>
                <select
                  value={form.group}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, group: e.target.value }))
                  }
                  className="input-pretty"
                >
                  <option value="">—</option>
                  <option value="krippe">{t.enrollment.form.groupKrippe}</option>
                  <option value="kindergarten">
                    {t.enrollment.form.groupKindergarten}
                  </option>
                </select>
              </label>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-awo-ink">
                  {t.enrollment.form.message}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={4}
                  required
                  className="input-pretty"
                />
              </div>

              <label className="md:col-span-2 flex items-start gap-3 text-xs leading-relaxed text-awo-grey-light">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, consent: e.target.checked }))
                  }
                  required
                  className="mt-0.5 h-4 w-4 rounded border-awo-grey/30 text-awo-red focus:ring-awo-red/30"
                />
                <span>{t.enrollment.form.consent}</span>
              </label>

              <div className="md:col-span-2 flex flex-col-reverse items-start gap-4 md:flex-row md:items-center md:justify-between">
                {submitted ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    {t.enrollment.form.success}
                  </span>
                ) : (
                  <span className="text-xs text-awo-grey-light">
                    {t.enrollment.form.requiredNote}
                  </span>
                )}
                <button type="submit" className="btn-primary">
                  {t.enrollment.form.send}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      ) : null}
    </SectionWrapper>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
};

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  className = '',
}: FieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-awo-ink">
        {label}
        {required ? <span className="ml-0.5 text-awo-red">*</span> : null}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="input-pretty"
      />
    </label>
  );
}
