import React, { useState } from 'react'
import { useSite } from '../Context/SiteContext'
import {BsSuitHeart, BsFillSuitHeartFill} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductItem({product}) {
const [like, setLike]=useState(false)
const showToastMessage = () => {
  toast.success(`${product.title} sepete eklendi`, {
      position: toast.POSITION.TOP_RIGHT
  });
};
const errorMessage = () =>{
  toast.error("Ürün Sepetden Çıkarıldı",{
    position: toast.POSITION.TOP_RIGHT
  })

}

const successFavourite = () =>{
  toast.success("Ürün Favorilere Eklendi",{
    position: toast.POSITION.TOP_RIGHT
  })
}

const errorFavourite = ()=>{
  toast.error("Ürün Favorilerden Kaldırıldı",{
    position:toast.POSITION.TOP_RIGHT
  })
}
  const {cardMoney, totalMoney, basket, setBasket, favourite, setFavourite, setEmptyFavourite,emptyFavourite} = useSite()
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
        showToastMessage()
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
      errorMessage()
  }

    const addFavourite = () =>{
    const currentLike = favourite.find(like => like.id === product.id)
    if(currentLike){
      currentLike.amount += 1
    setFavourite([...favourite.filter(like=>like.id !== product.id),currentLike])

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
  successFavourite()
  setEmptyFavourite(true)
     
    }

  const favouriteTry = () =>{
    setLike(false)
    removeFavourite()
    errorFavourite()
    setEmptyFavourite(emptyFavourite ? true: false)
    
  }
  return (
    <>
      <div className='p-2  border border-gray-300 rounded-xl  mb-2 lg:mb-5 w-[48%] md:w-[32%] lg:w-[23%]  space-x-2 md:space-x-0  '>
       <h5 className='p-2   font-bold text-sm md:text-md md:mb-[6px] lg:mb-[10px] products truncate '>{product.title}</h5>
     
        <picture className=' mt-2 md:mt-[3px] lg:mt-[5px] shrink-0 cursor-pointer'>
        {
          !like ? <button className=' z-10 mt-2 w-8 h-8 md:w-10 md:h-10  top-2 right-2 lg:top-4 lg:right-6 border 
          border-gray-300 
          hover:text-white hover:bg-pink-600 hover:border-transparent 
          focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2
           items-center justify-center flex absolute  rounded-full drop-shadow-xl' onClick ={favouriteProduct}><BsSuitHeart size={20}/></button> 
          : <button className='absolute z-10 mt-2 w-8 h-8 md:w-10 md:h-10  top-2 right-2 lg:top-4 lg:right-6 border  border-gray-200  items-center justify-center flex absolute rounded-full drop-shadow-xl ' onClick={favouriteTry}><BsFillSuitHeartFill size={20} className='text-pink-700'/></button>
          
        } 
         
        <img src={product.image} alt={product.alt} className="w-40% md:w-[65%] lg:w-[80%] shrink-0  lg:hover:w-[100%] duration-500 ml-2"/>
        </picture>
     
   
        <p className="shrink-0 flex font-bold mt-4 text-gray-400 text-xs lg:text-sm truncate ">{product.alt}</p>
        <div className='  font-bold '>
     
          {
            product.price > 1000 ?     <ul className='items-center justify-between text-violet-700 shrink-0 '>
               <li className='line-through text-xs md:text-sm '> {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(product.price)} </li>
                  <li className='text-pink-700  text-sm md:text-md lg:text-lg'> {new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(product.price-product.price *0.20)} <span className='text-gray-500 text-sm md:text-md 
                  space-x-2'>%20</span></li>
            </ul>
            :
           <p className='text-violet-700 mt-4 text-sm md:text-md lg:text-lg'>{new Intl.NumberFormat('tr-TR',{style:'currency', currency:'TRY'}).format(product.price)}</p>
          }

          </div>



        <div className=" space-y-1 md:space-y-2 lg:space-y-3 p-2">
        <div className='flex items-center justify-center'>
            <p className="border w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-gray-300 products
             flex items-center  justify-center rounded-full text-center
              text-sm lg:text-md font-bold">{basketProduct ? basketProduct.amount : 0} </p></div>
         
            <div className=' space-y-1 md:space-y-2 w-full '>
        
            <button className='px-6 py-2 w-full text-xs md:text-sm lg:text-md text-purple-600 font-semibold  rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
            disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white disabled:cursor-not-allowed 
            ' disabled={totalMoney + product.price > cardMoney} onClick={addProduct}>Sepete Ekle</button><br></br>
            <button className='px-6 py-2 w-full text-xs md:text-sm  lg:text-md text-pink-600 font-semibold 
            rounded-full border border-pink-200 hover:text-white hover:bg-pink-600
             hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed
             disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white' disabled={!basketProduct} onClick={removeProduct}>Sepet Çıkar</button>
            </div>
          

         

        </div>


  

    

   
      </div>
    <ToastContainer autoClose={1000} pauseOnFocusLoss={true} pauseOnHover={false} />
    </>
   
  )
}

export default ProductItem
