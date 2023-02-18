import React, { useState } from 'react'
import { useSite } from '../Context/SiteContext'
import FavouriteLikeItem from './FavouriteLikeItem'
import products from '../Api/product.json'
import StartData from '../AllFavourite/StartData'
function FavouriteProduct() {
    const { favourite } = useSite()
    const [pageFavourite, setPageFavourite] = useState(true)
 
    
  return (



<>
{pageFavourite ?    <div className=' space-y-4 p-2 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl w-80 text-md cursor-pointer text-white'>
            <h3 className='text-center text-xl font-bold'>Beğendiklerim</h3>
           

              <div className=' basket h-[200px] overflow-x-auto'>
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
         
         
            
             
              <div className='border-b border-gray-300'></div>
              <button className=' text-white w-full px-2 py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500 rounded-xl' onClick={()=>setPageFavourite(false)}>Favorileri Gör</button>
            </div>
            
            : null}

</>

  
  )
}

export default FavouriteProduct
