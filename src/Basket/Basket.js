import React from 'react'
import { useSite } from '../Context/SiteContext'
import BasketItem from './BasketItem'

function Basket({ products }) {
  const { totalMoney, basket } = useSite()
  return (
    <>
      <div>
        <h3>Sepetdekiler</h3>

        <ul>
          {
            basket.map((item, index) => (
              <BasketItem key={index} item={item}
                product={products.find(basket => basket.id === item.id)} />
            ))
          }
        </ul>

        {
          totalMoney > 0 && (
            <span>
              Toplam:{totalMoney} Tl
            </span>
          )
        }
      </div>
    </>
  )
}

export default Basket
