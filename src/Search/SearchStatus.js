import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { useSite } from '../Context/SiteContext'
import products from '../product.json'
import SearchProduct from './SearchProduct'

function SearchStatus() {
    const [isInput, setIsInput] = useState(false)

const {search, setIsSearch} = useSite()
console.log(products)

console.log(search)
const handClick = (e) =>{
setIsSearch(e.target.value);
setIsInput(isInput ? false : true)
}
  return (
  
    <div>
    <form className="w-full max-w-sm">
  <div className="flex items-center border-b border-gray-500-500 py-2">
    <input onChange={handClick }  className="appearance-none text-center bg-transparent border-none w-full text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ürün Ara" aria-label="Full name"/>
    <button onClick={()=>{setIsInput(isInput ? false : true)}} className="flex-shrink-0  text-sm  text-white py-1 px-2 rounded" type="button">
     <BsSearch size={24}/>
    </button>

  </div>
</form>

{ isInput ? 
<div className='absolute w-80 h-48 overflow-x-auto mt-2 space-y-2 border border-gray-700 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl space-y-2'>
<SearchProduct search={search}/>

</div>


: null}


    </div>

      

  
  )
}

export default SearchStatus
