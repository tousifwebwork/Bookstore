import React from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios  from 'axios'
const Course = () => {

  const [book, setbook] = useState([]);
  useEffect(()=>{
    const getbook = async()=>{
       try{
       const res = await axios.get("http://localhost:3000/book");
       console.log(res.data);
       setbook(res.data);
       }catch(err){
        console.log(err);
       }
    }
    getbook();
  },[])



  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className=' pt-29 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>
          We are delight to have Yous <span className='text-pink-500'>here!</span></h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque eum, assumenda molestiae facilis eaque sunt obcaecati natus veniam voluptatum, illo ea quod iste modi beatae sequi repellendus iure doloribus!
          </p>
         
         <Link to='/' className='mt-8 inline-block'>
          <button className="btn btn-secondary">Back</button>
         </Link>


      </div>
      <div className='mt-12 grid grid-cols-1  md:grid-cols-3 '>
        {
          book.map((item)=>{
            return <Cards key={item.id} item={item} />
          })
        }
      </div>
    </div>
    </>
  )
}

export default Course