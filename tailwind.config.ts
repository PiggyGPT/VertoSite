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
        'verto-purple': "var(--verto-purple)",
        'verto-blue': "var(--verto-blue)",
        'verto-green': "var(--verto-green)",
        'verto-orange': "var(--verto-orange)",
        'verto-cyan': "var(--verto-cyan)",
        'verto-gray': {
          50: "var(--verto-gray-50)",
          100: "var(--verto-gray-100)",
          200: "var(--verto-gray-200)",
          400: "var(--verto-gray-400)",
          500: "var(--verto-gray-500)",
          600: "var(--verto-gray-600)",
          900: "var(--verto-gray-900)",
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
