import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { img } from '../lib/images';

const AVATAR_NUMS = [25, 47, 32];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <>
      <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" />
      <SectionWrapper id="testimonials" className="bg-awo-cream">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span variants={itemVariants} className="eyebrow-grass">
            <Quote className="h-3.5 w-3.5" />
            {t.testimonials.eyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {t.testimonials.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {t.testimonials.description}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.article
              key={item.name}
              variants={itemVariants}
              className="relative flex flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-awo-cream-dark"
                aria-hidden="true"
              />
              <div className="flex items-center gap-1 text-awo-sun">
                {Array.from({ length: item.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-awo-ink md:text-[17px]">
                „{item.quote}"
              </blockquote>
              <div className="mt-7 flex items-center gap-4 border-t border-awo-grey/10 pt-5">
                <img
                  src={img.avatar(AVATAR_NUMS[i] ?? 5)}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover ring-4 ring-awo-cream"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-awo-ink">{item.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-awo-grey-light">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-12 flex max-w-fit items-center gap-4 rounded-full bg-white px-5 py-3 shadow-card ring-1 ring-awo-grey/5"
        >
          <div className="flex items-center gap-0.5 text-awo-sun">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-bold text-awo-ink">4,9 / 5</span>
          <span className="text-sm text-awo-grey-light">aus 56 Eltern-Bewertungen</span>
        </motion.div>
      </SectionWrapper>
      <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" />
    </>
  );
}
