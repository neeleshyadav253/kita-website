import type { CSSProperties } from 'react';
import logoAwo from '../assets/logo-awo.png';

export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

type LogoProps = {
  size?: LogoSize;
  lines?: string[];
  className?: string;
  background?: string;
  textColor?: string;
  dividerColor?: string;
  rounded?: boolean;
};

const SIZE_PX: Record<LogoSize, number> = {
  sm: 38,
  md: 45,
  lg: 68,
  xl: 76,
};

export function Logo({
  size = 'sm',
  lines,
  className = '',
  background = '#FFFFFF',
  textColor = '#1F2937',
  dividerColor = '#1F2937',
  rounded = true,
}: LogoProps) {
  const h = SIZE_PX[size];
  const safeLines = (lines ?? []).slice(0, 3);
  const lineCount = safeLines.length || 1;
  const fontPx = (h * 0.72) / lineCount;
  const linePx = fontPx * 1.08;
  const gapPx = Math.round(h * 0.22);
  const padPx = Math.round(h * 0.18);
  const dividerW = Math.max(1, Math.round(h / 48));

  const wrapperStyle: CSSProperties = {
    background,
    height: h,
    minHeight: h,
    paddingInline: padPx,
    gap: gapPx,
    borderRadius: rounded ? Math.round(h * 0.18) : 0,
  };

  if (safeLines.length === 0) {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        style={wrapperStyle}
      >
        <img
          src={logoAwo}
          alt="AWO Logo"
          style={{ height: h - padPx, width: 'auto' }}
          draggable={false}
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={wrapperStyle}
      aria-label={safeLines.join(' — ')}
    >
      <img
        src={logoAwo}
        alt="AWO Logo"
        style={{ height: h - padPx, width: 'auto' }}
        draggable={false}
      />
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: dividerW,
          height: h - padPx,
          background: dividerColor,
          flexShrink: 0,
          opacity: 0.85,
        }}
      />
      <span
        className="font-sans"
        style={{
          color: textColor,
          fontSize: fontPx,
          lineHeight: `${linePx}px`,
          fontWeight: 700,
          letterSpacing: '-0.005em',
          whiteSpace: 'nowrap',
        }}
      >
        {safeLines.map((line, i) => (
          <span key={i} style={{ display: 'block' }}>
            {line}
          </span>
        ))}
      </span>
    </span>
  );
}
