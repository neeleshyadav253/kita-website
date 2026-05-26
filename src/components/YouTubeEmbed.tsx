import { useState } from 'react';
import { Play } from 'lucide-react';

type Props = {
  videoId: string;
  poster?: string;
  ariaLabel?: string;
  className?: string;
};

export function YouTubeEmbed({ videoId, poster, ariaLabel, className = '' }: Props) {
  const [started, setStarted] = useState(false);
  const thumb = poster ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={`group relative h-full w-full overflow-hidden bg-awo-ink ${className}`}>
      {started ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={ariaLabel ?? 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          <img
            src={thumb}
            alt={ariaLabel ?? ''}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <button
            type="button"
            onClick={() => setStarted(true)}
            aria-label={ariaLabel ?? 'Play video'}
            className="absolute inset-0 flex items-center justify-center bg-awo-ink/25 transition hover:bg-awo-ink/10 focus:outline-none focus:ring-4 focus:ring-awo-red/40"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-awo-red text-white shadow-card-hover ring-4 ring-white/40 transition group-hover:scale-110 sm:h-20 sm:w-20">
              <Play className="h-7 w-7 translate-x-0.5 fill-white sm:h-8 sm:w-8" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
