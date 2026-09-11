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
  // Maximized sizes to make the logo highly visible and prominent
  const sizeClasses = {
    sm: 'h-16 sm:h-20 md:h-20 lg:h-20', // For mobile drawer
    md: 'h-24 sm:h-28 md:h-32 lg:h-32', // Extremely large for the main navbar header
    lg: 'h-32 sm:h-40 md:h-48 lg:h-56',
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <img
        src={OFFICIAL_LOGO_URL}
        alt="RKPT Logo"
        referrerPolicy="no-referrer"
        // mix-blend-multiply hides the white background of the JPG logo!
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply`}
      />
    </div>
  );
};
