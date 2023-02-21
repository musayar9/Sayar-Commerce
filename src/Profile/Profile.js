import React, { useState } from 'react'
import ProfileAccount from './ProfileAccount'
import {FaUserCircle} from 'react-icons/fa'
function Profile() {

    const [profile, setProfile] = useState(false)
  return (
    <div>
          <button className="peer text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center  border border-gray-300 px-4 py-2 rounded-lg" id="try"
     onClick={()=>{setProfile(profile  ? false : true)}}> <span className='flex space-x-2 hover:text-violet-700 duration-500'><span>Musa</span><FaUserCircle size={24}/></span> </button>
 
   <div className= ' hidden peer-hover:flex hover:flex absolute  mt-2 z-10'>  <ProfileAccount/> </div>
    </div>
  )
}

export default Profile
