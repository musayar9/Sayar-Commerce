import React from 'react'
import { useSite } from '../Context/SiteContext'

function SearchValue({ product, isInput, setIsInput }) {
  const { setSearchValue } = useSite()


  const handleClick = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value)
    setIsInput(isInput ? false : true)

  }
  return (
    <>
      <li className='flex items-center justify-between '>
        <div className='flex  space-y-2 space-x-2'>
          <img className='w-10 h-10 rounded-xl' src={product.image} alt={product.alt} />
          <button className='text-white flex items-center justify-center text-sm' onClick={handleClick} value={product.title}>{product.title}</button>
        </div>
        <div><p className='text-xs text-white'>{new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}</p></div>




      </li>


    </>
  )
}

export default SearchValue
