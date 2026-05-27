import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  LifeBuoy,
  MessageCircle,
  Network,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionWrapper, itemVariants } from '../components/SectionWrapper';
import { ROUTES } from '../routes';

const ICONS = [Users, MessageCircle, LifeBuoy, Network];

export function ThekizSection() {
  const { t } = useLanguage();
  const copy = t.thekiz;

  return (
    <SectionWrapper id="thekiz" className="bg-white">
      <div className="max-w-3xl">
        <motion.span variants={itemVariants} className="section-eyebrow">
          <HeartHandshake className="h-3.5 w-3.5" />
          {copy.eyebrow}
        </motion.span>
        <motion.h2 variants={itemVariants} className="section-title mt-4">
          {copy.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base leading-relaxed text-awo-grey-light md:text-lg"
        >
          {copy.description}
        </motion.p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {copy.offers.map((offer, i) => {
          const Icon = ICONS[i] ?? Users;
          return (
            <motion.article
              key={offer.title}
              variants={itemVariants}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-awo-grey/10 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-awo-red text-white shadow-card-hover">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-awo-ink">{offer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-awo-grey-light">
                {offer.text}
              </p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-12 rounded-[2rem] bg-awo-cream p-7 ring-1 ring-awo-grey/10 sm:p-9"
      >
        <h3 className="font-display text-sm font-bold uppercase tracking-widest text-awo-red-dark">
          Programme & Rahmen
        </h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {copy.programs.map((program) => (
            <li
              key={program}
              className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-awo-ink ring-1 ring-awo-grey/10"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-awo-red" />
              <span>{program}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10 text-center">
        <Link to={ROUTES.contact} className="btn-primary">
          {copy.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
