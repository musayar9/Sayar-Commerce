import React from 'react'

function LocalNeigBors() {
       const optionNeig = [
        {value:"Atatürk Mah.", label:"Atatürk Mah"},
        {value:"Barış Mah", label:"Barış"},
        {value:"Görgü", label:"Görgü"},
        {value:"Suşehri", label:"Yalamoz"},
        {value:"Adaakent", label:"Adakent"},
        {value:"Akıncılar", label:"Akıncılar"},
        {value:"Zara", label:"Zara"},
        {value:"Deniz", label:"Mamak"},
        {value:"Aksaray", label:"Aksaray"},

    ]

  return (
    <>
    


      
 <select className='text-xs lg:text-sm h-8 lg:h-12 w-full px-1 py-1 lg:px-2 lg:py-2 cursor-pointer  w-full  text-gray-700 rounded-lg outline-none border focus:border-violet-700'>
 {
        optionNeig.map((neigh, index)=>(
            <option key={index} value={neigh.value}>{neigh.label}</option>
        ))
      }

   </select>

    </>
  )
}

export default LocalNeigBors
