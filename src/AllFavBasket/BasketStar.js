import React from 'react'
import favourites from '../Api/favorite.json'
import { useSite } from '../Context/SiteContext'
import BasketStarItem from './BasketStarItem'
function BasketStar() {
    const {starBasket} = useSite()

  return (
    <>

    <ul className='space-y-2'>
        {
          starBasket &&  starBasket.map((star)=>(
            <BasketStarItem key={star.id} star={star}
             favourite={favourites.find(favourite=>favourite.id === star.id)}/>
          ))
        }
    </ul>
      
    </>
  )
}

export default BasketStar
