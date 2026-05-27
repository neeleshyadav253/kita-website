import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, CheckCircle2, GraduationCap, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

export function Careers() {
  const { t } = useLanguage();
  const copy = t.careers;

  return (
    <SectionWrapper id="careers" className="bg-white">
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-[2.5rem] bg-awo-red-soft p-8 text-awo-ink shadow-card sm:p-10 md:p-14"
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-awo-red ring-1 ring-awo-red/15 shadow-soft">
              <Briefcase className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-awo-ink md:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-awo-ink/75 md:text-lg">
              {copy.description}
            </p>

            <ul className="mt-7 space-y-3 text-sm font-medium text-awo-ink/85">
              {copy.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-awo-red" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={copy.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-awo-red px-6 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-awo-red-dark hover:shadow-card-hover"
              >
                {copy.primary}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:kontakt@awo-kita-sonnenschein.de"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-awo-red/30 bg-white px-6 py-3 text-sm font-extrabold text-awo-red transition hover:border-awo-red hover:bg-awo-red-soft"
              >
                <Mail className="h-4 w-4" />
                {copy.secondary}
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-awo-red/10 shadow-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-awo-red text-white">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-awo-grey-light">
                    AWO Thüringen
                  </div>
                  <div className="text-2xl font-extrabold text-awo-ink">13.000+</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-awo-ink/75">
                Mitarbeiter:innen in Pflege, Kindertagesstätten, Beratungsstellen
                und sozialen Diensten — in ganz Thüringen.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
