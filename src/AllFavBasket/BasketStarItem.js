import React from 'react'

function BasketStarItem({star, favourite}) {
 const salesFavourite = favourite.price - favourite.price * 0.20
 const salesPrice = star.amount * salesFavourite
 
  return (
    <>
      <li className='flex items-center space-x-2 px-2'>
        <img className='w-14 h-14 rounded-xl flex-shrink-0 ' src={favourite.image} alt={favourite.alt}/>
        <div>
            <p className='text-md font-semibold pl-2 truncate'>{favourite.title}</p>
            <p className='pl-2 text-md font-bold text-red-700'>{star.amount}  Adet = 
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
