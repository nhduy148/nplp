import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Design tokens from Figma
        primary: "#212b36",
        secondary: "#637381",
        accent: "#f5c349",
        muted: "#919eab",
        dark: "#303236",
        light: "#ffffff",
        gray: {
          100: "#f9f9fb",
          200: "#edf0f5",
          300: "#dfe3e8",
          400: "#b4bcc5",
          500: "#8d95a3",
          600: "#5b6371",
          700: "#3f3f3f",
          800: "#27272a",
          900: "#242424",
        },
        blue: {
          100: "#e0f0ff",
          500: "#0b5fea",
          600: "#0a68ff",
          700: "#0079f2",
          800: "#104dbd",
        },
        yellow: {
          500: "#f5c349",
          600: "#f2bd00",
          700: "#dead00",
          800: "#b28b00",
        },
        red: {
          500: "#ed3551",
          600: "#db2347",
          700: "#db1f26",
          800: "#f90404",
        },
        green: {
          500: "#00b21d",
        },
        teal: {
          500: "#00b2b2",
        },
        purple: {
          500: "#7900b2",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
