import React, { useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getreaditems, setitemstothat } from '../../utilty/UseStore';
import { getwishitem, setitemstowishlist } from '../../utilty/Wishlist';
 

  import { ToastContainer, toast } from 'react-toastify';

const Bookdetails = () => {
  const { bookid } = useParams();
    const notify = (id) => {
      
      
      const read=getreaditems();
   
      const wish=getwishitem();
  
    
(wish.includes(id)  ) && toast("That book are now in your wishlist!");
(read.includes(id)  ) && toast("That book are already you read!");
    }
  // const {pathname}=useLocation()
  const loader = useLoaderData();
  const data = loader.find(book => book.id === parseInt(bookid));
  let { id, image, title, author, review, category, tags, publisher, totalPages, yearOfPublishing, rating } = data;

  // const [arrayofreadbook,setbook]=useState([]);
  const savebook = (book) => {

    // const newarray=[...arrayofreadbook];
    // newarray.push(book)
    // setbook(newarray);
    // console.log(book);
    const setdata = setitemstothat(book)
     const read=getreaditems();
     read.includes(id) && toast("Books are already You read !");


  }
  const classchange=()=>{
    
  }

  //     const getdata=getitems();

  // console.log(getdata);
  // const newtask=arrayofreadbook.map(data=>{

  // getdata.filter(id=>id==data.id)
  // return data;


  // console.log(newtask)
const [isornot, setclasses]=useState();
  return (
   <div className='w-11/12 mx-auto py-15 bg-white'>
     <div className="hero  min-h-screen ">
      <div className=" flex flex-col  lg:flex-row gap-10   ">
      <div className='bg-[#1313130D] md:w-1/2 rounded-2xl flex items-center   py-10 px-15   '>
          <img
          src={image}
          className=" w-1/2 md:w-3/4 shadow-2xl rounded-lg rotate-2  mx-auto "
        />
      </div>
        <div className='md:w-1/2 space-y-5 flex flex-col items-center md:block'>
          <h1 className=" text-3xl md:text-5xl font-bold">{title}</h1>
          <div className="text-lg font-medium text-[#131313CC]">By : {author}</div>
          <p className='text-lg border-b-2 border-t-2 border-[#13131326] py-4 text-[#131313CC] w-3/4'>{category}</p>
          <p className="py-6 font-normal text-lg  text-pretty text-primary md:text-left">
            <span className='font-bold text-[#131313] block md:inline'>Review:</span>
            <span className='text-[#131313CC]'>
              {review}
            </span>
          </p>
          <div className="text-lg capitalize font-bold">
            tag:{
              tags.map(tags => <span className='badge text-[#23BE0A] text-md font-medium bg-[#23BE0A0D] rounded-3xl py-4 px-4 ml-2'>#{tags}</span>)
            }
          </div>
          <hr className='border-b-1 border-[#13131324] w-3/4' />
          <div>
            <div className="">
              <table className="table">

                <tbody>

                  <tr className="border-b-0 text-lg font-normal ">

                    <td className='text-[#131313B3] py-1 '>Number of Pages :</td>
                    <td className='inline text-lg font-bold '>{totalPages}</td>

                  </tr>
                  <tr className="border-b-0 text-lg font-normal">

                    <td className='text-[#131313B3] py-1 '>Publisher :</td>
                    <td className='inline text-lg font-bold'>{publisher}</td>

                  </tr>
                  <tr className="border-b-0 text-lg font-normal">

                    <td className='text-[#131313B3] py-1 '>Year of Publishing :</td>
                    <td className='inline text-lg font-bold'>{yearOfPublishing}</td>

                  </tr>
                  <tr className="border-b-0 text-lg font-normal">

                    <td className='text-[#131313B3] py-1   '>Rating :</td>
                    <td className='inline text-lg font-bold '>{rating}</td>

                  </tr>

                </tbody>
              </table>
            </div>

          </div>

          <div className='flex gap-x-5  md:justify-start'>
            <button className={`btn  text-lg font-semibold  ${isornot ? "bg-white text-black" : "bg-[#50B1C9] text-white"} px-5 py-6 rounded-lg `} onClick={() => {savebook(data.id) ; setclasses(true) }}>Read</button>
            <button className={`btn  text-lg font-semibold ${isornot ? " bg-[#50B1C9] text-white" : "bg-white text-black"}  px-5  py-6 rounded-lg`} onClick={() =>{setitemstowishlist(data.id),setclasses(false),notify(data.id)}}>Wishlist</button>
          </div>
        </div>
      </div>
         <ToastContainer />
    </div>
   </div>
  );
};

export default Bookdetails;