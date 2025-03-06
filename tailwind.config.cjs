/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}",
      "./public/**/*.html",
    ],
    theme: {
      extend: {
        colors: {
          // Tu paleta DRINKS, por ejemplo
          drinks: {
            backgroundPrimaryColor: "#0d0d1a",
            neonTwoColor:"#e7c500",
            neonOneColor:"#00ff00",
            neonThreeColor:"#f82d97",
            neonFourColor:"#c501e2",
            neonPrimaryColor:"#00ffff",
            whiteColor: "#ffffff",
            darkBlack: "#010001",
            deepCyan: "#001111",
          },
        },
      },
    },
    plugins: [],
  };
  