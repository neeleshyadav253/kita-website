import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from './Logo';
import { ROUTES } from '../routes';

type NavKey =
  | 'welcome'
  | 'about'
  | 'pedagogy'
  | 'groups'
  | 'team'
  | 'enrollment'
  | 'contact';

const NAV_ITEMS: { key: NavKey; to: string }[] = [
  { key: 'welcome', to: ROUTES.home },
  { key: 'about', to: ROUTES.about },
  { key: 'pedagogy', to: ROUTES.pedagogy },
  { key: 'groups', to: ROUTES.groups },
  { key: 'team', to: ROUTES.team },
  { key: 'enrollment', to: ROUTES.enrollment },
  { key: 'contact', to: ROUTES.contact },
];

export function Navbar() {
  const { t, toggle, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      setScrolled(y > 12);
      // only react to meaningful movement to avoid jitter
      if (Math.abs(delta) > 6) {
        // never hide near the top, never while menu open
        if (y > 120 && delta > 0) setHidden(true);
        else if (delta < 0) setHidden(false);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setHidden(false);
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-white/95 shadow-card backdrop-blur'
          : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 md:h-20 md:px-10">
        <Link
          to={ROUTES.home}
          className="flex min-w-0 items-center gap-2 text-awo-grey sm:gap-3"
          aria-label={t.brand.name}
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate text-sm font-extrabold tracking-tight md:text-base">
              {t.brand.name}
            </span>
            <span className="truncate text-[9px] font-semibold uppercase tracking-[0.2em] text-awo-red md:text-[10px]">
              {t.brand.tagline}
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === ROUTES.home}
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-2 text-sm font-medium transition xl:px-3 ${
                    isActive
                      ? 'bg-awo-cream text-awo-red'
                      : 'text-awo-grey hover:bg-awo-cream hover:text-awo-red'
                  }`
                }
              >
                {t.nav[item.key]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggle}
            className="hidden items-center gap-1.5 rounded-full border border-awo-grey/15 px-3 py-2 text-xs font-semibold text-awo-grey transition hover:border-awo-red hover:text-awo-red md:inline-flex"
            aria-label={`Switch language to ${lang === 'de' ? 'English' : 'Deutsch'}`}
          >
            <Globe className="h-4 w-4" />
            {t.nav.langToggle}
          </button>
          <Link
            to={ROUTES.enrollment}
            className="btn-primary hidden md:inline-flex md:px-5 md:py-2.5 md:text-xs lg:px-6 lg:py-3 lg:text-sm"
          >
            {t.nav.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-awo-grey/15 text-awo-grey lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-awo-grey/10 bg-white px-4 py-5 shadow-card sm:px-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === ROUTES.home}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? 'bg-awo-cream text-awo-red'
                          : 'text-awo-grey hover:bg-awo-cream hover:text-awo-red'
                      }`
                    }
                  >
                    {t.nav[item.key]}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => {
                  toggle();
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-awo-grey/15 px-4 py-2.5 text-sm font-semibold text-awo-grey"
              >
                <Globe className="h-4 w-4" />
                {t.nav.langToggle}
              </button>
              <Link
                to={ROUTES.enrollment}
                onClick={() => setOpen(false)}
                className="btn-primary justify-center"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
