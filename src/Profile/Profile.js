import React, { useState } from 'react'
import ProfileAccount from './ProfileAccount'
import {FaUserCircle} from 'react-icons/fa'
function Profile() {

    const [profile, setProfile] = useState(false)
  return (
    <div>
          <button className=" text-sm peer text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center  border border-gray-300 px-1 py-1 md:px-2 md:py-2 rounded-lg" id="try"
     onClick={()=>{setProfile(profile  ? false : true)}}> <span className='flex lg:space-x-2 hover:text-violet-700 duration-500'><span className='hidden lg:block'>Musa</span><FaUserCircle size={18}/></span> </button>
 
   <div className= ' hidden peer-hover:flex hover:flex absolute mt-1 lg:mt-2 z-20'>  <ProfileAccount/> </div>
    </div>
  )
}

export default Profile
