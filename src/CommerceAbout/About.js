import React from 'react'
import AboutItem from './AboutItem'
import Abouts from '../Api/abouts.json'
import {useState, useEffect} from 'react'
function About() {
const [abouts, setAbouts] = useState([])

useEffect(()=>{
    setAbouts(Abouts)
},[])
  return (
    <div className=' mx-auto grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {abouts && abouts.map((about)=>(<AboutItem key={about.id} about={about}/>))}
    </div>
  )
}

export default About
