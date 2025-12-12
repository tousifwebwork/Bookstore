import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div  className="mx-11  h-110  md:mx-5 w-full cursor-pointer hover:scale-105 translate-transform duration-300 " >
     <div className="card bg-base-100 w-80 border border-gray-300 shadow-sm mt-5 dark:bg-slate-900 dark:text-white dark:border max-h-[350px]">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline absolute left-6">{item.category}</div>
      <div className="cursor-pointer px-4 badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
       Buy Now</div>
    </div>
  </div>
        </div>
    </div>
    </>
  )
}

export default Cards