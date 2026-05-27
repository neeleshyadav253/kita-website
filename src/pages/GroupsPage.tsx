import { PageHero } from '../components/PageHero';
import { Groups } from '../sections/Groups';
import { Pedagogy } from '../sections/Pedagogy';
import { useLanguage } from '../i18n/LanguageContext';
import pageHeroImage from '../assets/pagehero-groups.jpg';

export function GroupsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.groups.eyebrow}
        title={t.groups.title}
        description={t.groups.description}
        image={pageHeroImage}
      />
      <Groups linkPerCard />
      <Pedagogy />
    </>
  );
}
