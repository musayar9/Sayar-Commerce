import React from 'react'
import ManWoman from './ManWoman'

function Categori() {
  return (
    <div className="container">
      <nav className=''>
        <ul className='flex items-center justify-center '>
            <li  className="flex  border-r  border-l px-6 py-2 relative"><ManWoman/></li>
            <li className="flex border-r border-l px-6 py-2">Bebek & Anne</li>
            <li className="flex  border-r border-l px-6 py-2">Ev Yaşam</li>
            <li className="flex  border-r border-l px-6 py-2">Teknoloji</li>
            <li className="flex  border-r border-l px-6 py-2">Spor & outdoor</li>
            <li className="flex  border-r border-l px-6 py-2">SuperMarket</li>
            <li className="flex  border-r border-l px-6 py-2">KişiselBakım</li>
            <li className="flex  border-r border-l px-6 py-2">Kitap & Müzik</li>

        </ul>
      </nav>
    </div>
  )
}

export default Categori
