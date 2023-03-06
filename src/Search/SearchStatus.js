import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSite } from '../Context/SiteContext'

import SearchProduct from './SearchProduct'

function SearchStatus() {
  const [isInput, setIsInput] = useState(false)

  const { search, setIsSearch, searchValue, setSearchValue } = useSite()


  const handClick = (e) => {
    setIsSearch(e.target.value);
    setIsInput(isInput ? false : true)
    setSearchValue(e.target.value)
  }
  return (

    <div className='z-30'>
      <form className="w-full">
        <div className="flex items-center border-b border-gray-300 py-1">
          <input onChange={handClick} value={searchValue} className="appearance-none text-center bg-transparent border-none w-full text-white placeholder:text-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none text-sm placeholder:opacity-4" type="text" placeholder="Ürün Ara" aria-label="Full name" />
          <button onClick={() => { setIsInput(isInput ? false : true) }} className="flex-shrink-0  text-sm  text-white py-1 px-2 rounded-lg" type="button">
            <BsSearch size={18} />
          </button>

        </div>
      </form>

      {isInput ?
        <div className='absolute w-80 h-48 overflow-x-auto mt-2 space-y-2 border p-2 border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500  rounded-xl space-y-2 search cursor-pointer'>
          <SearchProduct search={search} isInput={isInput} setIsInput={setIsInput} />

        </div>


        : null}


    </div>




  )
}

export default SearchStatus
