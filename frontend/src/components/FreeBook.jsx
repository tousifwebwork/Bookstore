import React from 'react'
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';

import Cards from './Cards';
const FreeBook = () => {
  const [book, setbook] = useState([]);
    useEffect(()=>{
      const getbook = async()=>{
         try{
         const res = await axios.get("http://localhost:3000/book");
          const freeBooks = res.data.filter((i) => i.category === "free");
          setbook(freeBooks);

         }catch(err){
          console.log(err);
         }
      }
      getbook();
    },[])
    
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        
        <div>
        <h1 className='font-bold text-xl  pb-2 mt-10'>Free Offered Courses</h1>
        <p>Ldolores mrecusandae. Voluptate, tenetur odit asperiores temporibus dolores vero illum? Consectetur blanditiis eligendi maiores voluptatibus Sunt iure minus quas consequuntur.</p>
      </div>  

      <div className='h-110 mt-5'>
        <Slider {...settings}>
       {
        book.map((item)=>(
           <Cards item={item} key={item.id}  />
        ))
       }
      </Slider>
      </div>


      </div>
    </>
  )
}

export default FreeBook