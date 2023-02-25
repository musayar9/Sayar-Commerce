import React from 'react'

function FavouriteLikeItem({like, product}) {
  return (
    <>
          <li className='flex items-center   space-x-1'>
          
            <img className='w-10 h-10 rounded-xl flex-shrink-0' src={product.image} alt={product.alt}/>
          <div className="">
          <p className='text-sm truncate  font-bold pl-2'>{product.title}</p>
          <p className='pl-2 text-red-700 font-bold text-sm'> 
          {
            product.price > 1000 ? <span>{new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(product.price-product.price *0.20)}</span>
              : <span>{new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(product.price)}</span>
          }
      
          
          
          
          </p>
          </div>
       
     
        </li>
    </>
  )
}

export default FavouriteLikeItem
