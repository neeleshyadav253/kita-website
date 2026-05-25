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
  /** Explicit image URL (e.g. a local imported asset). Wins over imageSeed. */
  image?: string;
  imageAlt?: string;
  /** Falls back to a Lorem Flickr placeholder generated from this seed. */
  imageSeed?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  image,
  imageAlt,
  imageSeed,
}: Props) {
  const { t } = useLanguage();
  const resolvedImage = image ?? (imageSeed ? img.pageHero(imageSeed) : undefined);

  const breadcrumbs = (
    <nav
      className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-awo-grey-light"
      aria-label="Breadcrumb"
    >
      <Link to={ROUTES.home} className="inline-flex items-center gap-1 hover:text-awo-red">
        <Home className="h-3.5 w-3.5" />
        {t.nav.welcome}
      </Link>
      {crumbs.map((c) => (
        <span key={c.label} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          {c.to ? (
            <Link to={c.to} className="hover:text-awo-red">
              {c.label}
            </Link>
          ) : (
            <span className="text-awo-ink">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );

  const textBlock = (
    <>
      <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-awo-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-awo-red ring-1 ring-awo-red/15">
        {eyebrow}
      </span>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-awo-ink md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-awo-grey md:text-lg">
          {description}
        </p>
      ) : null}
    </>
  );

  return (
    <section className="relative isolate overflow-hidden bg-white pt-24 md:pt-28">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[88rem] 3xl:max-w-[100rem] px-6 pb-16 pt-10 text-awo-ink md:px-10 md:pb-24 md:pt-16">
        {resolvedImage ? (
          <>
            {breadcrumbs}
            <div className="mt-2 grid items-center gap-10 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
              <div>{textBlock}</div>
              <figure className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-awo-grey/10">
                <img
                  src={resolvedImage}
                  alt={imageAlt ?? title}
                  loading="eager"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>
          </>
        ) : (
          <>
            {breadcrumbs}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}
