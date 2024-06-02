import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'zilla-slab': ['Zilla Slab', 'serif'],
        'caprasimo': ['Caprasimo', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["bumblebee"],
  },
} satisfies Config
