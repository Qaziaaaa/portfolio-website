import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440px' },
      colors: {
        black: '#000',
        white: '#fff',
        zinc: {
          100: '#F8F8F8', 200: '#F0F0F0', 300: '#E8E8E8',
          400: '#D8D8D8', 500: '#C8C8C8', 600: '#B0B0B0',
          700: '#787878', 800: '#505050', 900: '#383838',
        },
      },
      fontFamily: { sora: ['Sora', 'sans-serif'] },
    },
  },
  plugins: [],
}
export default config
