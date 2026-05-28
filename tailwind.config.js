/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#050816",
          elevated: "#0B1020",
          card: "rgba(11, 16, 32, 0.72)",
          line: "rgba(139, 92, 246, 0.12)",
        },
        space: {
          void: "#050816",
          deep: "#0B1020",
          panel: "rgba(11, 16, 32, 0.85)",
          line: "rgba(139, 92, 246, 0.1)",
          mist: "rgba(167, 139, 250, 0.06)",
        },
        lavender: {
          400: "#9b97ad",
          500: "#7c7794",
          600: "#65617a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass:
          "0 0 0 1px rgba(167, 139, 250, 0.06) inset, 0 24px 80px -12px rgba(0, 0, 0, 0.7)",
        glow: "0 0 48px -8px rgba(99, 102, 241, 0.2)",
        "glow-violet": "0 0 40px -10px rgba(139, 92, 246, 0.25)",
      },
      animation: {
        gentleBounce: "gentleBounce 0.6s ease-in-out 1",
        "star-drift-slow": "starDrift 120s linear infinite",
        "star-drift-mid": "starDrift 85s linear infinite",
        "star-drift-fast": "starDrift 55s linear infinite",
        "celestial-drift": "celestialDrift 95s ease-in-out infinite",
        "celestial-drift-slow": "celestialDriftSlow 125s ease-in-out infinite reverse",
        "celestial-drift-moon": "celestialMoon 78s ease-in-out infinite",
      },
      keyframes: {
        gentleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        starDrift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-80px, 40px, 0)" },
        },
        celestialDrift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(14px, -12px, 0)" },
        },
        celestialDriftSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-10px, 16px, 0)" },
        },
        celestialMoon: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "33%": { transform: "translate3d(6px, -8px, 0)" },
          "66%": { transform: "translate3d(-5px, 6px, 0)" },
        },
      },
      backgroundImage: {
        "fade-radial":
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(139, 92, 246, 0.12), transparent 55%)",
        "accent-gradient": "linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%)",
      },
    },
  },
  plugins: [],
}
