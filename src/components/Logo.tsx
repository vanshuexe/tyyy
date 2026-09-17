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
    sm: 'h-6 sm:h-10 md:h-12 lg:h-14', // For mobile drawer / footer
    md: 'h-9 sm:h-14 md:h-16 lg:h-20', // Perfectly balanced for the main navbar
    lg: 'h-16 sm:h-24 md:h-28 lg:h-32', // Extra large 
  }[size];

  // Text size corresponding to logo size
  const textSizeClasses = {
    sm: 'text-sm sm:text-lg md:text-xl',
    md: 'text-base sm:text-2xl md:text-3xl lg:text-4xl',
    lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  }[size];

  // Negative margin to pull text closer (counteracting baked-in transparent padding in the PNG)
  const pullTextClasses = {
    sm: '-ml-3 sm:-ml-6 md:-ml-8',
    md: '-ml-4 sm:-ml-8 md:-ml-10 lg:-ml-14',
    lg: '-ml-10 sm:-ml-16 md:-ml-20 lg:-ml-24',
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
