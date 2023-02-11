import React from 'react'

function BasketProductItem({item, product}) {
  return (
    <>
    
        <li className='flex items-center space-x-1'>
            <img className='w-12 h-12 rounded-xl flex-shrink-0' src={product.image} alt={product.alt}/>
            <span className='text-sm font-bold pl-2'>{product.title}</span>:<span>{item.amount} ad.</span> = {item.amount * product.price} TL
        </li>
    </>
  )
}

export default BasketProductItem
