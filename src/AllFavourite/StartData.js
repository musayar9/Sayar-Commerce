import React from 'react'
import {useSite} from '../Context/SiteContext'
import StarFavouriteItem from './StarFavouriteItem'
import favourites from '../Api/favorite.json'

function StartData() {
    const {starFavourite} = useSite()
  return (
    <ul className='space-y-2'>
      {starFavourite.map((star)=>(
        <StarFavouriteItem key={star.id} star={star} favourite={favourites.find(favourite=>favourite.id === star.id)} />
      ))}
    </ul>
  )
}

export default StartData
