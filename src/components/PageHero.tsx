import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { useLanguage } from '../i18n/LanguageContext';
import { img } from '../lib/images';

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  imageSeed?: string;
};

export function PageHero({ eyebrow, title, description, crumbs = [], imageSeed }: Props) {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 -z-20 bg-mesh-dark" />
      <div className="absolute inset-0 -z-10 opacity-25 bg-grain mix-blend-overlay" aria-hidden="true" />
      {imageSeed ? (
        <img
          src={img.pageHero(imageSeed)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-overlay"
          loading="eager"
        />
      ) : null}
      <div className="blob -left-20 top-20 h-64 w-64 bg-awo-sun/30 animate-float-slow" aria-hidden="true" />
      <div className="blob right-0 bottom-0 h-72 w-72 bg-awo-blush/20 animate-float-slower" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 text-white md:px-10 md:pb-28 md:pt-16">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/75"
          aria-label="Breadcrumb"
        >
          <Link to={ROUTES.home} className="inline-flex items-center gap-1 hover:text-white">
            <Home className="h-3.5 w-3.5" />
            {t.nav.welcome}
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              {c.to ? (
                <Link to={c.to} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur ring-1 ring-white/20"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
      <div className="-mb-px leading-[0]" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-10 w-full md:h-14">
          <path
            d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
