
import './App.css';
import {useState, useEffect} from 'react'
import MoneyStatus from './componet/MoneyStatus';
import ProductItem from './componet/ProductItem'
import products from './product.json'
import Basket from './componet/Basket';

function Home() {

  const [cardMoney, setCardMoney] = useState(10000);
  const [totalMoney, setTotalMoney] = useState(0);

  const [basket, setBasket] = useState([]);

 useEffect(() =>{

  setTotalMoney(basket.reduce((acc, item) =>{
    return acc + (item.amount * (products.find(product => product.id === item.id).price))
  },0))






 console.log(basket)
}, [basket])
  return (
    <>
      <MoneyStatus cardMoney={cardMoney} totalMoney={totalMoney}  setCardMoney={setCardMoney}/>

      <div className='productContainer products'>

      {
        products.map((product,index)=>(
          <ProductItem basket={basket} setBasket={setBasket} totalMoney={totalMoney}  cardMoney={cardMoney}   product={product} key={index}/>
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

export default Home;
