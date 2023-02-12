import React, { useState } from 'react'
import { useSite } from '../Context/SiteContext'

function ProductItem({product}) {
const [like, setLike]=useState(false)

  const {cardMoney, totalMoney, basket, setBasket, favourite, setFavourite} = useSite()
const basketProduct = basket.find(item => item.id === product.id )
const favouriteİtem = favourite.find(like => like.id === product.id)
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
      <div className='productItem'>
        <h5 className='header'>{product.title}</h5>
        <img src={product.image} alt={product.alt}/>
        <p className="alt">{product.alt}</p>
        <span className='price'>{product.price}TL</span>



        <div className="basket">
            <p className="productAmount">{basketProduct ? basketProduct.amount : 0}</p>
            <p className='productAmount'>{favouriteİtem ? favouriteİtem.amount : 0}</p>
            
            <button disabled={totalMoney + product.price > cardMoney} onClick={addProduct}>Sepete Ekle</button><br></br>
            <button  disabled={!basketProduct} onClick={removeProduct}>Sepetden Çıkar</button>

            <p>
                {basketProduct ? `${basketProduct.amount} adet ürün sepete eklendi` : null}
            </p>

            <p>
                {
                    basketProduct ? `Toplam Fiyat = ${product.price * basketProduct.amount} Tl` : null
                }
            </p>
        </div>
        <br>
        </br>
        {
          !like ? <button className='btn btn-primary' onClick ={favouriteProduct}>beğen</button> 
          : <button className='btn btn-danger' onClick={favouriteTry}>beğenmedim</button>

        } 
        <p>{
         favouriteİtem ? `${favouriteİtem.title}` : null
        
        }</p>


         {/* <button className={!like ? `btn btn-primary` : "btn btn-danger"} onClick ={favouriteProduct}>beğen</button>  */}

    

      <style jsx>
              {`
              .productItem{
                padding:20px;
                background:#fff;
                border:1px solid rgba(0,0,0,0.16);
                border-radius:8px;
                width:25%;
                margin-bottom:20px;
              }

              .header{
                font-size:16px;
                display:flex;
                flex-wrap:nowrap;
              }
              .productItem img{
                display:flex;
                align-items:center;
                flex-shrink:0;
                width:100%;
              
              }
              .alt{
             display:flex;
             
                font-size:14px;
                font-weight:700;
                color:#999993;
                flex-shrink:0;
              }

              .price{
              
                font-size:24px;
                font-weight:bold;
                color:orange;
            
              }
              .basket{
                display:inline;
                aligns-items:center;
                justify-content:center;
              }
              
              `}
            </style>
      </div>
    
    </>
   
  )
}

export default ProductItem
