import React, { useState } from 'react'
import BasketStar from '../AllFavBasket/BasketStar'
import products from '../Api/product.json'
import { useSite } from '../Context/SiteContext'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasketProductItem from './BasketProductItem'
function BasketProduct() {
   const {basket, totalMoney, setBasket, setStarBasket, starMoney} = useSite()
   const [payment, setPayment] = useState(true)


   const showToast = () => {
    toast.success('Ödeme Yapıldı', {
      position: toast.POSITION.TOP_RIGHT
    });
};
console.log(starMoney)
   const EmptyBasket = () =>{
    showToast()
    setBasket([])
    setStarBasket([])
    setPayment(false)
   }
   const newMoney = starMoney + totalMoney



  return (
    <>
    {
        newMoney > 0 && (
            <>
            {payment ?
                <div  className='z-10 space-y-4 px-2   py-4 border border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl w-96 text-md cursor-pointer text-white'>
                <h3 className='text-center text-xl font-bold'>Sepete Eklediklerim</h3>
                <p className='text-center flex flex-wrap text-xl font-bold'>70.000,00 TL ve Üzeri ALışverişlerinizde 20% İndirim</p>
               
               <div className='basket h-[200px] overflow-x-auto space-y-4'>
               <ul className=' space-y-4    '>
                   
                   {
                       basket.map((item, index)=>(
                           <BasketProductItem key={index} item={item} className=' space-y-4  '
                            product={products.find(product=>product.id === item.id)}/>
                       ))
                   }
                 </ul>
                 <BasketStar/>
               </div>
                  

                  <div className='border-b border-gray-300'></div>
                  <p className='p-2 text-right font-bold text-md text-red-700'> 
                   {newMoney > 70000 ? <ul><li>Toplam Fiyat: {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(newMoney)}</li>
                   <li>%20 İndirim :- {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format( newMoney * 0.20)} </li>
                    <li>İndirimli ToplamFiyat :  {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(newMoney - newMoney * 0.20)}</li>
                    
                  </ul>
                     : <span>Toplam Tutar: {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(newMoney)}</span>
                    } 
                
                     </p>

                  <div className='border-b border-gray-300'></div>
                  <div className='flex items-center justify-evenly'>
                  <button className='border border-gray-300 px-4 py-2 rounded-lg text-white w-44 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500' onClick={EmptyBasket}>Sepete Git</button>
                  <button className='border border-gray-300 px-4 py-2 rounded-lg text-white w-44 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500' onClick={EmptyBasket}>Ödeme Yap</button>
                  
                  </div>

                
                  <ToastContainer autoClose={500} pauseOnFocusLoss={true} pauseOnHover={false}/>
                </div>
             : null}
             </>
        )
    }
  
    </>
  )
}

export default BasketProduct
