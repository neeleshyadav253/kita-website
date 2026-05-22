import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { NEWS_SLUGS, ROUTES, type NewsSlug } from '../routes';
import { useLanguage } from '../i18n/LanguageContext';
import { img, SEEDS } from '../lib/images';

const SEED_MAP: Record<NewsSlug, string> = {
  sommerfest: SEEDS.newsSommerfest,
  naschgarten: SEEDS.newsNaschgarten,
  'plaetze-august': SEEDS.newsPlaetze,
};

export function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, p } = useLanguage();

  if (!slug || !(NEWS_SLUGS as readonly string[]).includes(slug)) {
    return <Navigate to={ROUTES.news} replace />;
  }

  const newsSlug = slug as NewsSlug;
  const detail = p.news[newsSlug];
  const seed = SEED_MAP[newsSlug];

  return (
    <>
      <PageHero
        eyebrow={detail.tag}
        title={detail.title}
        description={detail.lead}
        imageSeed={seed}
        crumbs={[
          { label: t.news.eyebrow, to: ROUTES.news },
          { label: detail.title },
        ]}
      />

      <SectionWrapper className="bg-white">
        <article className="mx-auto max-w-3xl">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-awo-grey-light"
          >
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {detail.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-awo-red/10 px-3 py-1 text-awo-red">
              <Tag className="h-3.5 w-3.5" />
              {detail.tag}
            </span>
          </motion.div>

          <motion.img
            variants={itemVariants}
            src={img.newsBody(seed)}
            alt={detail.title}
            className="mt-8 h-64 w-full rounded-3xl object-cover shadow-card ring-1 ring-awo-grey/5 sm:h-80 md:h-96"
            loading="lazy"
          />

          <div className="mt-10 space-y-5 text-base leading-relaxed text-awo-grey-light md:text-lg">
            {detail.body.map((para, i) => (
              <motion.p key={i} variants={itemVariants}>
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <Link to={ROUTES.news} className="btn-ghost">
              <ArrowLeft className="h-4 w-4" />
              {t.news.eyebrow}
            </Link>
          </motion.div>
        </article>
      </SectionWrapper>
    </>
  );
}
