/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        dancing: ['var(--font-dancing-script)', 'cursive'],
      },
      colors: {
        'rose-bonbon': '#FF69B4',
        'cream': '#FFF8DC',
        'chocolat': '#8B4513',
        'vanille': '#F3E5AB',
        'fraise': '#FFB6C1',
        'or-rose': '#E8B4B8',
        'blanc-casse': '#FEFEFE',
        'violet-doux': '#DDA0DD',
      },
      backgroundImage: {
        'gradient-rose-fraise': 'linear-gradient(45deg, #FF69B4, #FFB6C1)',
        'gradient-custom': 'linear-gradient(45deg, var(--rose-bonbon), var(--fraise))',
      }
    },
  },
  plugins: [],
}