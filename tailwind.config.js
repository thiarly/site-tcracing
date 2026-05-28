/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#05070a",
        ink: "#090d12",
        line: "rgba(148, 163, 184, 0.16)",
        signal: "#1d9bf0",
        pulse: "#66c7ff",
      },
      fontFamily: {
        display: ['"Inter Tight"', "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(29, 155, 240, 0.20)",
        insetLine: "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        scan: "scan 5s linear infinite",
        reveal: "reveal 0.8s ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
