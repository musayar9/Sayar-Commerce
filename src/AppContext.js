
import './App.css';
import {useEffect} from 'react'
import MoneyStatus from './componet/MoneyStatus';
import ProductItem from './componet/ProductItem'
import products from './Api/product.json'
import Basket from './Basket/Basket';
import Navbar from './componet/Navbar'
import { useSite } from './Context/SiteContext';
import About from './CommerceAbout/About';
import { useWindowWidth } from '@react-hook/window-size';
import BrandProduct from './Brand/BrandProduct';
import CommentSlider from './Comments/CommentSlider';



function AppContext() {

  const { totalMoney, setTotalMoney, basket, search} = useSite()
const width = useWindowWidth()
 useEffect(() =>{

  setTotalMoney(basket.reduce((acc, item) =>{
    return acc + (item.amount * (products.find(product => product.id === item.id).price))
  },0))

 console.log(basket)
}, [basket, setTotalMoney])
  return (
    <>
    <div className='bg-gradient-to-r from-purple-500 to-pink-500  p-6'>
    <Navbar/>

    </div>


    {width < 640 && <BrandProduct />}
    {width < 640 && <CommentSlider />}

<div className='grid gap-y-8 py-4 container mx-auto'>
{width > 640 && <BrandProduct />}
{width > 640 && <CommentSlider/>}
<About/>
</div>

      <MoneyStatus/>

      <div className='w-120 m-auto flex flex-wrap justify-around p-8'>

      {
       products
        .filter((product) => { return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search); }).map((product)=>(
          <ProductItem product={product} key={product.id}/>
        ))
      }

      </div>

      {
        totalMoney > 0 &&
        <Basket products ={products} totalMoney ={totalMoney} basket={basket}/>
      }


    </>
  );
}

export default AppContext;
