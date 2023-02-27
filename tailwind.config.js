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
        "84":"28rem",
        "85":"30rem",
        "90":"40rem",
        "97":"45rem",
        "98":"50rem",
        "110":"72rem",
        "120":"75rem",
        "130":"80rem",
        "140":"87rem",
        "150":"90rem"
      }
    },
  },
  plugins: [],
}




