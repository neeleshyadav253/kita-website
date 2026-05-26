import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { WaveDivider } from '../components/WaveDivider';
import { img } from '../lib/images';

const AVATAR_IDX = [12, 5, 47, 33, 26, 60, 41, 9];

export function Team({ linkTo, withWaves = true }: { linkTo?: string; withWaves?: boolean }) {
  const { t } = useLanguage();

  return (
    <>
      {withWaves ? <WaveDivider fromColor="#ffffff" toColor="#FFFFFF" /> : null}
      <SectionWrapper id="team" className="bg-awo-cream">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span variants={itemVariants} className="section-eyebrow">
            {t.team.eyebrow}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title mt-4">
            {t.team.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
          >
            {t.team.description}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {t.team.members.map((m, i) => (
            <motion.div
              key={m.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center rounded-3xl bg-white p-4 text-center shadow-card ring-1 ring-awo-grey/5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-awo-red via-awo-red to-awo-red opacity-0 blur transition duration-300 group-hover:opacity-60" />
                <img
                  src={img.avatar(AVATAR_IDX[i] ?? i + 1)}
                  alt={m.name}
                  className="relative h-20 w-20 rounded-full object-cover ring-4 ring-white sm:h-24 sm:w-24"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-base font-bold text-awo-ink">{m.name}</h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-awo-red">
                {m.role}
              </p>
              <p className="mt-3 text-xs text-awo-grey-light">{m.tag}</p>
            </motion.div>
          ))}
        </div>
        {linkTo ? (
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <Link to={linkTo} className="btn-ghost">
              {t.common.learnMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ) : null}
      </SectionWrapper>
      {withWaves ? <WaveDivider fromColor="#FFFFFF" toColor="#ffffff" /> : null}
    </>
  );
}
