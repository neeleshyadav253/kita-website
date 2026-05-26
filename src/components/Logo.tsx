import logoAwo from '../assets/logo-awo.png';

type Props = {
  className?: string;
  variant?: 'color' | 'white';
};

export function Logo({ className = '', variant = 'color' }: Props) {
  return (
    <img
      src={logoAwo}
      alt="AWO Logo"
      className={`${className} object-contain ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      draggable={false}
    />
  );
}
