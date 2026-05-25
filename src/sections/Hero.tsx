import {
  ArrowRight,
  Heart,
  Leaf,
  MessageCircle,
  Salad,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { ROUTES } from "../routes";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white pt-20 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl 2xl:max-w-[88rem] 3xl:max-w-[100rem] gap-10 px-4 pb-8 pt-4 sm:gap-12 sm:px-6 sm:pb-10 sm:pt-6 md:grid-cols-[1.05fr,1fr] md:gap-16 md:px-10 md:pb-14 md:pt-10">
        <div className="flex flex-col justify-center text-awo-ink">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-awo-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-awo-red ring-1 ring-awo-red/15">
            <Sparkles className="h-3.5 w-3.5 text-awo-red" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-awo-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {t.hero.title}{" "}
            <span className="relative inline-block">
              <span className="gradient-text-sun">{t.hero.titleAccent}</span>
              <svg
                className="absolute -bottom-1.5 left-0 h-3 w-full text-awo-red"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,6 Q50,0 100,4 T200,4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium text-awo-grey sm:text-lg md:text-xl">
            {t.hero.subtitle}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-awo-grey-light sm:text-base">
            {t.hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge icon={Salad} label={t.hero.badges.bio} tone="sun" />
            <Badge icon={Leaf} label={t.hero.badges.wald} tone="grass" />
            <Badge
              icon={MessageCircle}
              label={t.hero.badges.sprache}
              tone="lavender"
            />
            <Badge icon={Heart} label={t.hero.badges.inklusion} tone="blush" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to={ROUTES.enrollment}
              className="btn-sun w-full justify-center sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={ROUTES.contact}
              className="btn-ghost w-full justify-center sm:w-auto"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-awo-grey-light">
            <Shield className="h-4 w-4 text-awo-red-dark" />
            <span>{t.hero.trustLine}</span>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-awo-grey/15 pt-6 sm:gap-6">
            <Stat number="25+" label={t.hero.stat1} />
            <Stat number="60+" label={t.hero.stat2} />
            <Stat number="12" label={t.hero.stat3} />
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-card-hover ring-1 ring-awo-grey/10">
            <img
              src="https://plus.unsplash.com/premium_photo-1661376659383-b7b7909498b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Kinder spielen in der Kita"
              className="h-[560px] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-awo-ink/30 via-transparent to-transparent" />

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-awo-red shadow-card backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-awo-red-dark" />
              {t.brand.tagline}
            </div>

            <div className="absolute -left-5 top-32 hidden rounded-2xl bg-white p-3 pr-4 shadow-card-hover ring-1 ring-awo-grey/10 md:flex md:items-center md:gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-awo-red-dark/15 text-awo-red-dark">
                <Salad className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-widest text-awo-grey-light">
                  Mittagessen
                </div>
                <div className="text-sm font-bold text-awo-ink">
                  90 % Bio · frisch
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white p-3 pr-4 shadow-card-hover ring-1 ring-awo-grey/10 md:flex md:items-center md:gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-awo-red/15 text-awo-red">
                <Star className="h-4 w-4 fill-current" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-widest text-awo-grey-light">
                  Eltern-Bewertung
                </div>
                <div className="text-sm font-bold text-awo-ink">
                  4,9 / 5 · 56 Stimmen
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3 rounded-2xl bg-white/95 p-4 pr-5 shadow-card backdrop-blur ring-1 ring-awo-grey/10">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-awo-red/15 text-awo-red">
                <Heart className="h-5 w-5 fill-current" />
              </span>
              <div className="min-w-0">
                <div className="font-hand text-lg leading-tight text-awo-ink">
                  {t.hero.microQuote}
                </div>
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-awo-grey-light">
                  — {t.hero.microQuoteAuthor}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type BadgeProps = {
  icon: typeof Heart;
  label: string;
  tone: "sun" | "grass" | "lavender" | "blush";
};

const TONE: Record<BadgeProps["tone"], { bg: string; ring: string; icon: string; text: string }> = {
  sun: {
    bg: "bg-awo-red-soft",
    ring: "ring-awo-red/20",
    icon: "text-awo-red",
    text: "text-awo-red",
  },
  grass: {
    bg: "bg-awo-red-soft",
    ring: "ring-awo-red-dark/20",
    icon: "text-awo-red-dark",
    text: "text-awo-red-dark",
  },
  lavender: {
    bg: "bg-awo-red-soft",
    ring: "ring-awo-red-dark/20",
    icon: "text-awo-red-dark",
    text: "text-awo-red-dark",
  },
  blush: {
    bg: "bg-awo-red-soft",
    ring: "ring-awo-red/20",
    icon: "text-awo-red",
    text: "text-awo-red",
  },
};

function Badge({ icon: Icon, label, tone }: BadgeProps) {
  const c = TONE[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${c.bg} px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest ${c.text} ring-1 ${c.ring}`}
    >
      <Icon className={`h-3.5 w-3.5 ${c.icon}`} />
      {label}
    </span>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-extrabold text-awo-ink sm:text-3xl">
        {number}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-awo-grey-light sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}
