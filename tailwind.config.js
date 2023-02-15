/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}", "./public.html"],
  theme: {
    extend: {
     container:{
      center:true
     },

      width:{
        "85":"23rem",
        "98":"50rem",
        "120":"75rem",
        "140":"87rem",
        "150":"90rem"
      }
    },
  },
  plugins: [],
}




