import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Couleurs Croq'Dya en plus du système existant
      colors: {
        'rose-bonbon': '#FF69B4',
        'cream': '#FFF8DC',
        'chocolat': '#8B4513',
        'vanille': '#F3E5AB',
        'fraise': '#FFB6C1',
        'or-rose': '#E8B4B8',
        'blanc-casse': '#FEFEFE',
        'violet-doux': '#DDA0DD',
        'peche': '#FFCBA4',
        'croqdya': {
          50: '#fef7f7',
          100: '#feecec',
          200: '#fdd8df',
          300: '#fbb6c8',
          400: '#f786a7',
          500: '#FF69B4', // rose-bonbon principal
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
      },
      
      // Polices Croq'Dya
      fontFamily: {
        'dancing': ['var(--font-dancing-script)', 'cursive'],
        'quicksand': ['var(--font-quicksand)', 'sans-serif'],
      },
      
      // Box shadows Croq'Dya
      boxShadow: {
        'croqdya': '0 10px 30px rgba(255, 105, 180, 0.1)',
        'croqdya-hover': '0 20px 40px rgba(255, 105, 180, 0.2)',
        'croqdya-active': '0 5px 15px rgba(255, 105, 180, 0.3)',
      },
      
      // Animations personnalisées
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      
      // Keyframes
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)' 
          },
        },
        'bounce-soft': {
          '0%, 20%, 50%, 80%, 100%': { 
            transform: 'translateY(0)' 
          },
          '40%': { 
            transform: 'translateY(-10px)' 
          },
          '60%': { 
            transform: 'translateY(-5px)' 
          },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 0 0 rgba(255, 105, 180, 0.7)' 
          },
          '70%': { 
            boxShadow: '0 0 0 10px rgba(255, 105, 180, 0)' 
          },
          '100%': { 
            boxShadow: '0 0 0 0 rgba(255, 105, 180, 0)' 
          },
        },
      },
      
      // Backdrop blur
      backdropBlur: {
        'glass': '20px',
      },
      
      // Spacing personnalisé
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    // Plugin pour les utilities personnalisées Croq'Dya
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.glass-croqdya': {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 105, 180, 0.1)',
        },
        '.text-gradient-croqdya': {
          background: 'linear-gradient(45deg, #FF69B4, #DDA0DD)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};

export default config;








// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       // Couleurs personnalisées Croq'Dya
//       colors: {
//         'rose-bonbon': '#FF69B4',
//         'cream': '#FFF8DC',
//         'chocolat': '#8B4513',
//         'vanille': '#F3E5AB',
//         'fraise': '#FFB6C1',
//         'or-rose': '#E8B4B8',
//         'blanc-casse': '#FEFEFE',
//         'violet-doux': '#DDA0DD',
//         'peche': '#FFCBA4',
//         'croqdya': {
//           50: '#fef7f7',
//           100: '#feecec',
//           200: '#fdd8df',
//           300: '#fbb6c8',
//           400: '#f786a7',
//           500: '#f059a0', // rose-bonbon principal
//           600: '#e11d48',
//           700: '#be123c',
//           800: '#9f1239',
//           900: '#881337',
//           950: '#4c0519',
//         },
//       },
      
//       // Polices personnalisées
//       fontFamily: {
//         'dancing': ['var(--font-dancing-script)', 'cursive'],
//         'quicksand': ['var(--font-quicksand)', 'sans-serif'],
//         'sans': ['var(--font-quicksand)', 'system-ui', 'sans-serif'],
//       },
      
//       // Spacing personnalisé
//       spacing: {
//         '18': '4.5rem',
//         '88': '22rem',
//         '128': '32rem',
//       },
      
//       // Border radius personnalisés
//       borderRadius: {
//         'xl': '1rem',
//         '2xl': '1.5rem',
//         '3xl': '2rem',
//         '4xl': '2.5rem',
//       },
      
//       // Box shadows personnalisées
//       boxShadow: {
//         'croqdya': '0 10px 30px rgba(255, 105, 180, 0.1)',
//         'croqdya-hover': '0 20px 40px rgba(255, 105, 180, 0.2)',
//         'croqdya-active': '0 5px 15px rgba(255, 105, 180, 0.3)',
//         'glass': '0 8px 32px rgba(255, 105, 180, 0.15)',
//       },
      
//       // Gradients personnalisés
//       backgroundImage: {
//         'gradient-croqdya': 'linear-gradient(135deg, #FFF8DC 0%, #FEFEFE 50%, #F3E5AB 100%)',
//         'gradient-primary': 'linear-gradient(45deg, #FF69B4, #FFB6C1)',
//         'gradient-secondary': 'linear-gradient(135deg, #FFF8DC, #FEFEFE)',
//         'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 248, 220, 0.8))',
//         'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 220, 0.9))',
//       },
      
//       // Animations personnalisées
//       animation: {
//         'float': 'float 3s ease-in-out infinite',
//         'bounce-soft': 'bounce-soft 2s infinite',
//         'pulse-glow': 'pulse-glow 2s infinite',
//         'gradient-shift': 'gradientShift 8s ease infinite',
//         'fade-in': 'fadeIn 0.5s ease-in-out',
//         'slide-up': 'slideUp 0.6s ease-out',
//       },
      
//       // Keyframes personnalisées
//       keyframes: {
//         float: {
//           '0%, 100%': { 
//             transform: 'translateY(0px) rotate(0deg)' 
//           },
//           '50%': { 
//             transform: 'translateY(-10px) rotate(2deg)' 
//           },
//         },
//         'bounce-soft': {
//           '0%, 20%, 50%, 80%, 100%': { 
//             transform: 'translateY(0)' 
//           },
//           '40%': { 
//             transform: 'translateY(-10px)' 
//           },
//           '60%': { 
//             transform: 'translateY(-5px)' 
//           },
//         },
//         'pulse-glow': {
//           '0%': { 
//             boxShadow: '0 0 0 0 rgba(255, 105, 180, 0.7)' 
//           },
//           '70%': { 
//             boxShadow: '0 0 0 10px rgba(255, 105, 180, 0)' 
//           },
//           '100%': { 
//             boxShadow: '0 0 0 0 rgba(255, 105, 180, 0)' 
//           },
//         },
//         gradientShift: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         slideUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       },
      
//       // Backdrop blur personnalisé
//       backdropBlur: {
//         'glass': '20px',
//         'soft': '10px',
//       },
      
//       // Typography personnalisée
//       fontSize: {
//         'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
//         'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
//       },
      
//       // Z-index personnalisés
//       zIndex: {
//         '60': '60',
//         '70': '70',
//         '80': '80',
//         '90': '90',
//         '100': '100',
//       },
      
//       // Transitions personnalisées
//       transitionDuration: {
//         '400': '400ms',
//         '600': '600ms',
//         '800': '800ms',
//       },
      
//       // Aspect ratios personnalisés
//       aspectRatio: {
//         'product': '4/3',
//         'card': '3/2',
//       },
//     },
//   },
//   plugins: [
//     // Plugin pour les utilities personnalisées
//     function({ addUtilities }: { addUtilities: any }) {
//       const newUtilities = {
//         '.glass-effect': {
//           background: 'rgba(255, 255, 255, 0.9)',
//           backdropFilter: 'blur(20px)',
//           border: '1px solid rgba(255, 105, 180, 0.1)',
//         },
//         '.text-gradient': {
//           background: 'linear-gradient(45deg, #FF69B4, #DDA0DD)',
//           '-webkit-background-clip': 'text',
//           'background-clip': 'text',
//           '-webkit-text-fill-color': 'transparent',
//         },
//         '.shadow-croqdya-inset': {
//           boxShadow: 'inset 0 2px 4px 0 rgba(255, 105, 180, 0.1)',
//         },
//       }
//       addUtilities(newUtilities)
//     },
    
//     // Ajoutez d'autres plugins si nécessaire
//     // require('@tailwindcss/forms'),
//     // require('@tailwindcss/typography'),
//   ],
  
//   // Darkmode support
//   darkMode: 'class',
// };

// export default config;