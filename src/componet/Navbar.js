import React from 'react'

import Local from '../Local/Local.js'
import Profile from '../Profile/Profile.js'
import BasketNavbar from '../Basket/BasketNavbar.js'

import SearchStatus from '../Search/SearchStatus.js'
import FavouriteNavbar from '../Favourite/FavouriteNavbar.js'
import  {FaProductHunt} from 'react-icons/fa'
import  {AiTwotoneHome} from 'react-icons/ai'

import CategoryArea from '../Categories/CategoryArea.js'


function Navbar() {

  return (
    <div className='container'>

      <nav className='flex items-center justify-between'>
      <ul className='flex items-center justify-around space-x-1 lg:space-x-2 ml-0 md:ml-4'>
        <li className='relative mt-2'><Local/></li>
          <li className='relative mt-2  '><BasketNavbar/></li>
          <li className=' mt-2 relative'>  <FavouriteNavbar/>   </li>
          <li className='flex text-sm  border border-gray-300 px-1 py-1 md:px-2 md:py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 cursor-pointer space-x-2'> <span className='flex lg:space-x-2 hover:text-violet-700 duration-500'><span className='hidden lg:block'>Prouct</span><FaProductHunt size={18}/></span>  </li>

        </ul>
        <h4 className='text-3xl lg:text-4xl font-semibold text-white italic -mt-2 space-x-2'>Sayar</h4>
        <ul className='flex items-center justify-center mr-0 md:mr-4 space-x-2'>
        <li className="hidden  lg:flex relative "> 
                <SearchStatus/>

            </li>
            <li className=' mt-2 relative '><Profile/> </li>
          <li className='lg:hidden mt-2 relative'><CategoryArea/></li>
            <li className='flex text-sm border border-gray-300 px-1 py-1 md:px-2 md:py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-2 cursor-pointer space-x-2'><span className='flex lg:space-x-2 hover:text-violet-700 duration-500'><span className='hidden lg:block'>Home</span><AiTwotoneHome size={18}/></span>  </li>
      </ul>

      </nav>
    </div>
  )
}

export default Navbar
