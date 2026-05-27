import { motion } from "framer-motion";
import {
  HeartHandshake,
  Leaf,
  MessageCircle,
  Salad,
  Sparkles,
  Users,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionWrapper, itemVariants } from "../components/SectionWrapper";
import whyUsGroups from "../assets/whyus-1-groups.jpg";
import whyUsKitchen from "../assets/whyus-2-kitchen.jpg";
import whyUsForest from "../assets/whyus-3-forest.jpg";
import whyUsLanguage from "../assets/whyus-4-language.jpg";
import whyUsSettling from "../assets/whyus-5-settling.jpg";
import whyUsInclusive from "../assets/whyus-6-inclusive.jpg";

const ICONS = [Users, Salad, Leaf, MessageCircle, Sparkles, HeartHandshake];

// Order matches `whyUs.items` in src/i18n/translations.ts.
const IMAGES = [
  whyUsGroups,
  whyUsKitchen,
  whyUsForest,
  whyUsLanguage,
  whyUsSettling,
  whyUsInclusive,
];
const ACCENT = [
  "bg-awo-red/10 text-awo-red",
  "bg-awo-red-soft text-awo-red",
  "bg-awo-red-soft text-awo-red-dark",
  "bg-awo-red-soft text-awo-red-dark",
  "bg-awo-cream-dark text-awo-red-dark",
  "bg-awo-red-soft text-awo-red",
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="why-us" className="bg-white">
      <div className="relative">
        <div className="max-w-3xl">
          <motion.span variants={itemVariants} className="eyebrow-sun">
            <Sparkles className="h-3.5 w-3.5" />
            {t.whyUs.eyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {t.whyUs.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {t.whyUs.description}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={IMAGES[i] ?? IMAGES[0]}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <span className="chip absolute right-3 top-3 max-w-[60%] truncate justify-center bg-white/90 backdrop-blur">
                    {item.pill}
                  </span>
                  {/* <span
                    className={`absolute -bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-card ring-1 ring-white sm:h-14 sm:w-14 ${ACCENT[i % ACCENT.length]}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span> */}
                </div>
                <div className="flex flex-col p-5 pt-8 sm:p-7 sm:pt-10">
                  <h3 className="text-base font-bold text-awo-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
