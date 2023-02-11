/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container:{
        center:true
      },
      width:{
        "98":"45rem"
      }
    },
  },
  plugins: [],
}




// function Local() {
//   const [isActive, setIsActive] = useState(false)
// return (
//   <div>
      
// <button className="border border-gray-600 bg-blue-600 text-white text-xl text-center  p-2 rounded-xl font-bold" id="try" onClick={()=>{setIsActive(isActive  ? false : true)}}>Konum </button>
// <p className='shrink-0'>{isActive ?  <Location/> : null}</p>
//   </div>
// )
// }