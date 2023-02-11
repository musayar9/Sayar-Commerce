import React, { useState } from 'react'


import LocalCity from './LocalCity';
import LocalNeigBors from './LocalNeigBors';
import LocationTown from './LocationTown'


function Location() {

    const [isFilter, setİsFilter] = useState(true)


    return (
        <>
            {
                isFilter ?

                    <div className=' space-y-2 border border-gray-700 bg-gradient-to-r from-purple-500 to-pink-500  p-3 rounded-xl'>
                        <h2 className='flex'>Size Özel Ürünler için Konum Seçin</h2>


                        <LocalCity />
                        <LocationTown />

                        <LocalNeigBors />
                        <button className="btn text-white w-72 border border-gray-500 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500" onClick={() => setİsFilter(false)}>Onayla</button>

                    </div>
                 : null}
        </>
    )
}

export default Location
