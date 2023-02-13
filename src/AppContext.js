
import './App.css';
import {useEffect} from 'react'
import MoneyStatus from './componet/MoneyStatus';
import ProductItem from './componet/ProductItem'
import products from './product.json'
import Basket from './Basket/Basket';
import Navbar from './componet/Navbar'
import { useSite } from './Context/SiteContext';


function AppContext() {

  const { totalMoney, setTotalMoney, basket, search} = useSite()

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
