import React from 'react'
import favourites from '../Api/favorite.json'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css";
import { useWindowWidth } from '@react-hook/window-size'
import StarItem from './StarItem';

function StarProduct() {
    const width = useWindowWidth()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 5,
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
       <h2 className="pt-2 pl-14 -mb-2 text-2xl font-bold products mt-6">Favori Ürünler</h2>
      <div className='w-150 m-auto text-center p-2  rounded-xl cursor-pointer border-r border-l mt-4

      '>

        <Carousel showDots={false} responsive={responsive} autoPlay={true} infinite={true}
          swipeable={500} autoPlaySpeed={3000} style={{ width: width < 640 ? width : '' }}
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
