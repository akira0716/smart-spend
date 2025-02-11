import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'custom-h': 'calc(100% - 33px)',
      },
      boxShadow: {
        'custom-inset': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
