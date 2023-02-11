import React from 'react'

function BasketItem({item, product}) {
  return (
    <>
    <li>
    {product.title} : <span>  {item.amount} adet</span> <span>* {product.price} Tl</span>   = {item.amount * product.price}TL
    </li>
      
    </>
  )
}

export default BasketItem
