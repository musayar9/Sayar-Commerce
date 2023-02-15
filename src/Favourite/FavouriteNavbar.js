import React, { useState } from 'react'
import FavouriteProduct from './FavouriteProduct'
import {AiFillLike} from 'react-icons/ai'

function FavouriteNavbar() {
    const [isFavourite, setFavourite] = useState(false)

  return (
    <div>
    <button className="  text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center border border-gray-300 px-4 py-2 rounded-lg" id="try"
   onClick={()=>{setFavourite(isFavourite  ? false : true)}}> <span className='flex space-x-2 hover:text-violet-700 duration-500'><span>Favorilerim</span><AiFillLike size={24}/></span> </button>
  <div className='absolute w-98 mt-2 z-40'>{isFavourite ?  <FavouriteProduct/> : null}</div> 

 
  </div>
  )
}

export default FavouriteNavbar
