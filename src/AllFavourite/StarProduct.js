import React from 'react'
import favourites from '../Api/favorite.json'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css";

import StarItem from './StarItem';

function StarProduct() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
  return (
    <>
       <h2 className="pt-2 pl-14 -mb-2 text-2xl font-bold products mt-6">Favori Ürünler</h2>
      <div className='m-4 text-center p-2  rounded-xl cursor-pointer border-r border-l border-gray-200 mt-4

      '>

        <Carousel showDots={false} responsive={responsive} autoPlay={true} infinite={true}
          swipeable={500} autoPlaySpeed={3000} 
        >
          {favourites && favourites.map((star) => (
          <StarItem key={star.id} star={star}/>
          ))}
        </Carousel>
      </div>
      
    </>
  )
}

export default StarProduct
