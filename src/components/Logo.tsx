import React from 'react';

export const OFFICIAL_LOGO_URL = '/rkpt-logo.png';
export const FALLBACK_LOGO_URL = 'https://ik.imagekit.io/fdhgiehjz/rkpt.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = false,
  className = '',
}) => {
  // Clear, crisp dimensions with zero transparent padding
  const sizeClasses = {
    sm: 'h-6 sm:h-7', // Mobile drawer
    md: 'h-7 sm:h-8 md:h-9', // Main navbar
    lg: 'h-10 sm:h-12', // Extra large
  }[size];

  return (
    <div className={`flex items-center select-none group ${className}`}>
      <img
        src={OFFICIAL_LOGO_URL}
        onError={(e) => {
          if (e.currentTarget.src !== FALLBACK_LOGO_URL) {
            e.currentTarget.src = FALLBACK_LOGO_URL;
          }
        }}
        alt="RKPT TECH LTD"
        referrerPolicy="no-referrer"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 block`}
      />
      {showText && (
        <span
          className={`ml-2 font-bold tracking-tight uppercase whitespace-nowrap transition-colors duration-300 ${
            variant === 'white' ? 'text-white' : 'text-[#0b1b36]'
          }`}
        >
          RKPT TECH LTD
        </span>
      )}
    </div>
  );
};


