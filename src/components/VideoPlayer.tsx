import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

type Props = {
  src: string;
  fallback?: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
  autoplay?: boolean;
};

export function VideoPlayer({
  src,
  fallback,
  poster,
  className = '',
  ariaLabel,
  autoplay = false,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(autoplay);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleStart = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => setStarted(false));
  };

  const handleError = () => {
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
      return;
    }
    setFailed(true);
  };

  return (
    <div className={`group relative h-full w-full overflow-hidden ${className}`}>
      <video
        ref={ref}
        src={currentSrc}
        poster={poster}
        controls={started && !autoplay}
        autoPlay={autoplay}
        muted={autoplay}
        loop={autoplay}
        playsInline
        preload="metadata"
        onError={handleError}
        aria-label={ariaLabel}
        className="h-full w-full object-cover"
      />
      {!autoplay && !started && !failed ? (
        <button
          type="button"
          onClick={handleStart}
          aria-label={ariaLabel ?? 'Play video'}
          className="absolute inset-0 flex items-center justify-center bg-awo-ink/25 transition hover:bg-awo-ink/10 focus:outline-none focus:ring-4 focus:ring-awo-red/40"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-awo-red text-white shadow-card-hover ring-4 ring-white/40 transition group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="h-7 w-7 translate-x-0.5 fill-white sm:h-8 sm:w-8" />
          </span>
        </button>
      ) : null}
      {failed ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-awo-ink/70 to-transparent px-4 py-3 text-xs font-semibold text-white"
          role="note"
        >
          Video derzeit nicht verfügbar — bitte später erneut versuchen.
        </div>
      ) : null}
    </div>
  );
}
