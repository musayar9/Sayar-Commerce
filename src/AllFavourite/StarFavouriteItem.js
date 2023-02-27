import React from 'react'

function StarFavouriteItem({favourite}) {
  return (
    <>
      <li className='flex items-center space-x-2'>
        <img className='w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex-shrink-0' alt={favourite.alt} src={favourite.image}/>
        <div className="pl-1 lg:pl-2">
            <p className='text-xs lg:text-sm text-sm truncate font-bold '>{favourite.title}</p>
            <p className=' text-red-700 font-bold text-xs lg:text-sm'>
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
