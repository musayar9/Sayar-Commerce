import React from 'react'
import { MdLocalGroceryStore } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'
import { FcFeedback } from 'react-icons/fc'
import { IoTicket } from 'react-icons/io5'
import { FaWallet } from 'react-icons/fa'
import { FcAssistant } from 'react-icons/fc'
import { IoLogOutOutline } from 'react-icons/io5'
function ProfileAccount() {
  return (
    <>

      <ul className='space-y-2 p-2 lg:p-3 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  rounded-xl w-28  lg:w-32 cursor-pointer text-white'>
        <li className='flex space-x-2 items-center justify-center  truncate  text-xs  hover:text-pink-700 duration-500 border-b pb-2'><MdLocalGroceryStore title='Sepetim' /> <span className=''>Sepetim</span></li>
        <li className='flex space-x-2 items-center justify-center truncate  text-xs hover:text-pink-700 duration-500 border-b pb-2'><FaUserEdit title="Kullanıcı Bilgilerim" /><span className=''>Kullanıcı B.</span></li>
        <li className='flex space-x-2 items-center justify-center truncate  text-xs hover:text-pink-700 duration-500 border-b pb-2'><FcFeedback title='Değerlendirme' /><span className=''>Değerlen...</span></li>
        <li className='flex space-x-2 items-center justify-center truncate text-xs hover:text-pink-700 duration-500 border-b pb-2'> <IoTicket title='İndirim Kuponları' /><span className=''>İndirim K.</span></li>
        <li className='flex space-x-2 items-center justify-center truncate   text-xs  hover:text-pink-700 duration-500 border-b pb-2'><FaWallet title=" Sayar Cüzdan" /><span className=''>Sayar Cüz.</span></li>
        <li className='flex space-x-2 items-center justify-center truncate  text-xs hover:text-pink-700 duration-500 border-b pb-2'><FcAssistant title="SayarAsistan" /><span className=''>Sayar Asistan</span></li>
        <li className='flex space-x-2 items-center justify-center truncate   text-xs hover:text-pink-700 duration-500 '><IoLogOutOutline title='Çıkış Yap' /><span className=''>Çıkış Yap</span></li>
      </ul>

    </>
  )
}

export default ProfileAccount
