export const ROUTES = {
  home: '/',
  about: '/ueber-uns',
  pedagogy: '/paedagogik',
  groups: '/gruppen',
  groupDetail: (slug: string) => `/gruppen/${slug}`,
  team: '/team',
  enrollment: '/anmeldung',
  news: '/aktuelles',
  newsDetail: (slug: string) => `/aktuelles/${slug}`,
  contact: '/kontakt',
} as const;

export const GROUP_SLUGS = ['krippe', 'kindergarten'] as const;
export type GroupSlug = (typeof GROUP_SLUGS)[number];

export const NEWS_SLUGS = ['sommerfest', 'naschgarten', 'plaetze-august'] as const;
export type NewsSlug = (typeof NEWS_SLUGS)[number];
