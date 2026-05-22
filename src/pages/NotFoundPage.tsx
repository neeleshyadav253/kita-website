import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { useLanguage } from '../i18n/LanguageContext';

export function NotFoundPage() {
  const { p } = useLanguage();

  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-24 md:pt-32">
      <div className="absolute inset-0 -z-20 bg-mesh" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-dot-grid" aria-hidden="true" />
      <div className="blob -left-20 top-10 h-72 w-72 bg-awo-sun/30 animate-float-slow" aria-hidden="true" />
      <div className="blob right-0 bottom-10 h-72 w-72 bg-awo-blush/30 animate-float-slower" aria-hidden="true" />

      <div className="mx-auto max-w-xl text-center">
        <span className="font-display text-[7rem] font-extrabold leading-none gradient-text md:text-[12rem]">
          404
        </span>
        <h1 className="mt-4 font-display text-2xl font-extrabold text-awo-ink md:text-4xl">
          {p.notFound.title}
        </h1>
        <p className="mt-3 text-base text-awo-grey-light md:text-lg">
          {p.notFound.text}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to={ROUTES.home} className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            {p.notFound.cta}
          </Link>
          <Link to={ROUTES.contact} className="btn-ghost">
            <Sparkles className="h-4 w-4" />
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
