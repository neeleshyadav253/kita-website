import { PageHero } from '../components/PageHero';
import { News } from '../sections/News';
import { useLanguage } from '../i18n/LanguageContext';
import pageHeroImage from '../assets/pagehero-news.jpeg';

export function NewsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.news.eyebrow}
        title={t.news.title}
        description={t.news.description}
        image={pageHeroImage}
      />
      <News withWaves={false} bottomWaveTo="#ffffff" />
    </>
  );
}
