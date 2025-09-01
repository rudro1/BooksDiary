import React, { useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { setitemstothat } from '../../utilty/UseStore';
import { setitemstowishlist } from '../../utilty/Wishlist';


const Bookdetails = () => {
    const {bookid}=useParams();
    // const {pathname}=useLocation()
    const loader=useLoaderData();
   const data= loader.find(book=>book.id===parseInt(bookid));
    let {id,image,title}=data;

    // const [arrayofreadbook,setbook]=useState([]);
    const savebook=(book)=>{

      // const newarray=[...arrayofreadbook];
      // newarray.push(book)
      // setbook(newarray);
    // console.log(book);
     const setdata=setitemstothat(book)
    
     
    }

//     const getdata=getitems();
     
// console.log(getdata);
// const newtask=arrayofreadbook.map(data=>{

// getdata.filter(id=>id==data.id)
// return data;


// console.log(newtask)
    
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='flex gap-x-5'>
        <button className="btn btn-primary" onClick={()=>savebook(data.id)}>Read</button>
      <button className="btn btn-primary" onClick={()=>setitemstowishlist(data.id)}>Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Bookdetails;