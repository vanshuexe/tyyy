import React from 'react';

export const OFFICIAL_LOGO_URL = 'https://i.ibb.co/HfWns7Kx/20260912-164332.jpg';

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
  // Balanced and clear sizes for both mobile and desktop
  const sizeClasses = {
    sm: 'h-10 sm:h-12 md:h-14 lg:h-16', // For mobile drawer / footer
    md: 'h-14 sm:h-16 md:h-20 lg:h-24', // Perfectly balanced for the main navbar
    lg: 'h-24 sm:h-28 md:h-32 lg:h-36', // Extra large 
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <img
        src={OFFICIAL_LOGO_URL}
        alt="RKPT Logo"
        referrerPolicy="no-referrer"
        // mix-blend-multiply hides the white background of the JPG logo!
        className={`${sizeClasses} w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105 mix-blend-multiply`}
      />
    </div>
  );
};
