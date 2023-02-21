
import './App.css';
import {useEffect} from 'react'
import MoneyStatus from './componet/MoneyStatus';
import ProductItem from './componet/ProductItem'
import products from './Api/product.json'
import favourites from './Api/favorite.json'
import Basket from './Basket/Basket';
import Navbar from './componet/Navbar'
import { useSite } from './Context/SiteContext';
import About from './CommerceAbout/About';
import { useWindowWidth } from '@react-hook/window-size';
import BrandProduct from './Brand/BrandProduct';
import CommentSlider from './Comments/CommentSlider';
import StarProduct from './AllFavourite/StarProduct'
import Footer from './componet/Footer';
import Categori from './Categories/Categori';


function AppContext() {

  const { totalMoney, setTotalMoney, basket, search, starBasket, setStarMoney} = useSite()
const width = useWindowWidth()

 useEffect(() =>{
  
  setTotalMoney(basket.reduce((acc, item) =>{
    return acc + (item.amount * (products.find(product => product.id === item.id).price))
  },0))

  setStarMoney(starBasket.reduce((acc, star)=>{
    return acc +(star.amount * (favourites.find(favourite => favourite.id === star.id).price) )
  },0))

  
 console.log(basket)
}, [basket, setTotalMoney, starBasket, setStarMoney])
  return (
    <>
    <div className='bg-gradient-to-r from-purple-500 to-pink-500  p-6'>
    <Navbar/>

    </div>
  <div className='p-6 bg-gray-400'>
      <Categori/>
  </div>



<div className='w-120 m-auto flex flex-wrap justify-around p-8'>

{
 products
  .filter((product) => { return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search); }).map((product)=>(
    <ProductItem product={product} key={product.id}/>
  ))
}

</div>



    {width < 640 && <StarProduct />}
    {width < 640 && <BrandProduct />}
    {width < 640 && <CommentSlider />}

<div className='grid gap-y-8 py-4 container mx-auto'>
{width > 640 && <BrandProduct />}
  {width > 640 &&  <StarProduct/>}

<About/>
{width > 640 && <CommentSlider/>}


</div>

  
<Footer/>
    </>
  );
}

export default AppContext;
