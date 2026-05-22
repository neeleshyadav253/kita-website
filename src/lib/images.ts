/**
 * Image URL helpers — centralizes all imagery so we can swap CDN later
 * without touching every component.
 *
 * For the demo we use:
 *   - picsum.photos for scenes (real, colorful photos with stable seeds)
 *   - i.pravatar.cc for team portraits (real-looking diverse faces)
 *
 * CSS overlays / rings in components do the visual unification.
 */

type Size = { w: number; h: number };

const pic = (seed: string, { w, h }: Size) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

export const img = {
  scene: (seed: string, size: Size = { w: 900, h: 600 }) => pic(seed, size),

  hero: (seed = 'kita-hero-main') => pic(seed, { w: 1200, h: 1400 }),

  pageHero: (seed: string) => pic(seed, { w: 1800, h: 700 }),

  card: (seed: string) => pic(seed, { w: 800, h: 600 }),

  newsCard: (seed: string) => pic(seed, { w: 800, h: 520 }),

  newsBody: (seed: string) => pic(seed, { w: 1400, h: 700 }),

  gallery: (seed: string, idx: number) => {
    const presets: Size[] = [
      { w: 700, h: 700 },
      { w: 700, h: 900 },
      { w: 900, h: 700 },
      { w: 600, h: 600 },
      { w: 800, h: 800 },
      { w: 700, h: 1000 },
    ];
    return pic(`${seed}-${idx}`, presets[idx % presets.length]);
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
