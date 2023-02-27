import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css";
import Brand from '../Api/brand.json'
import { useEffect, useState } from 'react'




function BrandProduct() {

  const [brands, setBrands] = useState([])


  useEffect(() => {
    setBrands(Brand)
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 10,
      slidesToSlide: 2,
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
      items: 2,
    },
  };
  return (
    <>
      <h2 className="pt-2 pl-14 -mb-2 text-2xl font-bold products mt-6">Markalar</h2>
      <div className='m-4 p-4  rounded-xl cursor-pointer border-r border-l border-gray-400 mt-6
 relative  after:bg-gradient-to-r after:from-purple-300 after:to-transparent after:absolute after:inset-0 after:w-full after:rounded-xl after:h-full after:z-10
      '>

        <Carousel showDots={false} responsive={responsive} autoPlay={true} infinite={true}
          swipeable={500} autoPlaySpeed={3000}  
        >
          {brands && brands.map((brand) => (
            <div key={brand.id} className='flex items-center justify-center -z-50'>
              <div  className="px-2 p-2 ">
                <img src={`markaImg/${brand.image}`} alt={brand.title} className="rounded-full w-20 h-20  border border-gray-300 drop-shadow-xl" />
                <p className="text-md p-2 font-bold products">{brand.title}</p>
              </div>

            </div>
          ))}
        </Carousel>
      </div>
    </>

  )
}

export default BrandProduct
