import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Train,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { useLanguage } from '../i18n/LanguageContext';
import pageHeroImage from '../assets/pagehero-contact.jpg';

export function ContactPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={p.contact.eyebrow}
        title={p.contact.title}
        description={p.contact.intro}
        image={pageHeroImage}
        crumbs={[{ label: t.nav.contact }]}
      />

      <SectionWrapper className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr] lg:gap-12">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-gradient-to-br from-awo-cream to-white p-7 shadow-card ring-1 ring-awo-grey/5 md:p-9">
              <h2 className="font-display text-2xl font-extrabold text-awo-ink md:text-3xl">
                {p.contact.visit.title}
              </h2>
              <div className="mt-6 space-y-5 text-sm md:text-base">
                <InfoRow icon={MapPin} label={p.contact.labels.address} tone="bg-awo-red/10 text-awo-red">
                  <span className="whitespace-pre-line">{p.contact.visit.address}</span>
                </InfoRow>
                <InfoRow icon={Phone} label={p.contact.labels.phone} tone="bg-awo-red-soft text-awo-red-dark">
                  <a href={`tel:${t.footer.phone.replace(/\s+/g, '')}`} className="hover:text-awo-red">
                    {t.footer.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={Mail} label={p.contact.labels.email} tone="bg-awo-red-soft text-awo-red">
                  <a href={`mailto:${t.footer.email}`} className="break-all hover:text-awo-red">
                    {t.footer.email}
                  </a>
                </InfoRow>
                <InfoRow icon={Train} label={p.contact.labels.directions} tone="bg-awo-red-soft text-awo-red-dark">
                  <span className="whitespace-pre-line">{p.contact.visit.transport}</span>
                </InfoRow>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5 md:p-9">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-awo-red/10 text-awo-red">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-awo-ink">
                  {p.contact.hoursTitle}
                </h3>
              </div>
              <dl className="mt-5 divide-y divide-awo-grey/10">
                {p.contact.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"
                  >
                    <dt className="font-semibold text-awo-ink">{h.day}</dt>
                    <dd className="text-awo-grey-light">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-awo-grey/5">
              <iframe
                title={p.contact.mapAlt}
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.396%2C52.524%2C13.412%2C52.532&amp;layer=mapnik&amp;marker=52.528%2C13.404"
                className="h-72 w-full sm:h-80 md:h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-awo-red shadow-card backdrop-blur">
                <MapPin className="h-3.5 w-3.5" />
                Sonnenstraße 12, Berlin-Mitte
              </span>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}

function ContactForm() {
  const { t, p } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    window.setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5 md:p-9">
      <h3 className="font-display text-xl font-extrabold text-awo-ink">
        {p.contact.formTitle}
      </h3>
      <p className="mt-1 text-sm text-awo-grey-light">{p.contact.formIntro}</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="block text-sm font-semibold text-awo-ink">{t.enrollment.form.name}</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="input-pretty"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-awo-ink">{t.enrollment.form.email}</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="input-pretty"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-awo-ink">{t.enrollment.form.message}</span>
          <textarea
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            className="input-pretty"
          />
        </label>
        <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          {submitted ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <CheckCircle2 className="h-4 w-4" />
              {t.enrollment.form.success}
            </span>
          ) : (
            <span className="text-xs text-awo-grey-light">Antwort innerhalb von 48 h</span>
          )}
          <button type="submit" className="btn-primary">
            {t.enrollment.form.send}
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

type RowProps = {
  icon: typeof MapPin;
  label: string;
  tone: string;
  children: React.ReactNode;
};

function InfoRow({ icon: Icon, label, tone, children }: RowProps) {
  return (
    <div className="flex gap-4">
      <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ring-current/10 ${tone}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase tracking-widest text-awo-grey-light">
          {label}
        </div>
        <div className="mt-1 text-awo-ink">{children}</div>
      </div>
    </div>
  );
}
