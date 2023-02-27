import React from 'react'

function BasketStarItem({star, favourite}) {
 const salesFavourite = favourite.price - favourite.price * 0.20
 const salesPrice = star.amount * salesFavourite
 
  return (
    <>
      <li className='flex items-center space-x-1 space-x-2 px-2'>
        <img className='w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex-shrink-0 ' src={favourite.image} alt={favourite.alt}/>
        <div className='pl-1 md:pl-2'>
            <p className='text-xs md:text-md font-semibold  truncate'>{favourite.title}</p>
            <p className=' text-xs md:text-md font-bold text-red-700'>{star.amount}  Adet = 
             {favourite.price > 17000 ? 
             <span>  {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(salesPrice)}</span>
             :
             <span>  {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(star.amount * favourite.price)}</span>
             }
           </p>
        </div>
      </li>
    </>
  )
}

export default BasketStarItem
