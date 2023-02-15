import React from 'react'


function LocationTown() {
    const optionsTown = [
        {value:"Sincan", label:"Sincan"},
        {value:"Beylikdüzü", label:"Beylikdüzü"},
        {value:"Beykoz", label:"Beykoz"},
        {value:"Suşehri", label:"Suşehri"},
        {value:"Keçiören", label:"Keçiören"},
        {value:"Akıncılar", label:"Akıncılar"},
        {value:"Zara", label:"Zara"},
        {value:"Mamak", label:"Mamak"},
        {value:"Beşiktaş", label:"Beşiktaş"},

    ]
  return (
    <>
      
        <select className='h-14 cursor-pointer  w-full px-2 py-2 pr-4 text-gray-700 rounded-lg outline-none border focus:border-violet-700'>
                {
                    optionsTown.map((town,index)=>(
                        <option key={index} value={town.value}>{town.label} </option>
                    ))
                }
        </select>




      
    </>
  )
}

export default LocationTown
