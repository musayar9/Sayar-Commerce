import React from 'react'
import Form from 'react-bootstrap/Form';

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
    <div>
      
        <Form.Select className='h-14 cursor-pointer'>
                {
                    optionsTown.map((town,index)=>(
                        <option index={index} value={town.value}>{town.label} </option>
                    ))
                }
        </Form.Select>




      
    </div>
  )
}

export default LocationTown
