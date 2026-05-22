import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

export function Partners() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="partners" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span variants={itemVariants} className="section-eyebrow">
          <Award className="h-3.5 w-3.5" />
          {t.partners.eyebrow}
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title mt-4">
          {t.partners.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
        >
          {t.partners.description}
        </motion.p>
      </div>

      <motion.div
        variants={itemVariants}
        className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-awo-cream via-white to-awo-cream py-8 ring-1 ring-awo-grey/10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-awo-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-awo-cream to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 px-12">
          {[...t.partners.logos, ...t.partners.logos].map((logo, i) => (
            <LogoPlaceholder key={`${logo}-${i}`} label={logo} index={i} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

const PALETTES = [
  'from-awo-red to-awo-red-dark',
  'from-awo-red to-awo-red',
  'from-awo-red-dark to-emerald-700',
  'from-awo-red-dark to-pink-500',
  'from-awo-red to-awo-red-dark',
  'from-awo-red-light to-awo-red-dark',
  'from-awo-red to-rose-600',
  'from-sky-500 to-awo-red',
];

function LogoPlaceholder({ label, index }: { label: string; index: number }) {
  const palette = PALETTES[index % PALETTES.length];
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
  return (
    <div className="flex items-center gap-3 opacity-80 transition hover:opacity-100">
      <span
        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-extrabold text-white shadow-card ${palette}`}
      >
        {initials}
      </span>
      <span className="font-display whitespace-nowrap text-sm font-bold uppercase tracking-widest text-awo-ink">
        {label}
      </span>
    </div>
  );
}
