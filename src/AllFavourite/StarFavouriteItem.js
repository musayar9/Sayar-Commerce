import React from 'react'

function StarFavouriteItem({favourite}) {
  return (
    <>
      <li className='flex items-center space-x-2'>
        <img className='w-12 h-12 rounded-full flex-shrink-0' alt={favourite.alt} src={favourite.image}/>
        <div>
            <p className='text-sm truncate font-bold  pl-2'>{favourite.title}</p>
            <p className='pl-2 text-red-700 font-bold text-md'>
              {favourite.price > 17000 ?
            <span> {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(favourite.price-favourite.price*0.20)}</span>
              :
            <span> {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(favourite.price)}</span>
            }
             </p>
        </div>
      </li>
    </>
  )
}

export default StarFavouriteItem
