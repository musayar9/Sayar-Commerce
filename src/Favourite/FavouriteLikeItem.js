import React from 'react'

function FavouriteLikeItem({like, product}) {
  return (
    <>
          <li className='flex items-center   space-x-1'>
          
            <img className='w-12 h-12 rounded-xl flex-shrink-0' src={product.image} alt={product.alt}/>
          <div className="">
          <p className='text-md truncate  font-bold pl-2'>{product.title}</p>
          <p className='pl-2 text-red-700 font-bold text-xl'> {product.price} TL</p>
          </div>
       
     
        </li>
    </>
  )
}

export default FavouriteLikeItem
