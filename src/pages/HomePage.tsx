import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { WhyUs } from '../sections/WhyUs';
import { Pedagogy } from '../sections/Pedagogy';
import { DailySchedule } from '../sections/DailySchedule';
import { Groups } from '../sections/Groups';
import { Gallery } from '../sections/Gallery';
import { Team } from '../sections/Team';
import { Testimonials } from '../sections/Testimonials';
import { Partners } from '../sections/Partners';
import { Enrollment } from '../sections/Enrollment';
import { News } from '../sections/News';
import { CtaBanner } from '../sections/CtaBanner';
import { ROUTES } from '../routes';

export function HomePage() {
  return (
    <>
      <Hero />
      <About linkTo={ROUTES.about} />
      <WhyUs />
      <Pedagogy linkTo={ROUTES.pedagogy} />
      <DailySchedule />
      <Groups linkPerCard />
      <Gallery />
      <Testimonials />
      <Team linkTo={ROUTES.team} withWaves={false} />
      <Partners />
      <Enrollment linkTo={ROUTES.enrollment} showForm={false} />
      <News linkTo={ROUTES.news} bottomWaveTo="#ffffff" />
      <CtaBanner />
    </>
  );
}
