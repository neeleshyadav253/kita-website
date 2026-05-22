import { PageHero } from '../components/PageHero';
import { News } from '../sections/News';
import { useLanguage } from '../i18n/LanguageContext';
import { SEEDS } from '../lib/images';

export function NewsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.news.eyebrow}
        title={t.news.title}
        description={t.news.description}
        imageSeed={SEEDS.newsHero}
        crumbs={[{ label: t.news.eyebrow }]}
      />
      <News withWaves={false} bottomWaveTo="#ffffff" />
    </>
  );
}
