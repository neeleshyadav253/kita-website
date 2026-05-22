type Props = {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
};

export function WaveDivider({
  fromColor = '#ffffff',
  toColor = '#EFF6FF',
  flip = false,
  className = '',
}: Props) {
  return (
    <div
      className={`pointer-events-none -mb-px w-full leading-[0] ${className}`}
      style={{ background: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-12 w-full md:h-16 ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
