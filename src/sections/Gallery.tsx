import { motion } from 'framer-motion';
import { Camera, ImageIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { img, SEEDS } from '../lib/images';

const TINTS = [
  'from-awo-red/40 via-awo-red/10',
  'from-awo-sun/40 via-awo-sun/10',
  'from-awo-grass/40 via-awo-grass/10',
  'from-awo-blush/40 via-awo-blush/10',
  'from-awo-lavender/40 via-awo-lavender/10',
  'from-awo-red-dark/40 via-awo-red-dark/10',
];

export function Gallery() {
  const { t } = useLanguage();
  const captions = t.gallery.captions;

  return (
    <SectionWrapper id="gallery" className="bg-white">
      <div className="grid gap-8 md:grid-cols-[1fr,1.6fr] md:gap-12">
        <div>
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
          <motion.p
            variants={itemVariants}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-awo-sun-soft px-4 py-3 text-sm font-semibold text-awo-ink"
          >
            <ImageIcon className="h-4 w-4 text-awo-sun" />
            {t.gallery.cta}
          </motion.p>
        </div>

        <div className="grid grid-cols-6 gap-3 sm:gap-4">
          {captions.map((caption, i) => (
            <motion.figure
              key={caption}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-awo-grey/10 ${
                [
                  'col-span-3 row-span-2 aspect-square',
                  'col-span-3 aspect-[4/3]',
                  'col-span-3 aspect-[4/3]',
                  'col-span-2 aspect-square',
                  'col-span-2 aspect-square',
                  'col-span-2 aspect-square',
                ][i]
              }`}
            >
              <img
                src={img.gallery(SEEDS.galleryBase, i)}
                alt={caption}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent ${TINTS[i % TINTS.length]}`}
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-awo-ink shadow-card backdrop-blur">
                {caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
