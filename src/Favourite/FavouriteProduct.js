import React, { useState } from 'react'
import { useSite } from '../Context/SiteContext'
import FavouriteLikeItem from './FavouriteLikeItem'
import products from '../Api/product.json'
import StartData from '../AllFavourite/StartData'
function FavouriteProduct() {
    const { favourite, emptyFavourite, setEmptyFavourite} = useSite()
    const [pageFavourite, setPageFavourite] = useState(true)

    const handleClick=()=>{
      setPageFavourite(false)
      setEmptyFavourite(false)
    }
    
  return (



<>

{pageFavourite ?   
  <div className=' space-y-2 p-2 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500   rounded-xl w-48 md:w-60 lg:w-72 text-xs lg:text-sm cursor-pointer text-white'>
             <h3 className='text-center text-xs lg:text-sm font-bold'>Beğendiklerim</h3>
            
             {emptyFavourite ?
             
             <>
               <div className=' basket h-[200px] overflow-x-auto space-y-2'>
               <ul className=' space-y-2'>
                
                {
                    favourite.map((like)=>( 
                        <FavouriteLikeItem key={like.id} like={like}
                         product={products.find(product=>product.id === like.id)}/>
                        
                    )) 
                }
              </ul> 
           <StartData/>
               </div>
          
          
             </>

: <p className="text-center text-xs">Beğendiğiniz Ürünler Burada Yer alır</p>}
              
               <div className='border-b border-gray-300'></div>
               <div className='flex items-center justify-evenly space-x-2'>
                {emptyFavourite ?  <button className='text-xs lg:text-sm text-white w-full px-1 py-1 lg:px-2 lg:py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70 
                 from-purple-500 to-pink-500 rounded-xl' onClick={handleClick}>Favoriler Sayfası'na Git</button> 
                 :  <button className='text-xs lg:text-sm text-white w-full px-1 py-1 lg:px-2 lg:py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70 
                 from-purple-500 to-pink-500 rounded-xl' onClick={()=>setEmptyFavourite(true)}>Favoriler Gör</button> }
               {/* <button className=' text-white w-full px-2 py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70 
                from-purple-500 to-pink-500 rounded-xl' onClick={()=>setPageFavourite(false)}>Favoriler</button>
               <button className=' text-white w-full px-2 py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70 
                from-purple-500 to-pink-500 rounded-xl' onClick={()=>setEmptyFavourite(emptyFavourite ? false : true)}>Favorileri Gör</button> */}
               </div>

             </div>
             
             : null}
 




</>

  
  )
}

export default FavouriteProduct
