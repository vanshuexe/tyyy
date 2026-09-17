import React from 'react';

export const OFFICIAL_LOGO_URL = 'https://ik.imagekit.io/fdhgiehjz/rkpt.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  // Balanced and clear sizes for both mobile and desktop
  const sizeClasses = {
    sm: 'h-6 sm:h-8 md:h-10 lg:h-10', // For mobile drawer / footer
    md: 'h-8 sm:h-10 md:h-12 lg:h-14', // Perfectly balanced for the main navbar
    lg: 'h-12 sm:h-16 md:h-20 lg:h-24', // Extra large 
  }[size];

  // Text size corresponding to logo size
  const textSizeClasses = {
    sm: 'text-sm sm:text-base md:text-lg',
    md: 'text-base sm:text-xl md:text-2xl lg:text-3xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  }[size];

  // Negative margin to pull text closer (counteracting baked-in transparent padding in the PNG)
  const pullTextClasses = {
    sm: '-ml-3 sm:-ml-4 md:-ml-5',
    md: '-ml-4 sm:-ml-6 md:-ml-7 lg:-ml-9',
    lg: '-ml-8 sm:-ml-10 md:-ml-14 lg:-ml-16',
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <img
        src={OFFICIAL_LOGO_URL}
        alt="RKPT Logo"
        referrerPolicy="no-referrer"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-md -ml-2 sm:-ml-4`}
      />
      <span className={`font-bold tracking-tight uppercase whitespace-nowrap transition-colors duration-300 z-10 ${textSizeClasses} ${pullTextClasses} ${variant === 'white' ? 'text-white' : 'text-[#0b1b36]'}`}>
        RKPT TECH LTD
      </span>
    </div>
  );
};
