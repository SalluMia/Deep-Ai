/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "spin-stop": "spin-stop 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "spin-stop-infinite":
          "spin-stop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "spin-stop": {
          "0%, 100%": {
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            transform: "rotate(360deg) scale(1.1)",
          },
        },
      },
      fontFamily: {
        varino: ["var(--font-varino)"],
        monosans: ["var(--font-monosans)"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
