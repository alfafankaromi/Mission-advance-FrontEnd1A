/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijau: {
          utama: '#3ECF4C',
          hover: '#35B843',
          tekan: '#2EA03A',
          muda: '#E8F9EE',
        },
        kuning: {
          utama: '#F39C12',
          hover: '#D68910',
          muda: '#FEF9E7',
        },
        merah: {
          utama: '#E74C3C',
          muda: '#FDEDEC',
        },
        bgKrem: '#FFFDF7',
        teksGelap: '#222222',
        teksAbu: '#64748B',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
