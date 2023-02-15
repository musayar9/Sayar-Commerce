import React, { useState } from 'react'
import { useSite } from '../Context/SiteContext'
import FavouriteLikeItem from './FavouriteLikeItem'
import products from '../Api/product.json'
function FavouriteProduct() {
    const { favourite } = useSite()
    const [pageFavourite, setPageFavourite] = useState(true)
 
  return (



<>
{pageFavourite ?    <div className='space-y-4 p-2 border border-gray-700 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl w-72 text-md cursor-pointer text-white'>
            <h3 className='text-center text-xl font-bold'>Beğendiklerim</h3>
           

              
              <ul className=' space-y-2'>
               
               {
                   favourite.map((like)=>( 
                       <FavouriteLikeItem key={like.id} like={like} product={products.find(product=>product.id === like.id)}/>
                       
                   )) 
               }
             </ul> 
          
         
            
             
              <div className='border-bottom border-gray-500'></div>
              <button className='btn text-white w-64 border border-gray-500 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500' onClick={()=>setPageFavourite(false)}>Favorileri Gör</button>
            </div>
            
            : null}

</>

  
  )
}

export default FavouriteProduct
