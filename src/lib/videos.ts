import pillarBonding from '../assets/pillar-1-bonding.jpg';
import whyusGroups from '../assets/whyus-1-groups.jpg';

// YouTube video IDs and poster fallbacks. The YouTubeEmbed component will
// fetch the thumbnail from YouTube by default; the `poster` here is only used
// if you want to override with a custom image.
export type KitaVideo = {
  youtubeId: string;
  poster?: string;
};

export const KITA_VIDEO = {
  // "A day at our Kita" feature section
  feature: {
    youtubeId: 'y2Zuj4HljR8',
    poster: pillarBonding,
  } satisfies KitaVideo,
  // Gallery tile
  gallery: {
    youtubeId: 'anL1worUY5A',
    poster: whyusGroups,
  } satisfies KitaVideo,
};
