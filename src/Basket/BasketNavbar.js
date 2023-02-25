import React from 'react'
import { useState } from 'react'
import {SlBasketLoaded} from 'react-icons/sl'
import BasketProduct from './BasketProduct'
function BasketNavbar() {
    const [isBasket, setIsBasket] = useState(false)
    
  return (
    <div>
      <button className="group  text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center  border  border-gray-300 px-2 py-2 rounded-lg text-sm" id="try"
     onClick={()=>{setIsBasket(isBasket  ? false : true)}}> <span className='flex space-x-2 hover:text-violet-700 duration-500'><span>Sepetim</span><SlBasketLoaded size={20}/></span> </button>
   
   <div className=' absolute  mt-2 z-20'>{isBasket ?  <BasketProduct/> : null}</div>
   
    </div>
  )
}

export default BasketNavbar
