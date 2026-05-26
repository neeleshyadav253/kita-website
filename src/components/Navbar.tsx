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
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      const nextScrolled = y > 12;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      if (Math.abs(delta) > 6) {
        if (y > 120 && delta > 0) setHidden((prev) => (prev ? prev : true));
        else if (delta < 0) setHidden((prev) => (prev ? false : prev));
        lastY = y;
      }
    };

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setHidden(false);
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden && !open ? '-100%' : '0%' }}
      transition={{ type: 'spring', stiffness: 280, damping: 30, mass: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out ${
        scrolled
          ? 'bg-white shadow-card backdrop-blur-md border-b border-awo-grey/10'
          : 'bg-white backdrop-blur border-b border-awo-grey/5'
      }`}
    >
      <nav className="mx-auto flex h-14 w-full max-w-7xl 2xl:max-w-[88rem] 3xl:max-w-[100rem] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 md:h-20 md:px-10">
        <Link
          to={ROUTES.home}
          className="flex min-w-0 items-center text-awo-grey"
          aria-label={t.brand.name}
          onClick={() => setOpen(false)}
        >
          <Logo size="sm" className="sm:hidden" />
          <Logo
            size="sm"
            className="hidden min-w-0 sm:inline-flex"
            lines={[t.brand.name, t.brand.tagline]}
          />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === ROUTES.home}
                className={({ isActive }) =>
                  `relative rounded-full px-2.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-3 ${
                    isActive
                      ? 'text-awo-red'
                      : 'text-awo-grey hover:text-awo-red'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 -z-10 rounded-full bg-awo-cream"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{t.nav[item.key]}</span>
                  </>
                )}
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

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            style={{ overflow: 'hidden' }}
            className="border-t border-awo-grey/10 bg-white shadow-card lg:hidden"
          >
            <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-5 sm:px-6">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === ROUTES.home}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
