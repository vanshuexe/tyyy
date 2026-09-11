import React from 'react';

export const OFFICIAL_LOGO_URL = 'https://i.ibb.co/YTWZHY7p/main.jpg';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-16 sm:h-20 md:h-20 lg:h-24',
    md: 'h-20 sm:h-24 md:h-28 lg:h-32',
    lg: 'h-32 sm:h-36 md:h-40 lg:h-48',
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <img
        src={OFFICIAL_LOGO_URL}
        alt="RKPT Logo"
        referrerPolicy="no-referrer"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 transform scale-125 sm:scale-150 origin-left group-hover:scale-[1.35] sm:group-hover:scale-[1.6]`}
      />
    </div>
  );
};
