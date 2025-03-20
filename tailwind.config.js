/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",  // Para Next.js
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",    // Para proyectos fuera de Next.js
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };