import React from 'react'
import Form from 'react-bootstrap/Form';
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
    <div>
    


      
 <Form.Select className='h-14 cursor-pointer'>
 {
        optionNeig.map((neigh, index)=>(
            <option index={index} value={neigh.value}>{neigh.label}</option>
        ))
      }

   </Form.Select>

    </div>
  )
}

export default LocalNeigBors
