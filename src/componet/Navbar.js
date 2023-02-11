import React from 'react'
import {AiFillLike} from 'react-icons/ai'
import Local from '../Local/Local.js'
import Profile from '../Profile/Profile.js'
import BasketNavbar from '../Basket/BasketNavbar.js'

import SearchStatus from '../Search/SearchStatus.js'


function Navbar() {
  return (
    <div className='container '>

      <nav className='flex items-center justify-between'>
     
        <ul className='flex items-center justify-center ml-14 space-x-3'>
            <li className='flex border border-gray-500 btn bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 space-x-2'>Anasayfa </li>
            <li className='flex border border-gray-500 btn bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 space-x-2'>Ürünler</li>
            <li className="flex relative"> 
                <SearchStatus/>

            </li>
           
        </ul>
        <h4 className='text-4xl font-semibold text-white italic'>Sayar</h4>
        <ul className='flex items-center justify-around space-x-3 '>
        <li className='relative mt-2 flex'><Local/></li>
          <li className='relative mt-2 flex '><BasketNavbar/></li>
          <li className='flex border border-gray-500 btn bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 space-x-2'>   <span className='hover:text-violet-700 flex duration-500 items-center space-x-2'><span>Favorilerim</span><AiFillLike size={24}/></span>     </li>
          <li className='flex mt-2 relative '><Profile/> </li>
   
      
        </ul>

      
      </nav>
    </div>
  )
}

export default Navbar
