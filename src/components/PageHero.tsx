import { img } from '../lib/images';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Explicit image URL (e.g. a local imported asset). Wins over imageSeed. */
  image?: string;
  imageAlt?: string;
  /** Falls back to a Lorem Flickr placeholder generated from this seed. */
  imageSeed?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageSeed,
}: Props) {
  const resolvedImage = image ?? (imageSeed ? img.pageHero(imageSeed) : undefined);

  const textBlock = (
    <>
      <span className="inline-flex items-center gap-2 rounded-full bg-awo-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-awo-red ring-1 ring-awo-red/15">
        {eyebrow}
      </span>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-awo-ink md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-awo-grey md:text-lg">
          {description}
        </p>
      ) : null}
    </>
  );

  return (
    <section className="relative isolate overflow-hidden bg-white pt-20 md:pt-24">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[88rem] 3xl:max-w-[100rem] px-6 pb-12 pt-4 text-awo-ink md:px-10 md:pb-16 md:pt-6">
        {resolvedImage ? (
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
            <div>{textBlock}</div>
            <figure className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-awo-grey/10">
              <img
                src={resolvedImage}
                alt={imageAlt ?? title}
                loading="eager"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </div>
        ) : (
          textBlock
        )}
      </div>
    </section>
  );
}
