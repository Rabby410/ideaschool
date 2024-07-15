/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 4px 8px 0px rgba(190, 190, 190, 0.15);',
        'custom-hover': '0px 8px 16px 0px rgba(190, 190, 190, 0.30)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF7062",
        borderl: "rgba(228, 231, 236, 0.50)",
        borderB: "rgba(0, 0, 0, 0.30)",
        'shadow-border': "rgb(210 213 219)",
        'shadow-background': "rgba(252, 252, 253, 0.50)",
      },
    },
  },
  plugins: [],
};
