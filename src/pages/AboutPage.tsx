import { motion } from "framer-motion";
import {
  Award,
  HandHeart,
  Heart,
  Salad,
  Scale,
  Sparkles,
  Star,
  TreePine,
  UsersRound,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionWrapper, itemVariants } from "../components/SectionWrapper";
import { WaveDivider } from "../components/WaveDivider";
import { About } from "../sections/About";
import { useLanguage } from "../i18n/LanguageContext";
import valueSolidarity from "../assets/value-1-solidarity.jpg";
import valueTolerance from "../assets/value-2-tolerance.webp";
import valueJustice from "../assets/value-3-justice.jpeg";
import valueFreedom from "../assets/value-4-freedom.jpg";
import aboutHeroImage from "../assets/about-heading.jpeg";

// Order matches `p.about.values.items` (Solidarity, Tolerance, Justice, Freedom).
const VALUE_IMAGES = [
  valueSolidarity,
  valueTolerance,
  valueJustice,
  valueFreedom,
];

const VALUE_ICONS = [UsersRound, Heart, Scale, Sparkles];
const TIMELINE_ICONS = [Sparkles, TreePine, Award, HandHeart, Salad, Star];
const VALUE_ACCENT = [
  "bg-awo-red text-white",
  "bg-awo-red text-white",
  "bg-awo-red-dark text-white",
  "bg-awo-red text-white",
];

export function AboutPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        image={aboutHeroImage}
        crumbs={[{ label: t.nav.about }]}
      />

      <SectionWrapper className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:gap-16">
          <div>
            <motion.h2 variants={itemVariants} className="section-title">
              {p.about.story.title}
            </motion.h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-awo-grey-light md:text-lg">
              {p.about.story.paragraphs.map((para, i) => (
                <motion.p key={i} variants={itemVariants}>
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.aside
            variants={itemVariants}
            className="self-start rounded-3xl bg-gradient-to-br from-awo-cream to-white p-7 shadow-card ring-1 ring-awo-grey/5"
          >
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-awo-grey-light">
              {p.about.factsTitle}
            </h3>
            <dl className="mt-5 space-y-4">
              {p.about.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-awo-grey/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-widest text-awo-grey-light">
                    {f.label}
                  </dt>
                  <dd className="font-display text-lg font-extrabold text-awo-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </SectionWrapper>

      <WaveDivider fromColor="#ffffff" toColor="#FFFFFF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span variants={itemVariants} className="section-eyebrow">
            {p.about.valuesEyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {p.about.values.title}
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.about.values.items.map((v, i) => {
            const Icon = VALUE_ICONS[i] ?? Heart;
            return (
              <motion.article
                key={v.title}
                variants={itemVariants}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={VALUE_IMAGES[i] ?? VALUE_IMAGES[0]}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  {/* <span
                    className={`absolute -bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-card ring-1 ring-white sm:h-14 sm:w-14 ${VALUE_ACCENT[i % VALUE_ACCENT.length]}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span> */}
                </div>
                <div className="flex flex-col p-5 pt-8 sm:p-7 sm:pt-10">
                  <h3 className="text-lg font-bold text-awo-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                    {v.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#FFFFFF" toColor="#ffffff" />

      <SectionWrapper className="bg-gradient-to-b from-white via-awo-cream/30 to-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <motion.span variants={itemVariants} className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Est. 1998
            </motion.span>
            <motion.h2 variants={itemVariants} className="section-title mt-4">
              {p.about.timelineTitle}
            </motion.h2>
          </div>

          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-6 w-0.5 rounded-full bg-gradient-to-b from-awo-red via-awo-red-dark to-awo-red md:left-1/2 md:-translate-x-1/2"
            />

            <ul className="space-y-10 md:space-y-16">
              {p.about.timeline.map((item, i) => {
                const Icon = TIMELINE_ICONS[i] ?? Sparkles;
                const isLast = i === p.about.timeline.length - 1;
                const sideRight = i % 2 === 1;
                return (
                  <motion.li
                    key={item.year}
                    variants={itemVariants}
                    className="relative md:grid md:grid-cols-2 md:gap-12"
                  >
                    <span
                      className={`absolute left-6 top-7 z-10 -translate-x-1/2 md:left-1/2 ${
                        isLast ? "" : ""
                      }`}
                    >
                      <span className="relative flex h-12 w-12 items-center justify-center">
                        {isLast && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-awo-red/40" />
                        )}
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-awo-red to-awo-red-dark text-white shadow-card-hover ring-4 ring-white">
                          <Icon className="h-5 w-5" />
                        </span>
                      </span>
                    </span>

                    <div
                      className={`pl-16 md:pl-0 ${
                        sideRight ? "md:col-start-2 md:pl-12" : "md:pr-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 22,
                        }}
                        className={`group relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-awo-grey/10 transition hover:shadow-card-hover sm:p-7 ${
                          sideRight ? "md:text-left" : "md:text-right"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute -top-10 h-28 w-28 rounded-full bg-awo-red/10 blur-2xl ${
                            sideRight ? "-left-10" : "-right-10"
                          }`}
                        />
                        <div
                          className={`flex items-center gap-3 ${
                            sideRight ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-awo-red-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-awo-red-dark ring-1 ring-awo-red/15">
                            {isLast
                              ? "Today"
                              : `Chapter ${String(i + 1).padStart(2, "0")}`}
                          </span>
                        </div>
                        <div
                          className={`mt-3 font-display text-5xl font-extrabold leading-none gradient-text-sun sm:text-6xl ${
                            sideRight ? "" : "md:text-right"
                          }`}
                        >
                          {item.year}
                        </div>
                        <h3 className="mt-3 font-display text-xl font-extrabold text-awo-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-awo-grey-light sm:text-base">
                          {item.text}
                        </p>
                      </motion.div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <About />

      <WaveDivider fromColor="#ffffff" toColor="#FFFFFF" />
      <SectionWrapper className="bg-awo-cream">
        <div className="mx-auto max-w-3xl">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.about.history.title}
          </motion.h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-awo-grey-light md:text-lg">
            {p.about.history.paragraphs.map((para, i) => (
              <motion.p key={i} variants={itemVariants}>
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <WaveDivider fromColor="#FFFFFF" toColor="#ffffff" />
    </>
  );
}
