import React, { useState } from 'react'
import products from '../product.json'
import { useSite } from '../Context/SiteContext'
import BasketProductItem from './BasketProductItem'
function BasketProduct() {
   const {basket, totalMoney} = useSite()
   const [payment, setPayment] = useState(true)
  return (
    <>
    {
        totalMoney > 0 && (
            <>
            {payment ?
                <div className='space-y-4 p-2 border border-gray-700 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl w-50 text-md cursor-pointer text-white'>
                <h3 className='text-center text-xl font-bold'>Sepete Eklediklerim</h3>
               
                  
                  <ul className=' space-y-2'>
                   
                    {
                        basket.map((item, index)=>(
                            <BasketProductItem key={index} item={item} product={products.find(product=>product.id === item.id)}/>
                        ))
                    }
                  </ul>
                  <div className='border-bottom border-gray-500'></div>
                  <p className='p-1 w-80 rounded-lg text-right text-white   bg-gradient-to-r  from-purple-500 to-pink-500 '> Toplam Tutar= {totalMoney} TL</p>
                  <div className='border-bottom border-gray-500'></div>
                  <button className='btn text-white w-80 border border-gray-500 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500' onClick={()=>setPayment(false)}>Ödeme Yap</button>
                </div>
             : null}
             </>
        )
    }
  
    </>
  )
}

export default BasketProduct
