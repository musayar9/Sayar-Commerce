import React from 'react'

function SearchValue({product}) {
   
  return (
    <>
<li className='flex space-y-2 space-x-2 '>       
    
    <img className='w-12 h-12 rounded-xl' src={product.image} alt={product.alt}/>
        <span className='text-white'>{product.title}</span>
     
     
        
 </li>
 

    </>
  )
}

export default SearchValue
