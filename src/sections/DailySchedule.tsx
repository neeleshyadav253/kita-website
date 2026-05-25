import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';

type Accent = 'sun' | 'red' | 'grass' | 'blush' | 'lavender';

const DOT: Record<Accent, string> = {
  sun: 'bg-awo-red',
  red: 'bg-awo-red',
  grass: 'bg-awo-red-dark',
  blush: 'bg-awo-red',
  lavender: 'bg-awo-red-dark',
};

const RING: Record<Accent, string> = {
  sun: 'ring-awo-red/30',
  red: 'ring-awo-red/30',
  grass: 'ring-awo-red-dark/30',
  blush: 'ring-awo-red/30',
  lavender: 'ring-awo-red-dark/30',
};

export function DailySchedule({ withWaves = true }: { withWaves?: boolean }) {
  const { t } = useLanguage();

  return (
    <>
      {withWaves ? <WaveDivider fromColor="#ffffff" toColor="#EFF6FF" /> : null}
      <SectionWrapper id="schedule" className="bg-awo-cream">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.span variants={itemVariants} className="eyebrow-grass">
              <Clock className="h-3.5 w-3.5" />
              {t.schedule.eyebrow}
            </motion.span>
            <motion.h2 variants={itemVariants} className="section-title mt-4">
              {t.schedule.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
            >
              {t.schedule.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-3xl bg-white p-6 shadow-card ring-1 ring-awo-grey/5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-awo-grey-light">
                  {t.schedule.weekdays}
                </span>
                <span className="font-display text-2xl font-extrabold text-awo-ink">
                  {t.schedule.openingHours}
                </span>
              </div>
              <p className="mt-2 text-sm text-awo-grey-light">
                {t.schedule.openingNote}
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-awo-red via-awo-red to-awo-red opacity-40" aria-hidden="true" />
            <ul className="space-y-5">
              {t.schedule.items.map((item) => {
                const acc = (item.accent as Accent) ?? 'red';
                return (
                  <motion.li
                    key={item.title}
                    variants={itemVariants}
                    className="relative pl-14"
                  >
                    <span
                      className={`absolute left-0 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card ring-4 ${RING[acc]}`}
                    >
                      <span className={`h-3 w-3 rounded-full ${DOT[acc]}`} />
                    </span>
                    <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-awo-grey/5 transition hover:-translate-y-0.5 hover:shadow-card-hover sm:p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-bold text-awo-ink">{item.title}</h3>
                        <span className="font-display text-sm font-bold text-awo-grey-light">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                        {item.text}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </SectionWrapper>
      {withWaves ? <WaveDivider fromColor="#EFF6FF" toColor="#ffffff" /> : null}
    </>
  );
}
