import React from 'react'
import {MdLocalGroceryStore} from 'react-icons/md'
import {FaUserEdit} from 'react-icons/fa'
import {FcFeedback} from 'react-icons/fc'
import {IoTicket} from 'react-icons/io5'
import {FaWallet} from 'react-icons/fa'
import {FcAssistant} from 'react-icons/fc'
import {IoLogOutOutline} from 'react-icons/io5'
function ProfileAccount() {
  return (
    <>

    <ul className='space-y-2 p-3 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  rounded-xl w-32 cursor-pointer text-white'>
        <li className='flex space-x-2 items-center  text-xs  hover:text-pink-700 duration-500'><MdLocalGroceryStore/> <span>Sepetim</span></li>
        <li className='flex space-x-2 items-center text-xs hover:text-pink-700 duration-500'><FaUserEdit/><span>Kullanıcı B.</span></li>
        <li className='flex space-x-2 items-center text-xs hover:text-pink-700 duration-500'><FcFeedback/><span>Değerlen...</span></li>
        <li className='flex space-x-2 items-center text-xs hover:text-pink-700 duration-500'> <IoTicket/><span>İndirim Kuponlarım</span></li>
        <li className='flex space-x-2 items-center text-xs hover:text-pink-700 duration-500'><FaWallet/><span>Sayar Cüzdanım</span></li>
        <li className='flex space-x-2 items-center text-xs hover:text-pink-700 duration-500'><FcAssistant/><span>Sayar Asistan</span></li>
        <li className='flex space-x-2 items-center text-xs hover:text-pink-700 duration-500'><IoLogOutOutline/><span>Çıkış Yap</span></li>
    </ul>
      
    </>
  )
}

export default ProfileAccount
