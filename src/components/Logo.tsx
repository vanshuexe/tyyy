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
    sm: 'h-14 sm:h-14 md:h-16 lg:h-16',
    md: 'h-16 sm:h-16 md:h-20 lg:h-20',
    lg: 'h-24 sm:h-24 md:h-28 lg:h-32',
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <img
        src={OFFICIAL_LOGO_URL}
        alt="RKPT Logo"
        referrerPolicy="no-referrer"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
};
