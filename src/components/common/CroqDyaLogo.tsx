'use client';

import React from 'react';

const CroqDyaLogo = () => {
    return (
        <svg width="280" height="100" viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg">
            {/* Fond transparent */}
            <rect width="280" height="100" fill="transparent" />

            {/* Définition des gradients */}
            <defs>
                <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF69B4" stopOpacity="1" />
                <stop offset="50%" stopColor="#FFB6C1" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF1493" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="creamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8DC" stopOpacity="1" />
                <stop offset="100%" stopColor="#F3E5AB" stopOpacity="1" />
                </linearGradient>

                <filter id="softShadow">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#FF69B4" floodOpacity="0.3" />
                </filter>
            </defs>

            {/* Cupcake */}
            <g transform="translate(15, 20)">
                <path d="M5 35 L25 35 L23 55 L7 55 Z" fill="#8B4513" stroke="#654321" strokeWidth="1" />
                <ellipse cx="15" cy="32" rx="12" ry="8" fill="url(#creamGradient)" />
                <path d="M8 25 Q15 20 22 25 Q15 15 8 20 Q20 10 15 18" fill="url(#creamGradient)" opacity="0.9" />
                <circle cx="15" cy="22" r="3" fill="#DC143C" />
                <ellipse cx="13" cy="20" rx="1" ry="2" fill="#90EE90" transform="rotate(-30 13 20)" />
                <circle cx="10" cy="28" r="1.5" fill="#FFD700" />
                <circle cx="18" cy="30" r="1.5" fill="#FF6347" />
                <circle cx="12" cy="33" r="1.5" fill="#32CD32" />
            </g>

            {/* Texte principal */}
            <text
                x="55"
                y="45"
                fontFamily="'Dancing Script', cursive"
                fontSize="36"
                fontWeight="700"
                fill="url(#pinkGradient)"
                filter="url(#softShadow)"
            >
                Croq'Dya
            </text>

            {/* Sous-titre */}
            <text
                x="55"
                y="65"
                fontFamily="'Quicksand', sans-serif"
                fontSize="12"
                fontWeight="400"
                fill="#8B4513"
                letterSpacing="2px"
            >
                PÂTISSERIE ARTISANALE
            </text>

            {/* Étoiles */}
            <g fill="#FFD700" opacity="0.7">
                <polygon points="245,25 247,30 252,30 248,33 250,38 245,35 240,38 242,33 238,30 243,30" />
                <polygon points="260,15 261,18 264,18 262,20 263,23 260,21 257,23 258,20 256,18 259,18" />
                <polygon points="250,45 251,48 254,48 252,50 253,53 250,51 247,53 248,50 246,48 249,48" />
            </g>

            {/* Cœur */}
            <path
                d="M265 35 C265 32, 268 30, 270 32 C272 30, 275 32, 275 35 C275 37, 270 42, 270 42 C270 42, 265 37, 265 35 Z"
                fill="#FF69B4"
                opacity="0.8"
            />
        </svg>
    );
};

export default CroqDyaLogo;