import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalCity from './LocalCity';
import LocalNeigBors from './LocalNeigBors';
import LocationTown from './LocationTown'


function Location() {

    const [isFilter, setİsFilter] = useState(true)
    const showLocal = () => toast.info('Konum Bilgisi Güncellendi', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        theme: "light",
    });
    const handleClick = () => {
        showLocal()
        setİsFilter(false)
    }
    return (
        <>
            {
                isFilter ?

                    <div className=' space-y-2 border p-2 lg:p-4 w-40 md:w-60 lg:w-80 border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500   rounded-xl'>
                        <h2 className='flex text-xs lg:text-md font-bold p-1 lg:p-2 text-white'>Size Özel Ürünler için Konum Seçin</h2>


                        <LocalCity />
                        <LocationTown />

                        <LocalNeigBors />
                        <button className=" text-xs lg:text-sm text-white w-full px-1 py-1 lg:px-2 lg:py-2 rounded-lg border border-gray-300 bg-gradient-to-r hover:opacity-70  from-purple-500 to-pink-500" onClick={handleClick}>Onayla</button>
                        <ToastContainer
                        />
                    </div>
                    : null}
        </>
    )
}

export default Location
