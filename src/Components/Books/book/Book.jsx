import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
const Book = ({book}) => {
    // console.log(book);
    const {image,title,author,rating,tags,id}=book
    let nevigate=useNavigate();
    return (

   
      <div  onClick={()=>nevigate(`/book/${id}`)} className="card bg-base-100 shadow-sm rounded-2xl p-6  w-96">
   <figure className="p-6 bg-[#F3F3F3] rounded-2xl py-10 ">
    <img
      src={image}
      alt={title}
      className="  h-[266px]    shadow-black shadow-xl" />
  </figure>
  <div className="card space-y-4">
      <div className="mt-5 mb-5">
{
tags.slice(0,2).map((tags,idx)=><div key={idx} className='badge text-[#23BE0A] text-md font-bold bg-[#F3F3F3] rounded-3xl py-4 px-4 ml-2'>{tags}</div>)
}
      </div>
   <div>
     <h2 className="text-2xl capitalize font-bold">
     {title}
       </h2>
   </div>
    
  
    <p className='text-[#131313CC] text-md capitalize font-medium border-b-2 border-[#131313CC]  border-dashed pt-1 pb-3 mb-5'>By : {author}</p>

    <div className="card-actions flex items-center justify-between">
      <div className="text-lg text-[#131313CC] text-md capitalize font-medium ">Fiction</div>
      <div className="flex items-center gap-x-2">{rating}<CiStar className='text-2xl'></CiStar></div>
    </div>
  </div>
</div>
 
    );
};

export default Book;