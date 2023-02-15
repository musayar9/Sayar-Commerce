import React from 'react'

function BasketProductItem({item, product}) {
  return (
    <>
    
        <li className='flex items-center space-x-2  px-2 '>
            <img className='w-14 h-14 rounded-xl flex-shrink-0' src={product.image} alt={product.alt}/>
            <div>
            <p className='text-md font-bold pl-2 truncate'>{product.title}</p>
            <p className='pl-2 text-lg font-bold text-red-800'>{item.amount} Adet = {item.amount * product.price} TL</p>
            </div>
           
        </li>
    </>
  )
}

export default BasketProductItem
