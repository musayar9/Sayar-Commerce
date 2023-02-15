import  React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css";
import Brand from '../Api/brand.json'
import { useEffect, useState } from 'react'

function MultiCarousel() {

    const [brands, setBrands] = useState([])

    useEffect(()=>{
        setBrands(Brand)
    },[])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 10,
          slidesToSlide: 4,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 8,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
<>
<h2 className="pt-2 pl-4 -mb-4 text-2xl font-bold products">Markalar</h2>
<div className='card p-4 border border-gray-400 '>
       
      <Carousel showDots={false} responsive={responsive} autoPlay={true}  infinite={true}
swipeable={500}
  autoPlaySpeed={2000}


  
>
            {brands && brands.map((brand)=>(
                <div className='flex items-center justify-center'> 
                 <div key={brand.id} className="px-2 ">
                <img src={`markaImg/${brand.image}`} alt={brand.title} className="rounded-full w-24 h-24  border border-gray-400" />
                <p className="text-md p-2 font-bold products">{brand.title}</p>
                </div>
              
            </div>
            ))}
      </Carousel>
    </div>
</>
    
  )
}

export default MultiCarousel
