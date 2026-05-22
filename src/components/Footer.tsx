import { useState, type FormEvent } from 'react';
import { CheckCircle2, Heart, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from './Logo';
import { ROUTES } from '../routes';

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.27-1.5 1.5-1.5H17V4.4C16.6 4.3 15.7 4.2 14.7 4.2 12.5 4.2 11 5.6 11 8.1V10.5H8.5v3H11V21h2.5z" />
    </svg>
  );
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.13c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.75 1.86-2.75 3.78V24h-5V8z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    window.setTimeout(() => setSubscribed(false), 6000);
  };

  return (
    <footer className="relative overflow-hidden bg-awo-ink text-white/85">
      <div className="absolute inset-0 -z-10 opacity-25 bg-grain mix-blend-overlay" aria-hidden="true" />
      <div className="absolute -left-32 -top-32 -z-10 h-72 w-72 rounded-full bg-awo-red/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 -bottom-24 -z-10 h-72 w-72 rounded-full bg-awo-lavender/15 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-12 md:gap-10 md:px-10 md:py-20">
        <div className="md:col-span-4">
          <Link
            to={ROUTES.home}
            className="flex items-center gap-3"
            aria-label={t.brand.name}
          >
            <Logo className="h-11 w-11 sm:h-12 sm:w-12" variant="color" />
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold text-white sm:text-lg">
                {t.brand.name}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-awo-sun-light">
                {t.brand.tagline}
              </div>
            </div>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
            {t.footer.about}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.footer.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/85 ring-1 ring-white/15"
              >
                <ShieldCheck className="h-3 w-3 text-awo-sun-light" />
                {b}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-awo-red hover:ring-awo-red"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-awo-blush hover:ring-awo-blush"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-awo-red-light hover:ring-awo-red-light"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            {t.footer.sitemap}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to={ROUTES.about} className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link to={ROUTES.pedagogy} className="hover:text-white">{t.nav.pedagogy}</Link></li>
            <li><Link to={ROUTES.groups} className="hover:text-white">{t.nav.groups}</Link></li>
            <li><Link to={ROUTES.team} className="hover:text-white">{t.nav.team}</Link></li>
            <li><Link to={ROUTES.enrollment} className="hover:text-white">{t.nav.enrollment}</Link></li>
            <li><Link to={ROUTES.news} className="hover:text-white">{t.news.eyebrow}</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-awo-sun-light" />
              <Link to={ROUTES.contact} className="hover:text-white">
                {t.footer.address}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-awo-sun-light" />
              <a href={`tel:${t.footer.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                {t.footer.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-awo-sun-light" />
              <a href={`mailto:${t.footer.email}`} className="break-all hover:text-white">
                {t.footer.email}
              </a>
            </li>
          </ul>

          <h4 className="mt-7 font-display text-sm font-bold uppercase tracking-widest text-white">
            {t.footer.links}
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">{t.footer.imprint}</a></li>
            <li><a href="#" className="hover:text-white">{t.footer.privacy}</a></li>
            <li><a href="#" className="hover:text-white">{t.footer.accessibility}</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-white">
            <Sparkles className="h-3.5 w-3.5 text-awo-sun-light" />
            {t.footer.newsletter.title}
          </h4>
          <p className="mt-3 text-sm text-white/75">{t.footer.newsletter.text}</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.newsletter.placeholder}
              className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 ring-1 ring-white/15 backdrop-blur transition focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-awo-sun-light"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-awo-sun px-4 py-2.5 text-sm font-extrabold text-awo-ink transition hover:bg-awo-sun-light"
            >
              {t.footer.newsletter.cta}
              <Heart className="h-3.5 w-3.5" />
            </button>
            {subscribed ? (
              <span className="inline-flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {t.footer.newsletter.success}
              </span>
            ) : null}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:px-6 md:flex-row md:px-10">
          <span className="text-center md:text-left">
            © {year} {t.brand.name}. {t.footer.rights}
          </span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 fill-current text-awo-blush" /> · AWO Berlin
          </span>
        </div>
      </div>
    </footer>
  );
}
