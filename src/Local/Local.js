import React, { useState } from 'react'
import Location from './Location'
import {MdOutlineLocationOn} from 'react-icons/md'


function Local() {
    const [isActive, setIsActive] = useState(false)
  return (
    <div>
     

    <button className="text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center px-1 py-1 md:px-2 md:py-2 rounded-lg border border-gray-300 hover:border-violet-300" id="try"
     onClick={()=>{setIsActive(isActive  ? false : true)}}> <span className='flex hover:text-violet-700 lg:space-x-2 duration-500'><span className='hidden lg:block'> Konum </span>  <MdOutlineLocationOn size={18}/> </span>   </button>
 
   <div className='absolute  mt-2 z-20'>{isActive ?  <Location/> : null}</div>
 

   
        


    </div>
  )
}

export default Local
