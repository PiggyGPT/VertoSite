import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        'albor-gold': "var(--albor-gold)",
        'albor-copper': "var(--albor-copper)",
        'albor-plum': "var(--albor-plum)",
        'albor-teal': "var(--albor-teal)",
        'albor-purple': "var(--albor-purple)",
        'albor-blue': "var(--albor-blue)",
        'albor-green': "var(--albor-green)",
        'albor-orange': "var(--albor-orange)",
        'albor-cyan': "var(--albor-cyan)",
        'albor-gray': {
          50: "var(--albor-gray-50)",
          100: "var(--albor-gray-100)",
          200: "var(--albor-gray-200)",
          400: "var(--albor-gray-400)",
          500: "var(--albor-gray-500)",
          600: "var(--albor-gray-600)",
          900: "var(--albor-gray-900)",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        "1000": "1000px",
      },
      rotate: {
        "x-10": "rotateX(10deg)",
        "-x-10": "rotateX(-10deg)",
        "x-0": "rotateX(0deg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
