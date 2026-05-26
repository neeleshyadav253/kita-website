import { motion } from 'framer-motion';
import { Clock3, Film, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import { KITA_VIDEO } from '../lib/videos';

export function LifeAtKita({ withWaves = true }: { withWaves?: boolean }) {
  const { t } = useLanguage();
  const copy = t.lifeAtKita;

  return (
    <>
      {withWaves ? <WaveDivider fromColor="#ffffff" toColor="#FFFFFF" /> : null}
      <SectionWrapper id="life-at-kita" className="bg-awo-cream">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr] lg:items-center lg:gap-14">
          <div>
            <motion.span variants={itemVariants} className="section-eyebrow">
              <Film className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </motion.span>
            <motion.h2 variants={itemVariants} className="section-title mt-4">
              {copy.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
            >
              {copy.description}
            </motion.p>

            <motion.ul variants={itemVariants} className="mt-7 space-y-3">
              {copy.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm font-medium text-awo-ink"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-awo-red-soft text-awo-red">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-awo-red-dark ring-1 ring-awo-red/15">
                <Clock3 className="h-3.5 w-3.5 text-awo-red" />
                {copy.durationLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-awo-red-soft px-4 py-2 text-xs font-bold uppercase tracking-widest text-awo-red-dark ring-1 ring-awo-red/20">
                <Play className="h-3.5 w-3.5 fill-awo-red text-awo-red" />
                {copy.playCta}
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-card-hover ring-1 ring-awo-red/15"
          >
            <YouTubeEmbed
              videoId={KITA_VIDEO.feature.youtubeId}
              poster={KITA_VIDEO.feature.poster}
              ariaLabel={copy.title}
            />
          </motion.div>
        </div>
      </SectionWrapper>
      {withWaves ? <WaveDivider fromColor="#FFFFFF" toColor="#ffffff" /> : null}
    </>
  );
}
