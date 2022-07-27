/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "text-very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "text-soft-red": "hsl(14, 88%, 65%)",
        "text-very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "text-dark-grayish-blue": "hsl(240, 6%, 50%)",
        "gradient-soft-violet": "hsl(273, 75%, 66%)",
        "gradient-soft-blue": "hsl(240, 73%, 65%)",
        "divider-grayish-blue": "hsl(240, 5%, 91%)",
      },
      fontSize: {
        body: "12px",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
