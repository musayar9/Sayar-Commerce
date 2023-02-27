import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/Carousel"
import "react-multi-carousel/lib/styles.css";
import Comment from '../Api/comment.json'
import { useState, useEffect } from 'react'

function CommentSlider() {
  const [comments, setComments] = useState([])


  useEffect(() => {
    setComments(Comment)
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 900 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <>

<div className='m-4 text-center p-4  rounded-xl cursor-pointer border-r border-l border-gray-400 '>

      <h2 className='pt-2 -mb-4 pl-[30px] text-2xl font-bold products flex justify-left'>Yorumlar</h2>
        <Carousel responsive={responsive} autoPlay={true} infinite={true} 
          swipeable={500} autoPlaySpeed={3000}   >
          {comments && comments.map((comment) => (
            <div className='mt-2 p-2 space-x-0' key={comment.id}>
              <img src={`commentImg/${comment.image}`} alt={comment.alt} className="w-98 h-64  duration-500 drop-shadow-xl rounded-lg" />
            </div>
          ))}
        </Carousel>

  </div>
    </>

  )
}

export default CommentSlider
