import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { NEWS_SLUGS, ROUTES } from '../routes';
import { img, SEEDS } from '../lib/images';

const SEED_LIST = [SEEDS.newsSommerfest, SEEDS.newsNaschgarten, SEEDS.newsPlaetze];
const TAG_TONE = ['bg-awo-red text-white', 'bg-awo-red-dark text-white', 'bg-awo-red text-white'];

type Props = {
  linkTo?: string;
  withWaves?: boolean;
  bottomWaveTo?: string;
};

export function News({ linkTo, withWaves = true, bottomWaveTo = '#ffffff' }: Props) {
  const { t } = useLanguage();

  return (
    <>
      {withWaves ? <WaveDivider fromColor="#ffffff" toColor="#FFFFFF" /> : null}
      <SectionWrapper id="news" className="bg-awo-cream">
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-2xl">
            <motion.span variants={itemVariants} className="section-eyebrow">
              {t.news.eyebrow}
            </motion.span>
            <motion.h2 variants={itemVariants} className="section-title mt-4">
              {t.news.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base text-awo-grey-light md:text-lg"
            >
              {t.news.description}
            </motion.p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {t.news.items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={img.newsCard(SEED_LIST[i] ?? SEEDS.newsSommerfest)}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-awo-ink/40 to-transparent" aria-hidden="true" />
                <span
                  className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest shadow-card ${TAG_TONE[i % TAG_TONE.length]}`}
                >
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-awo-grey-light">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-awo-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-awo-grey-light">
                  {item.text}
                </p>
                <Link
                  to={ROUTES.newsDetail(NEWS_SLUGS[i] ?? 'sommerfest')}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-awo-red transition group-hover:gap-2.5"
                >
                  {t.news.readMore}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        {linkTo ? (
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <Link to={linkTo} className="btn-ghost">
              {t.common.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ) : null}
      </SectionWrapper>
      {withWaves ? <WaveDivider fromColor="#FFFFFF" toColor={bottomWaveTo} /> : null}
    </>
  );
}
