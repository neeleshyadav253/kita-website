import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, ImageIcon, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';

const GALLERY_IMAGES = [
  'https://www.elc.ac.th/wp-content/uploads/Atelier-1208x805.jpg',
  'https://www.daviddomoney.com/wp-content/uploads/2018/07/Kids_Flower-Planters_5.jpg.webp',
  'https://www.sonne-bezau.at/fileadmin/_processed_/b/8/csm_sonne_bezau_kinderbuffet-4_43ae8009fd.jpg',
  'https://combowall.pl/wp-content/uploads/2026/05/kacik_zabaw_dla_dzieci_w_restauracji.webp',
  'https://images.stockcake.com/public/4/f/e/4fe7967e-366a-4a99-8188-77aefdd527b0_large/kids-planting-trees-stockcake.jpg',
  'https://atcharlotteshouse.com/wp-content/uploads/2018/01/CHARLOTTE-SMITH-Reading-Nook-14.jpg',
];

type Tile = {
  span: string;
  tint: string;
};

const TILES: Tile[] = [
  {
    span: 'col-span-6 sm:col-span-4 sm:row-span-2 aspect-[4/3] sm:aspect-auto',
    tint: 'from-awo-red-dark/55 via-awo-red/10',
  },
  {
    span: 'col-span-3 sm:col-span-2 aspect-[3/4]',
    tint: 'from-awo-red/50 via-awo-red/10',
  },
  {
    span: 'col-span-3 sm:col-span-2 aspect-[3/4]',
    tint: 'from-awo-red-dark/50 via-awo-red/10',
  },
  {
    span: 'col-span-2 aspect-square',
    tint: 'from-awo-red/45 via-awo-red/5',
  },
  {
    span: 'col-span-2 aspect-square',
    tint: 'from-awo-red-dark/45 via-awo-red/5',
  },
  {
    span: 'col-span-2 aspect-square',
    tint: 'from-awo-red/50 via-awo-red/10',
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const captions = t.gallery.captions;

  return (
    <SectionWrapper id="gallery" className="bg-white">
      <div className="grid gap-10 md:grid-cols-[1fr,1.6fr] md:items-start md:gap-14">
        <div className="md:sticky md:top-24">
          <motion.span variants={itemVariants} className="section-eyebrow">
            <Camera className="h-3.5 w-3.5" />
            {t.gallery.eyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {t.gallery.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {t.gallery.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-awo-red-soft px-4 py-2 text-xs font-bold uppercase tracking-widest text-awo-red-dark ring-1 ring-awo-red/15">
              <ImageIcon className="h-3.5 w-3.5 text-awo-red" />
              {captions.length} {t.gallery.eyebrow}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-awo-red-dark ring-1 ring-awo-red/20">
              <Sparkles className="h-3.5 w-3.5 text-awo-red" />
              Garten · Werkstatt · Wald
            </span>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="group mt-6 flex items-center justify-between gap-4 rounded-3xl bg-awo-red-soft px-5 py-4 text-sm font-semibold text-awo-red-dark ring-1 ring-awo-red/20 transition hover:bg-awo-red/15 hover:ring-awo-red/40"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-awo-red shadow-card">
                <ImageIcon className="h-4 w-4" />
              </span>
              {t.gallery.cta}
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-awo-red/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-awo-red" />
          </motion.a>
        </div>

        <div className="grid grid-cols-6 gap-3 sm:gap-4">
          {captions.map((caption, i) => {
            const tile = TILES[i] ?? TILES[0];
            return (
              <motion.figure
                key={caption}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-awo-red/10 transition duration-500 hover:-translate-y-1 hover:shadow-card-hover ${tile.span}`}
              >
                <img
                  src={GALLERY_IMAGES[i] ?? GALLERY_IMAGES[0]}
                  alt={caption}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
                  loading="lazy"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent ${tile.tint}`}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-awo-ink/55 via-awo-ink/0 to-transparent"
                  aria-hidden="true"
                />

                <span className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-[10px] font-extrabold text-awo-red-dark shadow-card backdrop-blur">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl bg-white/95 px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-awo-red-dark shadow-card backdrop-blur transition duration-300 group-hover:bg-white">
                  <span className="truncate">{caption}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-awo-red transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
