import { motion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  Music,
  Quote,
  Salad,
  Sprout,
  Vote,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionWrapper, itemVariants } from "../components/SectionWrapper";
import { WaveDivider } from "../components/WaveDivider";
import { Pedagogy } from "../sections/Pedagogy";
import { DailySchedule } from "../sections/DailySchedule";
import { useLanguage } from "../i18n/LanguageContext";
import { SEEDS } from "../lib/images";
import pillarBonding from "../assets/pillar-1-bonding.jpg";
import pillarLanguage from "../assets/pillar-2-language.jpg";
import pillarMovement from "../assets/pillar-3-movement.webp";
import pillarArt from "../assets/pillar-4-art.png";
import pillarParticipation from "../assets/pillar-5-participation.jpg";
import pillarHealth from "../assets/pillar-6-health.jpg";

// Order matches `p.pedagogy.pillars`.
const PILLAR_IMAGES = [
  pillarBonding,
  pillarLanguage,
  pillarMovement,
  pillarArt,
  pillarParticipation,
  pillarHealth,
];

const PILLAR_ICONS = [HeartHandshake, BookOpen, Sprout, Music, Vote, Salad];
const PILLAR_TONE = [
  "bg-awo-red/10 text-awo-red",
  "bg-awo-red-soft text-awo-red-dark",
  "bg-awo-red-soft text-awo-red-dark",
  "bg-awo-red-soft text-awo-red",
  "bg-awo-cream-dark text-awo-red-dark",
  "bg-awo-red-soft text-awo-red",
];

export function PedagogyPage() {
  const { t, p } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pedagogy.eyebrow}
        title={t.pedagogy.title}
        description={p.pedagogy.intro}
        imageSeed={SEEDS.pedagogyHero}
        crumbs={[{ label: t.nav.pedagogy }]}
      />

      <Pedagogy withWaves={false} />

      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 variants={itemVariants} className="section-title">
            {p.pedagogy.pillarsTitle}
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.pedagogy.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? HeartHandshake;
            return (
              <motion.article
                key={pillar.title}
                variants={itemVariants}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={PILLAR_IMAGES[i] ?? PILLAR_IMAGES[0]}
                    alt={pillar.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  {/* <span
                    className={`absolute -bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-card ring-1 ring-white sm:h-14 sm:w-14 ${PILLAR_TONE[i % PILLAR_TONE.length]}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span> */}
                </div>
                <div className="flex flex-col p-5 pt-8 sm:p-7 sm:pt-10">
                  <h3 className="text-lg font-bold text-awo-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                    {pillar.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      <DailySchedule withWaves />

      <SectionWrapper className="bg-white">
        <motion.figure
          variants={itemVariants}
          className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-awo-red via-awo-red-dark to-awo-red p-10 text-white shadow-card-hover md:p-14"
        >
          <Quote className="h-9 w-9 text-white/70" />
          <blockquote className="mt-4 font-display text-3xl font-extrabold leading-snug md:text-4xl">
            „{p.pedagogy.quote.text}"
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold uppercase tracking-widest text-white/85">
            — {p.pedagogy.quote.author}
          </figcaption>
        </motion.figure>
      </SectionWrapper>
    </>
  );
}
