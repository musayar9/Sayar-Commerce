import React from 'react'
import products from '../Api/product.json'
import SearchValue from './SearchValue';


function SearchProduct({search, isInput, setIsInput}) {
    
  return (
    <>
    <ul className='space-y-2'>     
        
          {
            products
            .filter((product) => { return search.toLowerCase() === '' ? product : product.title.toLowerCase(
            ).includes(search); })
            .map((product)=>(
              <SearchValue key={product.id} product={product} isInput={isInput} setIsInput={setIsInput}/>
      
            ))
        }
  
        </ul>
 
      
          

    </>
  )
}

export default SearchProduct
