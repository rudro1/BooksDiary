import React, { useContext } from 'react';
import { CiStar } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { Transferstate } from '../../ListedBook/ListedBook';
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
const Book = ({book}) => {

 const tab= useContext(Transferstate);
//  console.log(tab,settab)

// ${tab && "grid grid-cols-2 gap-5"}
    const {image,title,author,rating,tags,id,category,yearOfPublishing,publisher,totalPages}=book
    let nevigate=useNavigate();
    return (

   
<div>

{tab ?(



      <div   className={`card bg-base-100  shadow-lg border-1 border-[#1313130D] rounded-2xl  p-3 md:p-4 items-center  ${tab && "md:grid grid-cols-3    "} `}>
   <figure className={` p-6 py-10 bg-[#F3F3F3] rounded-2xl w-[90%] `}>
    <img
      src={image}
      alt={title}
      className={` ' h-[250px]      shadow-black shadow-xl`} />
  </figure>
  <div className={`card ${tab && 'md:col-span-2'}  `}>
    
<div className='flex flex-col gap-y-3 md:gap-y-4'>

     <div>
     <h2 className="text-2xl capitalize font-bold mt-5 md:mt-0">
     {title}
       </h2>
   </div>
    
  

  <div>
      <p className='text-[#131313CC] text-md capitalize font-medium  underline '>By : {author}</p>
</div>
 
 
      <span className='font-bold inline none lg:hidden'>Tag:</span>
       <div className=" flex    items-center gap-x-3">
        <span className='hidden lg:block font-bold '>Tag:</span>
{
tags.slice(0,2).map((tags,idx)=><div key={idx} className='badge text-[#23BE0A] text-sm md:text-md font-bold bg-[#F3F3F3] rounded-3xl py-1 px-2 md:py-4 md:px-4 ml-1'>#{tags}</div>)
}
<div>
  <div className="text-sm md:text-md  text-[#131313CC] font-normal flex gap-x-1 items-center"> <CiLocationOn className='text-xl md:text-2xl'></CiLocationOn>Year of Publishing :  {yearOfPublishing}</div>
</div>
      </div>
<div className='flex gap-x-2 md:gap-x-5 justify-center md:justify-start'>

  <div className="text-sm md:text-md font-regular text-[#13131399] flex gap-x-1 items-center"> <IoIosPeople className='text-xl md:text-2xl '></IoIosPeople> Publisher :{publisher}</div>
  <div className="text-sm md:text-md font-regular text-[#13131399] flex gap-x-1 items-center"><RiPagesLine className='text-xl md:text-2xl '></RiPagesLine>Page :{totalPages}</div>
</div>
<div className='flex justify-center'>
  <hr className='border-b-1 border-[#13131326] w-3/4  ' />
</div>

    <div className="card-actions flex flex-col-reverse  items-stretch md:items-center gap-x-2 md:flex-row-reverse">
      <div className=" btn text-lg text-[#328EFF] bg-[#328EFF26]  text-md capitalize font-medium  py-5 px-5 rounded-l-4xl rounded-b-4xl ">Category: {category}</div>
      <div className=" btn flex items-center text-[#FFAC33] text-lg  bg-[#FFAC3326] capitalize font-medium py-5 px-5 rounded-l-4xl rounded-b-4xl   gap-x-2">Rating: {rating}<CiStar className='text-2xl text-green-500'></CiStar></div>
      <div onClick={()=>{nevigate(`/book/${id}`)}} className=" text-lg btn text-[#ffff] bg-[#a2e299fd] md:bg-[#23BE0A]  py-5 px-5 rounded-l-4xl rounded-b-4xl ">View Details</div>

    </div>
</div>
  </div>
</div>





)
:
(    <div  onClick={()=>{nevigate(`/book/${id}`)}} className={`card bg-base-100 shadow-sm rounded-2xl p-6  `}>
   <figure className={` p-6 py-10 bg-[#F3F3F3] rounded-2xl  `}>
    <img
      src={image}
      alt={title}
      className={` ' h-[266px]    shadow-black shadow-xl`} />
  </figure>
  <div className={`card space-y-4  `}>
    
   <div>
     <h2 className="text-2xl capitalize font-bold">
     {title}
       </h2>
   </div>
    
  
    <p className='text-[#131313CC] text-md capitalize font-medium border-b-2 border-[#131313CC]  border-dashed pt-1 pb-3 mb-5'>By : {author}</p>
  <div className="mt-5 mb-5">
{
tags.slice(0,2).map((tags,idx)=><div key={idx} className='badge text-[#23BE0A] text-md font-bold bg-[#F3F3F3] rounded-3xl py-4 px-4 ml-2'>{tags}</div>)
}
      </div>
    <div className="card-actions flex items-center justify-between">
      <div className="text-lg text-[#131313CC] text-md capitalize font-medium ">{category}</div>
      <div className="flex items-center gap-x-2">{rating}<CiStar className='text-2xl'></CiStar></div>
    </div>
  </div>
</div>





  
)








}

</div>
 
    );
};

export default Book;