import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-hero": "url('/bg.png')",
        "bg-hero-mobile": "url('/bg-mobile.png')",
        "bg-client": "url('/bg-client.png')"
      },
      colors: {
        primary: {
        "blue": "#2ABDE2"
        },
        secondary: {
          "white": "#FFFFFF",
          "black": "#111111",
          "grey-100": "#F1F5FF",
          "grey-200": "#E1E1E1",
          "grey-300": "#959595",
          "grey-400": "#777777",
          "grey-500": "#595959",
          "dark-blue": "#0B1C30"
        },
        error: {
          "warning": "#F20000"
        },
        tabs: {
          "001": "#4285F4",
          "002": "#2E8B57",
          "003": "#FF9E00",
          "004": "#F94E1D",
          "005": "#7B68EE",
        },
        gradient: {
          "01": "linear-gradient(90deg, #733480 0%, #FD6748 100%)"
        }
      },
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"]
      },
      fontWeight: {
        'heading-01': '700',
        'heading-02': '600',
        'heading-03': '600',
        'heading-04': '400',
        'heading-05': '500',
        'paragraph-01': '400'
      },
    },
  },
  plugins: [],
};
export default config;
