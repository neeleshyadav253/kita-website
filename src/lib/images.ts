/**
 * Image URL helpers — centralized so the CDN/source can be swapped in one place.
 *
 * Scenes use Lorem Flickr with kindergarten/children-themed tag queries
 * (`?lock=N` keeps each call stable across reloads). Portraits use pravatar.
 */

import buildingFront from '../assets/kita-building-front.jpeg';
import buildingMural from '../assets/kita-building-mural.jpeg';
import buildingCorner from '../assets/kita-building-corner.jpeg';

/** Real exterior photos of the AWO Kita building. */
export const BUILDING = {
  front: buildingFront,
  mural: buildingMural,
  corner: buildingCorner,
};

type Size = { w: number; h: number };

const hashSeed = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h) || 1;
};

const flickr = (tags: string, seed: string, { w, h }: Size) =>
  `https://loremflickr.com/${w}/${h}/${tags}?lock=${hashSeed(seed)}`;

const TAGS = {
  hero: 'kindergarten,classroom,children',
  pageHero: 'kindergarten,preschool,children',
  group: 'kindergarten,children,playing',
  pedagogy: 'preschool,teacher,children',
  gallery: 'kindergarten,children,art',
  news: 'children,school,activity',
  scene: 'kindergarten,nursery,children',
  card: 'kindergarten,children,toddler',
} as const;

/**
 * Per-slot gallery tags. Order matches `gallery.captions` in
 * src/i18n/translations.ts:
 *   0 Im Atelier        — art / painting / kids
 *   1 Garten im Sommer  — garden / outdoor / kids
 *   2 Frühstücksbuffet  — breakfast / healthy food
 *   3 Bauecke           — wooden blocks / toys
 *   4 Waldtag           — forest / outdoor / kids
 *   5 Lese-Ecke         — books / reading / kids
 */
// 2-tag combos verified to return real photos for these locks.
// 3-tag combos (e.g. kindergarten,garden,outdoor) hit Lorem Flickr's
// defaultImage fallback for many locks because the intersection is empty.
const GALLERY_TAGS = [
  'kindergarten,art',
  'kindergarten,garden',
  'kindergarten,breakfast',
  'kindergarten,blocks',
  'kindergarten,forest',
  'kindergarten,books',
];

export const img = {
  scene: (seed: string, size: Size = { w: 900, h: 600 }) =>
    flickr(TAGS.scene, seed, size),

  hero: (seed = 'kita-hero-main') =>
    flickr(TAGS.hero, seed, { w: 1200, h: 1400 }),

  pageHero: (seed: string) => flickr(TAGS.pageHero, seed, { w: 1800, h: 700 }),

  card: (seed: string) => flickr(TAGS.card, seed, { w: 800, h: 600 }),

  newsCard: (seed: string) => flickr(TAGS.news, seed, { w: 800, h: 520 }),

  newsBody: (seed: string) => flickr(TAGS.news, seed, { w: 1400, h: 700 }),

  gallery: (seed: string, idx: number) => {
    const presets: Size[] = [
      { w: 700, h: 700 },
      { w: 700, h: 900 },
      { w: 900, h: 700 },
      { w: 600, h: 600 },
      { w: 800, h: 800 },
      { w: 700, h: 1000 },
    ];
    const tags = GALLERY_TAGS[idx % GALLERY_TAGS.length] ?? TAGS.gallery;
    return flickr(tags, `${seed}-${idx}`, presets[idx % presets.length]);
  },

  /** pravatar provides indexed real-looking faces (1..70 are stable) */
  avatar: (n: number, size = 240) =>
    `https://i.pravatar.cc/${size}?img=${((n - 1) % 70) + 1}`,
};

/** Reusable seed namespaces */
export const SEEDS = {
  heroMain: 'kita-sonnenschein-hero-22',
  heroFloat: 'kita-sonnenschein-float-7',
  groupKrippe: 'kita-krippe-room-3',
  groupKindergarten: 'kita-kindergarten-room-11',
  pedagogyHero: 'kita-pedagogy-warmth-9',
  aboutHero: 'kita-about-window-5',
  contactHero: 'kita-contact-door-2',
  teamHero: 'kita-team-circle-8',
  enrollHero: 'kita-enroll-welcome-4',
  newsHero: 'kita-news-board-6',
  groupsHero: 'kita-groups-hall-1',
  newsSommerfest: 'kita-news-sommerfest-12',
  newsNaschgarten: 'kita-news-naschgarten-15',
  newsPlaetze: 'kita-news-plaetze-18',
  galleryBase: 'kita-gallery',
  whyUs: 'kita-whyus-warm-13',
  testimonialQuote: 'kita-quote-soft-19',
};
