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
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-awo-red via-awo-red-dark to-awo-red p-8 text-white shadow-card-hover sm:p-10 md:p-14"
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/25 backdrop-blur">
              <Briefcase className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              {copy.description}
            </p>

            <ul className="mt-7 space-y-3 text-sm font-medium">
              {copy.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={copy.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-awo-red-dark shadow-card transition hover:bg-awo-cream hover:shadow-card-hover"
              >
                {copy.primary}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:kontakt@awo-kita-sonnenschein.de"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                {copy.secondary}
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/20 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-awo-red">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    AWO Thüringen
                  </div>
                  <div className="text-2xl font-extrabold">13.000+</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
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
