import React from 'react'
import products from '../Api/product.json'
import SearchValue from './SearchValue';


function SearchProduct({search}) {
    
  return (
    <>
    <ul className='space-y-2'>     
        
          {
            products
            .filter((product) => { return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search); })
            .map((product)=>(
              <SearchValue key={product.id} product={product}/>
              // <li className='flex space-y-2 space-x-2 ' key={product.id}>       
    
              // <img className='w-12 h-12 rounded-xl' src={product.image} alt={product.alt}/>
              //     <span className='text-white'>{product.title}</span>
               
               
                  
          //  </li>
            ))
        }
  
        </ul>
 
      
          

    </>
  )
}

export default SearchProduct
