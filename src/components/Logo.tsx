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
    sm: 'h-10 sm:h-12 md:h-14 lg:h-16', // For mobile drawer / footer
    md: 'h-14 sm:h-16 md:h-20 lg:h-24', // Perfectly balanced for the main navbar
    lg: 'h-24 sm:h-28 md:h-32 lg:h-36', // Extra large 
  }[size];

  // Text size corresponding to logo size
  const textSizeClasses = {
    sm: 'text-lg sm:text-xl md:text-2xl',
    md: 'text-2xl sm:text-3xl md:text-4xl',
    lg: 'text-4xl sm:text-5xl md:text-6xl',
  }[size];

  // Negative margin to pull text closer (counteracting baked-in transparent padding in the PNG)
  const pullTextClasses = {
    sm: '-ml-6 sm:-ml-8 md:-ml-10',
    md: '-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20',
    lg: '-ml-16 sm:-ml-20 md:-ml-24 lg:-ml-32',
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
