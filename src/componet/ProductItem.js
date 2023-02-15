import React, { useState } from 'react'
import { useSite } from '../Context/SiteContext'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs'
function ProductItem({product}) {
const [like, setLike]=useState(false)

  const {cardMoney, totalMoney, basket, setBasket, favourite, setFavourite} = useSite()
const basketProduct = basket.find(item => item.id === product.id )
// const favouriteİtem = favourite.find(like => like.id === product.id)
    const addProduct = () =>{
     const statusBasket = basket.find(item=> item.id === product.id)
        if(statusBasket){
            statusBasket.amount += 1
            setBasket([...basket.filter(item=>item.id !== product.id), statusBasket])

        }else{
            setBasket([...basket,{id:product.id, title:product.title, amount:1, price:product.price}])
   
        }

    }
    const removeProduct = () =>{
      const interestProduct = basket.find(item=>item.id === product.id)
      const removeProductBasket = basket.filter(item=> item.id !== product.id )

      interestProduct.amount -= 1

      if(interestProduct.amount === 0){
          setBasket([...removeProductBasket])

      }else{
          setBasket([...removeProductBasket, interestProduct])

      }

  }

    const addFavourite = () =>{
    const currentLike = favourite.find(like => like.id === product.id)
    if(currentLike){
      currentLike.amount += 1
    setFavourite([...favourite.filter(like=>like.id !== product.id0),currentLike])

    }
    else{
    setFavourite([...favourite,{id:product.id, title:product.title, amount:1}])
  }
   }






    const removeFavourite = () =>{
      const defaultFavourite =  favourite.find(like=>like.id === product.id)
      const removeLike = favourite.filter(like=>like.id !== product.id)

      defaultFavourite.amount -=1

      if(defaultFavourite.amount === 0){
        setFavourite([...removeLike])
      }
      else{
        setFavourite([...removeLike, defaultFavourite])
      }
    }

    const favouriteProduct = () =>{
      setLike(true)
      addFavourite()
  
     
    }

  const favouriteTry = () =>{
    setLike(false)
    removeFavourite()
  }
  return (
    <>
      <div className='p-4  border border-gray-300 rounded-xl mb-5 w-[24%]'>
       <h5 className='p-2  font-bold text-[20px] mb-[20px] products truncate '>{product.title}</h5>
     
        <picture className='relative mt-[5px] shrink-0 '>
        {
          !like ? <button className='z-10 mt-2 w-12 h-12 top-2 right-2 border border-gray-300 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 items-center justify-center flex absolute  rounded-full drop-shadow-xl' onClick ={favouriteProduct}><BsSuitHeart size={24}/></button> 
          : <button className='z-10 mt-2 w-12 h-12 top-2 right-2 border border-gray-200  items-center justify-center flex absolute rounded-full drop-shadow-xl ' onClick={favouriteTry}><BsFillSuitHeartFill size={24} className='text-pink-700'/></button>
          
        } 
         
        <img src={product.image} alt={product.alt} className=" w-[100%] shrink-0    p-2 "/>
        </picture>
     
   
        <p className="shrink-0 flex font-bold mt-4 text-gray-400 ">{product.alt}</p>
        <span className='flex justify-end products font-bold text-2xl p-2'>{product.price}TL</span>



        <div className=" space-y-4 p-2">
        <div className='flex items-center justify-center'>  <p className="border w-14 h-14 border-gray-300 products flex items-center  justify-center rounded-full text-center text-xl font-bold">{basketProduct ? basketProduct.amount : 0} </p></div>
            {/* <p className='productAmount'>{favouriteİtem ? favouriteİtem.amount : 0}</p> */}
            <div className='space-y-2 w-full '>
        
            <button className='px-6 py-2 w-full text-xl text-purple-600 font-semibold  rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
            disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white disabled:cursor-not-allowed 
            ' disabled={totalMoney + product.price > cardMoney} onClick={addProduct}>Sepete Ekle</button><br></br>
            <button className='px-6 py-2 w-full text-xl text-pink-600 font-semibold 
            rounded-full border border-pink-200 hover:text-white hover:bg-pink-600
             hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed
             disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white' disabled={!basketProduct} onClick={removeProduct}>Sepetden Çıkar</button>
            </div>
          

            {/* <p>
                {basketProduct ? `${basketProduct.amount} adet ürün sepete eklendi` : null}
            </p> */}

            {/* <p>
                {
                    basketProduct ? `Toplam Fiyat = ${product.price * basketProduct.amount} Tl` : null
                }
            </p> */}
        </div>
        <br>
        </br>
{/*      
        <p>{
         favouriteİtem ? `${favouriteİtem.title}` : null
        
        }</p> */}


         {/* <button className={!like ? `btn btn-primary` : "btn btn-danger"} onClick ={favouriteProduct}>beğen</button>  */}

    

   
      </div>
    
    </>
   
  )
}

export default ProductItem
