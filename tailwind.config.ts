import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#149AF6",
        "light-sky-blue": "#99D5FF",
        "blue-jeans": "#4FB7FF",
        "blue-dark": "#107bc4",
        "blue-light": "#D8EEFF",
        jet: "#333",
        "sonic-silver": "#6c757d",
        "ghost-white": "#FAFAFF",
        "maximum-yellow-red": "#fdbb38",
        "navajo-white": "#FFDCA1",
        "misty-rose": "#fde2d9",
        "outrageous-orange": "#F46941",
        "lavender-web": "#E2E1FE",
        "medium-slate-blue": "#6D6BF9",
        "green-pantone": "#27AE48",
        honeydew: "#E0EFE6",
        "medium-orchid": "#B14AED",
        "rusty-red": "#D83246",
        "jungle-green": "#00B18A",
        "gray-x-11-gray": "#BDBDBD",
        "quick-silver": "#A0A0A0",
        "selective-yellow": "#F9BA2D",
        "rich-black-fogra-29": "#020D1C",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      keyframes: {
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-menu-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-right": "fade-in-right 1.5s ease-in-out",
        "fade-in-left": "fade-in-left 1.5s ease-in-out",
        "fade-in-down": "fade-in-down 1.5s ease-in-out",
        "fade-in-up": "fade-in-up 1.5s ease-out",
        "fade-in-menu-left": "fade-in-menu-left 0.3s ease-in-out",
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
