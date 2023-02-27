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
      
        <select className='text-xs lg:text-sm h-8 lg:h-12 w-full px-1 py-1 lg:px-2 lg:py-2  cursor-pointer  w-full pr-4 text-gray-700 rounded-lg outline-none border focus:border-violet-700'>
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
