import React from 'react'
import { useSite } from '../Context/SiteContext'

function SearchValue({product, isInput, setIsInput}) {
   const { setSearchValue} = useSite()


 const handleClick = (e) =>{
  e.preventDefault()
setSearchValue(e.target.value)
setIsInput(isInput ? false : true)

 }
  return (
    <>
<li className='flex space-y-2 space-x-2 '>       
    
    <img className='w-12 h-12 rounded-xl' src={product.image} alt={product.alt}/>
        <button className='text-white flex items-center justify-center' onClick={handleClick} value={product.title}>{product.title}</button>
     
     
        
 </li>
 

    </>
  )
}

export default SearchValue
