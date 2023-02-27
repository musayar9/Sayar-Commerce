import React from 'react'
import BabyMom from './BabyMom'
import Electronic from './Electronic'
import Live from './Live'
import ManWoman from './ManWoman'
import MusicBook from './MusicBook'
import PersonalCare from './PersonalCare'
import Sport from './Sport'
import SuperMarket from './SuperMarket'

function Categori() {
  return (
    <div className="container z-10">
          <div className='h-[1px] bg-gray-200'></div>
      <nav className='pt-4 '>
        <ul className='  h-full   lg:flex items-center justify-center '>
            <li  className="flex    lg:border-l px-3 py-2 "><ManWoman/></li>
            <li className="flex  lg:border-l px-3 py-2"><BabyMom/></li>
            <li className="flex   lg:border-l px-3 py-2"><Live/></li>
            <li className="flex  lg:border-l px-3 py-2"><Electronic/></li>
            <li className="flex  lg:border-l px-3 py-2"><Sport/></li>
            <li className="flex  lg:border-l px-3 py-2"><SuperMarket/></li>
            <li className="flex  lg:border-l lg:border-r px-3 py-2"><PersonalCare/></li>
            <li className="flex  lg:border-r  px-3 py-2"><MusicBook/></li>

        </ul>
      </nav>
    </div>
  )
}

export default Categori
