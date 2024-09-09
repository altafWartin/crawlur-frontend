/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        homeListbg: "#E8F0FF",
        blue: "#004fe6",
        whiteee: "#D9E6FF",
        mediumslateblue: {
          100: "#065cff",
          200: "rgba(0, 79, 230, 0.1)",
        },
        gray: {
          100: "#fbfbfb",
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
      }, borderColor: {
        'custom-light-blue': '#F4F8FF', // Example custom border color
        // Add other custom border colors here
      },
      borderWidth: {
        'custom-thin': '2px', // Example custom border width
        'custom-thick': '4px',
        // Add other custom border widths here
      },
    },
    fontSize: {
      mini: "0.838rem",
      lg: "1.025rem",
      "3xl": "1.275rem",
      "13xl": "1.900rem",
      "2xl": "1.213rem",
      xl: "1.15rem",
      base: "0.9rem",
      "29xl": "2.9rem",
      "37xl": "3.3rem",
      "21xl": "2.4rem",
      inherit: "inherit",
    },
    screens: {
      mq450: "450px", // Custom breakpoint for 450px wide screens
      mq825: "825px",
      mq1425: "1425px", // Custom breakpoint for 1425px wide screens

      desktop: "1200px", // Large screens and desktops
      laptop: "1024px", // Laptop (13-14 inch)
      mobile: "640px", // Mobile devices
      tablet: "768px", // Tablets
      "small-mobile": "480px", // Small mobile devices
    },
  },
  corePlugins: {
    preflight: false,
  },
};
