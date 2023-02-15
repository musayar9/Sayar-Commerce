import React from 'react'

function AboutItem({about}) {
  return (
    <div className='bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10'>
      <img className="w-48 h-48 mb-4 rounded-full" src={`image/${about.image}.jpg`} alt={about.title}/>
      <h3 className='text-xl font-bold products'>{about.title}</h3>
      <p className='text-md text-gray-500 px-5'>{about.description}</p>
    </div>
  )
}

export default AboutItem
