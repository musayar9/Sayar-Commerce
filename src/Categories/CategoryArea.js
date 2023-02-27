import React from 'react'
import  {AiOutlineBars} from 'react-icons/ai'
import { useSite } from '../Context/SiteContext'

function CategoryArea() {
    const {category, setCategory} = useSite()
  return (
    <div>
    <button className="group duration-500 transiton-all text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center  border  border-gray-300 px-1 py-1 md:px-2 md:py-2 rounded-lg text-sm" id="try"
    onClick={()=>setCategory(category ? false : true)}
  > <span className='flex lg:space-x-2 hover:text-violet-700 duration-500'><AiOutlineBars size={20}/></span> </button>
 

 
  </div>
  )
}

export default CategoryArea
