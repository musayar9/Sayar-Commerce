import React from 'react'
import { useState } from 'react'
import {SlBasketLoaded} from 'react-icons/sl'
import BasketProduct from './BasketProduct'
function BasketNavbar() {
    const [isBasket, setIsBasket] = useState(false)
    
  return (
    <div>
      <button className="group  text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center  border  border-gray-300 px-1 py-1 md:px-2 md:py-2 rounded-lg text-sm" id="try"
     onClick={()=>{setIsBasket(isBasket  ? false : true)}}> <span className='flex lg:space-x-2 hover:text-violet-700 duration-500'><span className='hidden lg:block'>Sepetim</span><SlBasketLoaded size={18}/></span> </button>
   
   <div className=' absolute  mt-2 z-20'>{isBasket ?  <BasketProduct/> : null}</div>
   
    </div>
  )
}

export default BasketNavbar
