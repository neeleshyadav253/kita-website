import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { ROUTES } from '../routes';

export function CtaBanner() {
  const { t } = useLanguage();
  const phoneClean = t.footer.phone.replace(/\s+/g, '');

  return (
    <SectionWrapper id="cta" className="bg-white">
      <motion.div
        variants={itemVariants}
        className="relative isolate overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-card ring-1 ring-awo-grey/10 sm:p-12 md:p-16"
      >
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
          <div className="text-awo-ink">
            <span className="inline-flex items-center gap-2 rounded-full bg-awo-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-awo-red ring-1 ring-awo-red/15">
              <Sparkles className="h-3.5 w-3.5 text-awo-red" />
              {t.cta.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-awo-ink sm:text-4xl md:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-awo-grey md:text-lg">
              {t.cta.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={ROUTES.enrollment}
                className="btn-sun w-full justify-center sm:w-auto"
              >
                {t.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${phoneClean}`}
                className="btn-ghost w-full justify-center sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {t.cta.secondary}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <Stat number="48 h" label="Antwortzeit" tone="bg-awo-red-soft text-awo-red ring-awo-red/20" />
              <Stat number="0 €" label="Beiträge in Berlin" tone="bg-awo-red-soft text-awo-red-dark ring-awo-red-dark/20" />
              <Stat number="14 Tg" label="bis zum Erstgespräch" tone="bg-awo-red-soft text-awo-red ring-awo-red/20" />
              <Stat number="4,9 ★" label="Eltern-Bewertung" tone="bg-awo-red-soft text-awo-red-dark ring-awo-red-dark/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function Stat({
  number,
  label,
  tone,
}: {
  number: string;
  label: string;
  tone: string;
}) {
  return (
    <div className={`rounded-2xl px-4 py-5 ring-1 ${tone}`}>
      <div className="font-display text-2xl font-extrabold">{number}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-awo-grey-light">
        {label}
      </div>
    </div>
  );
}
