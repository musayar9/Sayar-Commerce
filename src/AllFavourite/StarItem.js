import  { useState } from 'react'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs'
import { useSite } from '../Context/SiteContext'
function StarItem({star}) {
    const [like, setLike]=useState(false)
    const {cardMoney, totalMoney, starBasket, setStarBasket, starFavourite, setStarFavourite } = useSite()
    const starBasketProduct = starBasket.find(item => item.id === star.id )
   
   
     const addStarProduct = () =>{
        const statusStarBasket = starBasket.find(item=> item.id === star.id)
           if(statusStarBasket){
               statusStarBasket.amount += 1
               setStarBasket([...starBasket.filter(item=>item.id !== star.id), statusStarBasket])
   
           }else{
               setStarBasket([...starBasket,{id:star.id, title:star.title, amount:1, price:star.price}])
      
           }
   
       }
       const removeStarPoduct = () =>{
         const currentStarBasket = starBasket.find(item=>item.id === star.id)
         const defaultStarBasket = starBasket.filter(item=> item.id !== star.id )
   
         currentStarBasket.amount -= 1
   
         if(currentStarBasket.amount === 0){
             setStarBasket([...defaultStarBasket])
   
         }else{
             setStarBasket([...defaultStarBasket, currentStarBasket])
   
         }
   
     }
   
       const addStar = () =>{
       const starLike = starFavourite.find(like => like.id === star.id)
       if(starLike){
         starLike.amount += 1
       setStarFavourite([...starFavourite.filter(like=>like.id !== star.id),starLike])
   
       }
       else{
       setStarFavourite([...starFavourite,{id:star.id, title:star.title, amount:1}])
     }
      }
   
   
   
   
   
   
       const  removeStar = () =>{
         const currentStarFavourite =  starFavourite.find(like=>like.id === star.id)
         const removeFavouriteLike = starFavourite.filter(like=>like.id !== star.id)
   
         currentStarFavourite.amount -=1
   
         if(currentStarFavourite.amount === 0){
           setStarFavourite([...removeFavouriteLike])
         }
         else{
           setStarFavourite([...removeFavouriteLike, currentStarFavourite])
         }
       }
   
       const starFavouriteProduct = () =>{
         setLike(true)
         addStar()
     
        
       }
   
     const starFavouriteTry = () =>{
       setLike(false)
       removeStar()
     }
  return (
    <>
      <div className='p-8  border border-gray-300 rounded-xl mb-5 w-[90%]'>
      <h5 className='p-2  font-bold text-[18px] mb-[15px] products truncate '>{star.title}</h5>
     
     <picture className='relative mt-[5px] shrink-0 '>
     {
       !like ? <button className='z-10 -mt-2 w-12 h-12 top-2 right-2 border border-gray-300 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 items-center justify-center flex absolute  rounded-full drop-shadow-xl' onClick ={starFavouriteProduct}><BsSuitHeart size={24}/></button> 
       : <button className='z-10 -mt-4 w-12 h-12 top-2 right-2 border border-gray-200  items-center justify-center flex absolute rounded-full drop-shadow-xl ' onClick={starFavouriteTry}><BsFillSuitHeartFill size={24} className='text-pink-700'/></button>
       
     } 
      
     <img src={star.image} alt={star.alt} title={star.alt} className=" w-full h-full shrink-0    p-2 "/>
     </picture>
  

   
     <span className='flex justify-end products font-bold text-2xl p-2'>{new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(star.price)}</span>



     <div className=" space-y-4 p-2">
     <div className='flex items-center justify-center'> 
      <p className="border w-14 h-14 border-gray-300 products flex items-center
        justify-center rounded-full text-center text-xl font-bold">{starBasketProduct ? starBasketProduct.amount : 0} </p></div>
      
         <div className='space-y-2 w-full '>
     
         <button className='px-6 py-2 w-full text-xl text-purple-600 font-semibold  rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
         disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white disabled:cursor-not-allowed 
         ' disabled={totalMoney + star.price > cardMoney} onClick={addStarProduct}>Sepete Ekle</button><br></br>
         <button className='px-6 py-2 w-full text-xl text-pink-600 font-semibold 
         rounded-full border border-pink-200 hover:text-white hover:bg-pink-600
          hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed
          disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white' disabled={!starBasketProduct} onClick={removeStarPoduct}>S. Çıkar</button>
         </div>
       

   
     </div>
    



   
 
      </div>
    </>
  )
}

export default StarItem