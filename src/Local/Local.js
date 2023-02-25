import React, { useState } from 'react'
import Location from './Location'
import {MdOutlineLocationOn} from 'react-icons/md'


function Local() {
    const [isActive, setIsActive] = useState(false)
  return (
    <div>
     

    <button className="text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center px-2 py-2 rounded-lg border border-gray-300 hover:border-violet-300" id="try"
     onClick={()=>{setIsActive(isActive  ? false : true)}}> <span className='flex hover:text-violet-700 space-x-2 duration-500'><span> Konum </span>  <MdOutlineLocationOn size={20}/> </span>   </button>
 
   <p className='absolute  mt-2 z-20'>{isActive ?  <Location/> : null}</p>
 

   
        


    </div>
  )
}

export default Local
