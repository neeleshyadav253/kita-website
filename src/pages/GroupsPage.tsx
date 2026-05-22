import { PageHero } from '../components/PageHero';
import { Groups } from '../sections/Groups';
import { Pedagogy } from '../sections/Pedagogy';
import { useLanguage } from '../i18n/LanguageContext';
import { SEEDS } from '../lib/images';

export function GroupsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.groups.eyebrow}
        title={t.groups.title}
        description={t.groups.description}
        imageSeed={SEEDS.groupsHero}
        crumbs={[{ label: t.nav.groups }]}
      />
      <Groups linkPerCard />
      <Pedagogy />
    </>
  );
}
