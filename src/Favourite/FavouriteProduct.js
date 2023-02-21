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
  <div className=' space-y-4 p-2 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl w-80 text-md cursor-pointer text-white'>
             <h3 className='text-center text-xl font-bold'>Beğendiklerim</h3>
            
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

: <p className="text-center">Beğendiğiniz Ürünler Burada Yer alır</p>}
              
               <div className='border-b border-gray-300'></div>
               <div className='flex items-center justify-evenly'>
                {emptyFavourite ?  <button className=' text-white w-full px-2 py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70 
                 from-purple-500 to-pink-500 rounded-xl' onClick={handleClick}>Favoriler Sayfası'na Git</button> 
                 :  <button className=' text-white w-full px-2 py-2 border border-gray-300 bg-gradient-to-r hover:opacity-70 
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
