import React from 'react'
import Form from 'react-bootstrap/Form';

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
      
 <Form.Select  className='h-14 cursor-pointer'>

{
                   options.map((option,key)=>(
                       <option key={key} value={option.value}>{option.label} </option>
                   )

                   )
               }
   </Form.Select>
   </>
  )
}

export default LocalCity
