import React, { useState } from 'react'
import FavouriteProduct from './FavouriteProduct'
import {AiFillLike} from 'react-icons/ai'
import { useSite } from '../Context/SiteContext'

function FavouriteNavbar() {
    const [isFavourite, setFavourite] = useState(false)
    const {favourite, starFavourite} = useSite()
    const countFavourite =  favourite.length +starFavourite.length;
    console.log("star Count" , countFavourite)

  return (
    <div>
    <button className="text-sm  text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center border border-gray-300 px-1 py-1 md:px-2 md:py-2 rounded-lg" id="try"
   onClick={()=>{setFavourite(isFavourite  ? false : true)}}> <span className='flex lg:space-x-2 hover:text-violet-700 duration-500'><span className='hidden lg:block'>Favorilerim
   
   {countFavourite > 0 &&(<span className='ml-1'>({countFavourite})</span>)}
   </span><AiFillLike size={18}/></span> </button>
  <div className='absolute  mt-2 z-40'>{isFavourite ?  <FavouriteProduct/> : null}</div> 

 
  </div>
  )
}

export default FavouriteNavbar
