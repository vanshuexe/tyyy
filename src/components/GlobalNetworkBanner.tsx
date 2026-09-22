import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, X, Sun, Moon } from 'lucide-react';
import { 
  WORLD_VIEWBOX, 
  WORLD_LAND_PATH, 
  MAP_CENTER_NEXUS, 
  MAP_HUBS, 
  MapHubPin 
} from '../data/worldMapData';

interface GlobalNetworkBannerProps {
  onOpenConsultation: () => void;
  onSelectHub?: (hubId: string) => void;
  className?: string;
}

export const GlobalNetworkBanner: React.FC<GlobalNetworkBannerProps> = ({
  onOpenConsultation,
  onSelectHub,
  className = '',
}) => {
  const [activeHubId, setActiveHubId] = useState<string | null>(null);
  const [hoveredHubId, setHoveredHubId] = useState<string | null>(null);
  // Default to Light corporate theme matching the website's clean #fafafa Hero
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const selectedHub = MAP_HUBS.find(h => h.id === (activeHubId || hoveredHubId));

  return (
    <div 
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden transition-colors duration-300 select-none ${
        isDarkMode 
          ? 'bg-[#0b1b36] border border-[#1e4a87]/60 shadow-xl shadow-black/20 text-white' 
          : 'bg-white border border-gray-200/90 shadow-xl shadow-slate-200/60 text-gray-900'
      } ${className}`}
    >
      {/* Top Corporate Header Bar */}
      <div className={`px-4 py-3 sm:px-5 sm:py-3.5 border-b flex items-center justify-between transition-colors ${
        isDarkMode ? 'border-white/10 bg-[#07152b]' : 'border-gray-100 bg-gray-50/70'
      }`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-[#c91c1c] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c91c1c] animate-pulse" />
            <span>Global Network</span>
          </div>
          <span className={`text-xs font-medium hidden sm:inline ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            7 Strategic Jurisdictions • Europe Coordination Desk
          </span>
        </div>

        {/* Theme Toggle (Light Corporate vs Navy Corporate) */}
        <button
          type="button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
            isDarkMode 
              ? 'bg-white/10 hover:bg-white/15 border-white/20 text-gray-200' 
              : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700 shadow-xs'
          }`}
          title="Toggle map style"
        >
          {isDarkMode ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden xs:inline">Light Theme</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden xs:inline">Navy Theme</span>
            </>
          )}
        </button>
      </div>

      {/* Map SVG Canvas */}
      <div className="relative w-full aspect-[1000/500]">
        <svg
          viewBox={WORLD_VIEWBOX}
          preserveAspectRatio="xMidYMid meet"
          className={`w-full h-full block transition-colors duration-300 ${
            isDarkMode ? 'bg-[#0a1830]' : 'bg-[#f8fafc]'
          }`}
        >
          <defs>
            {/* Animated Flow Dash Pattern */}
            <linearGradient id="route-gradient-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c91c1c" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>

            <filter id="soft-pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity={isDarkMode ? "0.4" : "0.15"} />
            </filter>
          </defs>

          {/* 1. Continents Landmass */}
          <path
            d={WORLD_LAND_PATH}
            fill={isDarkMode ? "#122a4f" : "#e2e8f0"}
            stroke={isDarkMode ? "#1d447a" : "#cbd5e1"}
            strokeWidth="0.8"
            className="transition-colors duration-300"
          />

          {/* 2. Curved Routing Arcs from Europe Hub to the 7 Countries */}
          <g className="routes-group pointer-events-none">
            {MAP_HUBS.map(hub => {
              const isHighlighted = activeHubId === hub.id || hoveredHubId === hub.id;
              const pathD = `M ${MAP_CENTER_NEXUS.x} ${MAP_CENTER_NEXUS.y} Q ${hub.curveControl.x} ${hub.curveControl.y} ${hub.x} ${hub.y}`;

              return (
                <g key={`route-${hub.id}`}>
                  {/* Outer glow/cushion when highlighted */}
                  {isHighlighted && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#c91c1c"
                      strokeWidth="5"
                      opacity="0.2"
                    />
                  )}

                  {/* Main Route Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={
                      isHighlighted 
                        ? '#c91c1c' 
                        : isDarkMode 
                          ? '#2a5a9c' 
                          : '#94a3b8'
                    }
                    strokeWidth={isHighlighted ? 2.5 : 1.4}
                    strokeDasharray={isHighlighted ? 'none' : '4 4'}
                    opacity={isHighlighted ? 1 : isDarkMode ? 0.75 : 0.7}
                    className="transition-all duration-200"
                  />

                  {/* Animated Active Route indicator */}
                  {isHighlighted && (
                    <circle r="3.5" fill="#c91c1c">
                      <animateMotion
                        path={pathD}
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* 3. Central Europe Dispatch Hub */}
          <g 
            transform={`translate(${MAP_CENTER_NEXUS.x}, ${MAP_CENTER_NEXUS.y})`}
            className="pointer-events-none"
          >
            {/* Pulse rings */}
            <circle cx="0" cy="0" r="14" fill="#c91c1c" opacity="0.12">
              <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="7" fill="#c91c1c" opacity="0.2" />
            <circle cx="0" cy="0" r="3.5" fill="#c91c1c" stroke="#ffffff" strokeWidth="1.2" />
          </g>

          {/* 4. The 7 Country Location Pins */}
          <g className="pins-group">
            {MAP_HUBS.map(hub => {
              const isSelected = activeHubId === hub.id;
              const isHovered = hoveredHubId === hub.id;
              const isActive = isSelected || isHovered;

              return (
                <g
                  key={hub.id}
                  transform={`translate(${hub.x}, ${hub.y})`}
                  className="cursor-pointer select-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHubId(isSelected ? null : hub.id);
                  }}
                  onMouseEnter={() => setHoveredHubId(hub.id)}
                  onMouseLeave={() => setHoveredHubId(null)}
                >
                  {/* Expanded invisible touch hit area */}
                  <circle cx="0" cy="-22" r="32" fill="transparent" />

                  {/* Base Anchor Dot */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r={isActive ? 3.5 : 2.5} 
                    fill={isActive ? '#c91c1c' : isDarkMode ? '#60a5fa' : '#0b1b36'} 
                  />

                  {/* Main Pin Container */}
                  <g
                    className="transition-transform duration-200 ease-out"
                    style={{
                      transform: isActive ? 'scale(1.25) translateY(-4px)' : 'scale(1)',
                      transformOrigin: '0px 0px'
                    }}
                    filter="url(#soft-pin-shadow)"
                  >
                    {/* Teardrop Pin Shape */}
                    <path
                      d="M 0 0 C -3.5 -5 -15 -14 -15 -23 A 15 15 0 1 1 15 -23 C 15 -14 3.5 -5 0 0 Z"
                      fill={isActive ? '#c91c1c' : isDarkMode ? '#0d2244' : '#ffffff'}
                      stroke={isActive ? '#c91c1c' : isDarkMode ? '#3b82f6' : '#cbd5e1'}
                      strokeWidth={isActive ? '2' : '1.5'}
                    />

                    {/* Circular Flag Clip */}
                    <clipPath id={`pin-flag-clip-${hub.id}`}>
                      <circle cx="0" cy="-23" r="11" />
                    </clipPath>

                    {/* White backing circle */}
                    <circle cx="0" cy="-23" r="11.5" fill="#ffffff" />

                    {/* Real National Flag */}
                    <image
                      href={`https://flagcdn.com/w160/${hub.code}.png`}
                      x="-12"
                      y="-35"
                      width="24"
                      height="24"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#pin-flag-clip-${hub.id})`}
                    />

                    {/* Inner Rim Border */}
                    <circle
                      cx="0"
                      cy="-23"
                      r="11"
                      fill="none"
                      stroke={isActive ? '#ffffff' : 'rgba(0,0,0,0.1)'}
                      strokeWidth="1"
                    />

                    {/* Country Name Tag Label */}
                    <g transform="translate(0, 10)">
                      <rect
                        x="-18"
                        y="0"
                        width="36"
                        height="14"
                        rx="4"
                        fill={isActive ? '#c91c1c' : isDarkMode ? '#07152b' : '#ffffff'}
                        stroke={isActive ? '#c91c1c' : isDarkMode ? '#1e4a87' : '#e2e8f0'}
                        strokeWidth="1"
                      />
                      <text
                        x="0"
                        y="10"
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="700"
                        fill={isActive ? '#ffffff' : isDarkMode ? '#e2e8f0' : '#0b1b36'}
                      >
                        {hub.name}
                      </text>
                    </g>
                  </g>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Country Quick Selection Chips Bar */}
      <div className={`px-3 py-2 sm:px-4 sm:py-2.5 border-t flex items-center justify-between gap-2 overflow-x-auto transition-colors ${
        isDarkMode ? 'border-white/10 bg-[#07152b]' : 'border-gray-100 bg-gray-50/90'
      }`}>
        <div className="flex items-center gap-1.5 flex-nowrap min-w-max">
          <span className={`text-[11px] font-semibold uppercase tracking-wider mr-1 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Jurisdictions:
          </span>
          {MAP_HUBS.map(hub => {
            const isCurrent = (activeHubId || hoveredHubId) === hub.id;
            return (
              <button
                key={hub.id}
                type="button"
                onClick={() => setActiveHubId(isCurrent ? null : hub.id)}
                onMouseEnter={() => setHoveredHubId(hub.id)}
                onMouseLeave={() => setHoveredHubId(null)}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isCurrent 
                    ? 'bg-[#c91c1c] text-white shadow-xs' 
                    : isDarkMode 
                      ? 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10' 
                      : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 shadow-xs'
                }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${hub.code}.png`}
                  alt=""
                  className="w-3.5 h-2.5 object-cover rounded-xs"
                />
                <span>{hub.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean Corporate Detail Card Popover */}
      <AnimatePresence>
        {selectedHub && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute bottom-14 left-3 right-3 sm:bottom-16 sm:left-5 sm:right-5 z-30 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
              isDarkMode 
                ? 'bg-[#0b1b36] border-red-500/40 text-white shadow-black/40' 
                : 'bg-white border-red-100 text-gray-900 shadow-slate-300/60 ring-1 ring-black/5'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={`https://flagcdn.com/w80/${selectedHub.code}.png`}
                alt={selectedHub.name}
                className="w-10 h-7 sm:w-11 sm:h-8 object-cover rounded-md border border-gray-200 shadow-sm shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-sm sm:text-base leading-tight">
                    {selectedHub.name} Corporate Desk
                  </h4>
                  <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${
                    isDarkMode 
                      ? 'bg-red-950/60 text-red-300 border border-red-800/50' 
                      : 'bg-red-50 text-[#c91c1c] border border-red-100'
                  }`}>
                    {selectedHub.tagline}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm line-clamp-1 mt-0.5 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedHub.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              {onSelectHub && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectHub(selectedHub.id);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border shadow-xs transition-colors cursor-pointer ${
                    isDarkMode
                      ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                      : 'bg-white hover:bg-gray-100 border-gray-200 text-[#0b1b36]'
                  }`}
                >
                  <span>View Setup</span>
                </button>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenConsultation();
                }}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#c91c1c] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Consult Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHubId(null);
                  setHoveredHubId(null);
                }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'hover:bg-white/10 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                }`}
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
