import React from 'react'

function BasketProductItem({item, product}) {
  const saleProducts = product.price- product.price* 0.20
  const salePrice = item.amount *saleProducts
  const productPrice =  item.amount * product.price
  return (
    <>
    
        <li className='flex items-center space-x-2  px-2 '>
            <img className='w-14 h-14 rounded-xl flex-shrink-0' src={product.image} alt={product.alt}/>
            <div>
            <p className='text-md font-semibold pl-2 truncate'>{product.title}</p>
            <p className='pl-2 text-md  flex font-bold text-red-700'>{item.amount}  Adet =

            {product.price > 1000 ? 
       <span>{new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(salePrice)} </span>
            :<span>  {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(productPrice)} </span>}
         
            </p>
           </div>
        </li>
    </>
  )
}

export default BasketProductItem
