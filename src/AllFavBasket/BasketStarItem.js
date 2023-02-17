import React from 'react'

function BasketStarItem({star, favourite}) {
  
  return (
    <>
      <li className='flex items-center space-x-2 px-2'>
        <img className='w-14 h-14 rounded-xl flex-shrink-0 ' src={favourite.image} alt={favourite.alt}/>
        <div>
            <p className='text-md font-bold pl-2 truncate'>{favourite.title}</p>
            <p className='pl-2 text-mc font-bold text-red-800'>{star.amount}
             Adet = {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(star.amount * favourite.price)}TL</p>
        </div>
      </li>
    </>
  )
}

export default BasketStarItem
