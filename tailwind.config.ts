import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2E3338",
        "ink-soft": "#3C4348",
        "ink-muted": "#5B6469",
        slate: "#2C4A5C",
        sky: {
          DEFAULT: "#2C7CB0",
          press: "#1F5D86",
          "hover-dark": "#3A94CE",
          light: "#7EC4E8",
          pale: "#BFE2F5",
          tint: "#EAF4FA",
        },
        paper: "#F8F9FA",
        ash: "#EFF1F3",
        pink: {
          DEFAULT: "#F6C6CE",
          tint: "#FCEDEF",
          deep: "#A34A58",
        },
        orange: {
          DEFAULT: "#F7B679",
          tint: "#FDF0E1",
          band: "#FDE8D6",
          deep: "#B5651D",
        },
        focus: "#E39B45",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "cursive"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        input: "12px",
        well: "14px",
        card: "18px",
        panel: "20px",
      },
      spacing: {
        1.5: "4px",
        2.5: "8px",
        3.5: "12px",
        4.5: "20px",
        5.5: "32px",
        6.5: "48px",
        7.5: "88px",
      },
      keyframes: {
        setIn: {
          from: { transform: "translateY(14px)", opacity: "0" },
          to: { transform: "none", opacity: "1" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "set-in": "setIn 640ms 160ms ease-out both",
        ticker: "ticker 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
