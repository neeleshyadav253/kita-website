type Props = {
  className?: string;
  variant?: 'color' | 'white';
};

export function Logo({ className = '', variant = 'color' }: Props) {
  const primary = variant === 'white' ? '#ffffff' : '#2563EB';
  const secondary = variant === 'white' ? '#ffffff' : '#1F2937';
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="AWO Kita Logo"
    >
      <circle cx="24" cy="24" r="22" fill={primary} />
      <path
        d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8"
        stroke={variant === 'white' ? '#2563EB' : '#ffffff'}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="19"
        cy="20"
        r="1.6"
        fill={variant === 'white' ? '#2563EB' : '#ffffff'}
      />
      <circle
        cx="29"
        cy="20"
        r="1.6"
        fill={variant === 'white' ? '#2563EB' : '#ffffff'}
      />
      <path
        d="M24 6c2 4 2 8 0 12-2-4-2-8 0-12z"
        fill={secondary}
        opacity="0.85"
      />
    </svg>
  );
}
