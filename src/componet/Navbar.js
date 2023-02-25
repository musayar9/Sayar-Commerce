import React from 'react'

import Local from '../Local/Local.js'
import Profile from '../Profile/Profile.js'
import BasketNavbar from '../Basket/BasketNavbar.js'

import SearchStatus from '../Search/SearchStatus.js'
import FavouriteNavbar from '../Favourite/FavouriteNavbar.js'


function Navbar() {
  return (
    <div className='container'>

      <nav className='flex items-center justify-between'>
      <ul className='flex items-center justify-around space-x-2 ml-4'>
        <li className='relative mt-2'><Local/></li>
          <li className='relative mt-2  '><BasketNavbar/></li>
          <li className=' mt-2 relative'>  <FavouriteNavbar/>   </li>
          <li className='flex text-sm  border border-gray-300 px-2 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 space-x-2'>Ürünler </li>
         
   
      
        </ul>
        <h4 className='text-4xl font-semibold text-white italic'>Sayar</h4>
        <ul className='flex items-center justify-center mr-4 space-x-2'>
        <li className="flex relative"> 
                <SearchStatus/>

            </li>
            <li className='flex text-sm border border-gray-300 px-2 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 space-x-2'>Anasayfa </li>
            <li className=' mt-2 relative '><Profile/> </li>
    
           
        </ul>
      


      
      </nav>
    </div>
  )
}

export default Navbar
