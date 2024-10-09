/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#e8f0ff",
        "custom-white": "#ffffff",
        EBEBEB:"#EBEBEB",
        homeListbg: "#E8F0FF",
        blue: "#004fe6",
        whiteee: "#D9E6FF",
        mediumslateblue: {
          100: "#065cff",
          200: "rgba(0, 79, 230, 0.1)",
        },
        gray: {
          100: "#fbfbfb",
          150: "#f4f4f4",
          200: "rgba(255, 255, 255, 0.5)",
        },
        "white-color": "#fff",
        "light-blue": "#cedfff",
        slategray: "#5d6d80",
        "dark-blue": "#0e275d",
        honeydew: "#dffff2",
        lavender: {
          100: "#e8f0ff",
          200: "#ebe5ff",
          300: "#d9e6ff",
        },
        azure: "#f3fffe",
        bcb8f3:"#dad8f3",
        orange: "#ffa41c",
        chocolate: {
          100: "#cc7000",
          200: "rgba(204, 112, 0, 0.09)",
        },
        whitesmoke: "rgba(235, 235, 235, 0.5)",
        steelblue: {
          100: "#42598f",
          200: "rgba(66, 89, 143, 0.09)",
        },
        royalblue: {
          100: "#2675ff",
          200: "rgba(38, 117, 255, 0.09)",
        },
        darkslateblue: {
          100: "rgba(14, 39, 93, 0.1)",
          200: "rgba(14, 39, 93, 0.05)",
          300: "rgba(14, 39, 93, 0.5)",
          400: "rgba(14, 39, 93, 0.6)",
        },
        ghostwhite: "rgba(249, 250, 254, 0.3)",
        accent: "#edf7ff",
        gainsboro: {
          100: "#e6e6e6",
          200: "#e5e5e5",
          300: "#dedede",
          400: "#d4dee6",
          500: "rgba(212, 222, 230, 0.09)",
        },
        darkgray: "#a9abb1",
        dimgray: {
          100: "#595e6a",
          200: "rgba(89, 94, 106, 0.8)",
        },
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        "p-18-bold": "Nunito",
        "h5-22-bold": "Outfit",
        "Nunito": "Nunito",
        "Outfit": "Outfit",
        "paragraph-18-medium": "Poppins",
      },
      borderRadius: {
        "69xl": "88px",
        "3xs": "10px",
        "34xl": "53px",
        "35xl": "54px",
        "81xl": "100px",
        "52xl": "71px",
        "3xl": "22px",
        sm: "14px",
        "37xl": "56px",
        "31xl": "50px",
        "71xl": "90px",
        "9xl": "28px",
        "11xl": "30px",
        "61xl": "80px",
        "23xl": "42px",
        "32xl": "51px",
        "53xl": "72px",
        "43xl": "62px",
        "7xl": "26px",
      },
      borderColor: {
        "custom-light-blue": "#F4F8FF", // Example custom border color
        "dark-blue": "#0E275D"
        // Add other custom border colors here
      },
      borderWidth: {
        "custom-thin": "2px", // Example custom border width
        "custom-thick": "4px",
        // Add other custom border widths here
      },
    },
    fontSize: {
      'xs': '0.75rem',   // 12px
      'sm': '0.775rem',  // 14px
      'base': '1rem',    // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px (Desktop - 1920px)
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.5rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
      '9xl': '8rem',      // 128px
    },
    screens: {
    
      mobile: '640px',         // Mobile devices
      tablet: '768px',         // Tablets
      laptop: '1024px',        // Laptop (13-14 inch)
      desktop: '1300px',       // Large screens and desktops
      
    },
    
  },
  corePlugins: {
    preflight: false,
  },
};
