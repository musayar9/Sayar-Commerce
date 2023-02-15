import React, { useState } from 'react'
import products from '../Api/product.json'
import { useSite } from '../Context/SiteContext'
import BasketProductItem from './BasketProductItem'
function BasketProduct() {
   const {basket, totalMoney, setBasket} = useSite()
   const [payment, setPayment] = useState(true)

   const EmptyBasket = () =>{
    setBasket([])
    setPayment(false)
   }
  return (
    <>
    {
        totalMoney > 0 && (
            <>
            {payment ?
                <div  className='z-10 space-y-4 px-2  py-6 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl w-96 text-md cursor-pointer text-white'>
                <h3 className='text-center text-xl font-bold'>Sepete Eklediklerim</h3>
               
                  
                  <ul className=' space-y-4'>
                   
                    {
                        basket.map((item, index)=>(
                            <BasketProductItem key={index} item={item} product={products.find(product=>product.id === item.id)}/>
                        ))
                    }
                  </ul>
                  <div className='border-b border-gray-300'></div>
                  <p className='p-1 w-85 rounded-lg text-right text-xl font-bold   bg-gradient-to-r  from-purple-500 to-pink-500 text-red-700'> Toplam Tutar= {totalMoney} TL</p>
                  <div className='border-b border-gray-300'></div>
                  <button className='border border-gray-300 px-4 py-2 rounded-lg text-white w-85 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500' onClick={EmptyBasket}>Ödeme Yap</button>
                </div>
             : null}
             </>
        )
    }
  
    </>
  )
}

export default BasketProduct
