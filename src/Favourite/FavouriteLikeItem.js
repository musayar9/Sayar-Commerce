import React from 'react'

function FavouriteLikeItem({like, product}) {
  return (
    <>
          <li className='flex items-center   space-x-1'>
          
            <img className='w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex-shrink-0' src={product.image} alt={product.alt}/>
          <div className="pl-1 lg:pl-2">
          <p className='text-xs lg:text-sm truncate  font-bold  '>{product.title}</p>
          <p className=' text-red-700 font-bold text-xs lg:text-sm'> 
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
