import React from 'react'

function StarFavouriteItem({favourite}) {
  return (
    <>
      <li className='flex items-center space-x-'>
        <img className='w-12 h-12 rounded-xl flex-shrink-0' alt={favourite.alt} src={favourite.image}/>
        <div>
            <p className='text-md truncate font-bold pl-2'>{favourite.title}</p>
            <p className='pl-2 text-red-700 font-bold text-xl'>{favourite.price} TL</p>
        </div>
      </li>
    </>
  )
}

export default StarFavouriteItem
