import React from 'react'


function LocalCity() {
    const options = [
        { value: 'İstanbul', label: 'İstanbul' },
        { value: 'Ankara', label: 'Ankara' },
        { value: 'İzmir', label: 'İzmir' },
        { value: 'KahramanMaraş', label: 'KahramanMaraş' },
        { value: 'Adana', label: 'Adana' },
        { value: 'Sivas', label: 'Sivas' },
        { value: 'Hatay', label: 'Hatay' },
        { value: 'Gaziantep', label: 'Gaziantep' },
      ];
  return (
    <>
      
 <select  className='text-xs lg:text-sm h-8 lg:h-12 w-full px-1 py-1 lg:px-2 lg:py-2 text-gray-700 cursor-pointer border border-gray-300 rounded-lg outline-none  focus:border-violet-700'>

{
                   options.map((option,key)=>(
                       <option key={key} value={option.value}>{option.label} </option>
                   )

                   )
               }
   </select>
   </>
  )
}

export default LocalCity
